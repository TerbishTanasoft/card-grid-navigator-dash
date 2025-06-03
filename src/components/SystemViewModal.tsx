
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Calendar, User, Database, X } from "lucide-react"

interface SystemViewModalProps {
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
}

const typeColors = {
  "Карт": "bg-blue-100 text-blue-800 border-blue-200",
  "Коре": "bg-red-100 text-red-800 border-red-200", 
  "Дотоод": "bg-green-100 text-green-800 border-green-200",
  "Дижитал": "bg-purple-100 text-purple-800 border-purple-200"
}

export function SystemViewModal({ isOpen, onClose, system }: SystemViewModalProps) {
  if (!system) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Database className="h-6 w-6 text-gray-600" />
            {system.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Статус болон төрөл */}
          <div className="flex items-center gap-3">
            <Badge className={`${typeColors[system.type]} text-sm`}>
              {system.type}
            </Badge>
            {!system.isActive && (
              <Badge variant="secondary" className="text-sm bg-gray-100 text-gray-600">
                Идэвхгүй
              </Badge>
            )}
            {system.isActive && (
              <Badge className="text-sm bg-green-100 text-green-800">
                Идэвхтэй
              </Badge>
            )}
          </div>

          {/* Тайлбар */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Тайлбар</h4>
            <p className="text-gray-700">{system.description}</p>
          </div>

          {/* Дэлгэрэнгүй мэдээлэл */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Үндсэн мэдээлэл</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Хөгжүүлэгч:</span>
                  <span className="font-medium">{system.developer}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Хугацаа:</span>
                  <span className="font-medium">{system.duration}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-600">Үнэлгээ:</span>
                  <span className="font-bold text-yellow-600">{system.rating}/10</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Холбоотой системүүд</h4>
              {system.relatedSystems.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {system.relatedSystems.map((relatedSystem, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {relatedSystem}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Холбоотой систем байхгүй</p>
              )}
            </div>
          </div>

          {/* Товчнууд */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Хаах
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
