
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LayoutGrid, LayoutList, Search, Plus, Filter, Database } from "lucide-react"
import { SystemCard } from "./SystemCard"
import { SystemViewModal } from "./SystemViewModal"
import { SystemEditModal } from "./SystemEditModal"
import { SystemCreateModal } from "./SystemCreateModal"

const mockSystemData = [
  {
    id: 1,
    name: "Санхүүгийн систем",
    type: "Дотоод" as const,
    rating: 9.2,
    description: "Компанийн санхүүгийн бүх үйл ажиллагааг удирддаг төв систем",
    relatedSystems: ["HR систем", "Тайлангийн систем"],
    developer: "IT хэлтэс",
    duration: "2021-2024",
    isActive: true
  },
  {
    id: 2,
    name: "Хэрэглэгчийн портал",
    type: "Дижитал" as const,
    rating: 8.7,
    description: "Гадаад хэрэглэгчдэд зориулсан онлайн үйлчилгээний портал",
    relatedSystems: ["Төлбөрийн систем", "Нотификашн систем"],
    developer: "Гадны компани",
    duration: "2022-2025",
    isActive: true
  },
  {
    id: 3,
    name: "Карт боловсруулах систем",
    type: "Карт" as const,
    rating: 9.5,
    description: "Банкны карт болон төлбөрийн операцыг боловсруулах систем",
    relatedSystems: ["Санхүүгийн систем", "Мониторинг систем"],
    developer: "Банкны технологи ХХК",
    duration: "2020-2025",
    isActive: true
  },
  {
    id: 4,
    name: "Хуучин тайлангийн систем",
    type: "Дотоод" as const,
    rating: 6.2,
    description: "Хуучин тайлангийн систем - солигдох шаардлагатай",
    relatedSystems: [],
    developer: "IT хэлтэс",
    duration: "2018-2022",
    isActive: false
  },
  {
    id: 5,
    name: "Үндсэн банкны систем",
    type: "Коре" as const,
    rating: 9.8,
    description: "Банкны үндсэн үйл ажиллагааг удирддаг төв систем",
    relatedSystems: ["Карт систем", "Санхүүгийн систем", "Тайлангийн систем"],
    developer: "Temenos",
    duration: "2019-2026",
    isActive: true
  }
]

export function SystemDashboard() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [systems, setSystems] = useState(mockSystemData)
  
  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [selectedSystem, setSelectedSystem] = useState<typeof mockSystemData[0] | null>(null)

  const filteredData = systems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleView = (system: typeof mockSystemData[0]) => {
    setSelectedSystem(system)
    setViewModalOpen(true)
  }

  const handleEdit = (system: typeof mockSystemData[0]) => {
    setSelectedSystem(system)
    setEditModalOpen(true)
  }

  const handleSave = (updatedSystem: typeof mockSystemData[0]) => {
    setSystems(prev => prev.map(system => 
      system.id === updatedSystem.id ? updatedSystem : system
    ))
  }

  const handleCreate = (newSystem: typeof mockSystemData[0]) => {
    setSystems(prev => [...prev, newSystem])
  }

  const handleDelete = (systemId: number) => {
    setSystems(prev => prev.filter(system => system.id !== systemId))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Гарчиг */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Системийн удирдлага</h1>
          <p className="text-gray-600">Компанийн бүх IT системүүдийг төвлөрсөн байдлаар удирдах</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
          onClick={() => setCreateModalOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Шинэ систем нэмэх
        </Button>
      </div>

      {/* Хяналтын товчнууд */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Системээр хайх..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Шүүлтүүр
          </Button>
          
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`h-8 px-3 ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`h-8 px-3 ${viewMode === "list" ? "bg-white shadow-sm" : ""}`}
            >
              <LayoutList className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Агуулга */}
      <div className={`transition-all duration-300 ${
        viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
      }`}>
        {filteredData.map((item) => (
          <SystemCard
            key={item.id}
            name={item.name}
            type={item.type}
            rating={item.rating}
            description={item.description}
            relatedSystems={item.relatedSystems}
            developer={item.developer}
            duration={item.duration}
            isActive={item.isActive}
            isListView={viewMode === "list"}
            onView={() => handleView(item)}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Database className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Систем олдсонгүй</h3>
          <p className="text-gray-600">Хайлтын нөхцлөө өөрчилж үзнэ үү эсвэл шинэ систем нэмнэ үү.</p>
        </div>
      )}

      {/* Modal-ууд */}
      <SystemViewModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        system={selectedSystem}
      />

      <SystemEditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        system={selectedSystem}
        onSave={handleSave}
      />

      <SystemCreateModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={handleCreate}
      />
    </div>
  )
}
