
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Database, X, Plus } from "lucide-react"

interface SystemEditModalProps {
  isOpen: boolean
  onClose: () => void
  system: {
    id: number
    name: string
    type: "Карт" | "Коре" | "Дотоод" | "Дижитал"
    rating: number
    description: string
    relatedSystems: string[]
    developer: string
    duration: string
    isActive: boolean
  } | null
  onSave: (updatedSystem: any) => void
}

const systemTypes = ["Карт", "Коре", "Дотоод", "Дижитал"]

export function SystemEditModal({ isOpen, onClose, system, onSave }: SystemEditModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    type: "Дотоод" as "Карт" | "Коре" | "Дотоод" | "Дижитал",
    rating: 0,
    description: "",
    relatedSystems: [] as string[],
    developer: "",
    duration: "",
    isActive: true
  })
  const [newRelatedSystem, setNewRelatedSystem] = useState("")

  useEffect(() => {
    if (system) {
      setFormData({
        name: system.name,
        type: system.type,
        rating: system.rating,
        description: system.description,
        relatedSystems: [...system.relatedSystems],
        developer: system.developer,
        duration: system.duration,
        isActive: system.isActive
      })
    }
  }, [system])

  const handleSave = () => {
    if (system) {
      onSave({
        ...system,
        ...formData
      })
      onClose()
    }
  }

  const addRelatedSystem = () => {
    if (newRelatedSystem.trim() && !formData.relatedSystems.includes(newRelatedSystem.trim())) {
      setFormData(prev => ({
        ...prev,
        relatedSystems: [...prev.relatedSystems, newRelatedSystem.trim()]
      }))
      setNewRelatedSystem("")
    }
  }

  const removeRelatedSystem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      relatedSystems: prev.relatedSystems.filter((_, i) => i !== index)
    }))
  }

  if (!system) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Database className="h-6 w-6 text-gray-600" />
            Систем засах
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Системийн нэр */}
          <div className="space-y-2">
            <Label htmlFor="name">Системийн нэр *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Системийн нэр оруулна уу"
            />
          </div>

          {/* Төрөл */}
          <div className="space-y-2">
            <Label>Төрөл *</Label>
            <div className="flex gap-2">
              {systemTypes.map((type) => (
                <Button
                  key={type}
                  variant={formData.type === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, type: type as any }))}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Үнэлгээ */}
          <div className="space-y-2">
            <Label htmlFor="rating">Үнэлгээ (0-10) *</Label>
            <Input
              id="rating"
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={formData.rating}
              onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) || 0 }))}
            />
          </div>

          {/* Тайлбар */}
          <div className="space-y-2">
            <Label htmlFor="description">Тайлбар *</Label>
            <textarea
              id="description"
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Системийн тайлбар оруулна уу"
            />
          </div>

          {/* Хөгжүүлэгч */}
          <div className="space-y-2">
            <Label htmlFor="developer">Хөгжүүлэгч *</Label>
            <Input
              id="developer"
              value={formData.developer}
              onChange={(e) => setFormData(prev => ({ ...prev, developer: e.target.value }))}
              placeholder="Хөгжүүлэгчийн нэр оруулна уу"
            />
          </div>

          {/* Хугацаа */}
          <div className="space-y-2">
            <Label htmlFor="duration">Хугацаа *</Label>
            <Input
              id="duration"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
              placeholder="жишээ: 2021-2024"
            />
          </div>

          {/* Холбоотой системүүд */}
          <div className="space-y-2">
            <Label>Холбоотой системүүд</Label>
            <div className="flex gap-2">
              <Input
                value={newRelatedSystem}
                onChange={(e) => setNewRelatedSystem(e.target.value)}
                placeholder="Систем нэмэх"
                onKeyPress={(e) => e.key === 'Enter' && addRelatedSystem()}
              />
              <Button onClick={addRelatedSystem} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.relatedSystems.map((relatedSystem, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1">
                  {relatedSystem}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-red-500" 
                    onClick={() => removeRelatedSystem(index)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          {/* Идэвхтэй эсэх */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
              className="rounded"
            />
            <Label htmlFor="isActive">Идэвхтэй систем</Label>
          </div>

          {/* Товчнууд */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Цуцлах
            </Button>
            <Button onClick={handleSave}>
              Хадгалах
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
