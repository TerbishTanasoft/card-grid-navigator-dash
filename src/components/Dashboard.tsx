
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LayoutGrid, LayoutList, Search, Plus, Filter } from "lucide-react"
import { DashboardCard } from "./DashboardCard"

const mockData = [
  {
    id: 1,
    title: "Website Redesign",
    description: "Complete overhaul of the company website with modern design principles and improved user experience.",
    status: "active" as const,
    progress: 75,
    team: 5,
    dueDate: "Dec 15"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native iOS and Android application for customer engagement and service delivery.",
    status: "pending" as const,
    progress: 30,
    team: 8,
    dueDate: "Jan 20"
  },
  {
    id: 3,
    title: "Database Migration",
    description: "Migration of legacy database systems to modern cloud infrastructure with improved performance.",
    status: "completed" as const,
    progress: 100,
    team: 3,
    dueDate: "Nov 30"
  },
  {
    id: 4,
    title: "API Integration",
    description: "Integration with third-party services and development of internal API endpoints.",
    status: "active" as const,
    progress: 60,
    team: 4,
    dueDate: "Dec 10"
  },
  {
    id: 5,
    title: "Security Audit",
    description: "Comprehensive security assessment and implementation of recommended security measures.",
    status: "pending" as const,
    progress: 15,
    team: 2,
    dueDate: "Jan 15"
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "System-wide performance improvements and optimization of critical user workflows.",
    status: "active" as const,
    progress: 45,
    team: 3,
    dueDate: "Dec 25"
  }
]

export function Dashboard() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredData = mockData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects Dashboard</h1>
          <p className="text-gray-600">Manage and track all your projects in one place</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
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

      {/* Content */}
      <div className={`transition-all duration-300 ${
        viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
      }`}>
        {filteredData.map((item) => (
          <DashboardCard
            key={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
            progress={item.progress}
            team={item.team}
            dueDate={item.dueDate}
            isListView={viewMode === "list"}
          />
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or create a new project.</p>
        </div>
      )}
    </div>
  )
}
