
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Calendar, User, Database, Edit, Trash2, Eye } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface SystemCardProps {
  name: string
  type: "Карт" | "Коре" | "Дотоод" | "Дижитал"
  rating: number
  description: string
  relatedSystems: string[]
  developer: string
  duration: string
  isActive: boolean
  isListView?: boolean
  onView: () => void
  onEdit: () => void
  onDelete: () => void
}

const typeColors = {
  "Карт": "bg-blue-100 text-blue-800 border-blue-200",
  "Коре": "bg-red-100 text-red-800 border-red-200", 
  "Дотоод": "bg-green-100 text-green-800 border-green-200",
  "Дижитал": "bg-purple-100 text-purple-800 border-purple-200"
}

export function SystemCard({
  name,
  type,
  rating,
  description,
  relatedSystems,
  developer,
  duration,
  isActive,
  isListView = false,
  onView,
  onEdit,
  onDelete
}: SystemCardProps) {
  if (isListView) {
    return (
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <Database className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
                <Badge className={`${typeColors[type]} text-xs`}>
                  {type}
                </Badge>
                {!isActive && (
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                    Идэвхгүй
                  </Badge>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Тайлбар:</span>
                  <p className="mt-1 text-gray-700 line-clamp-2">{description}</p>
                </div>
                
                <div>
                  <span className="font-medium">Хөгжүүлэгч:</span>
                  <p className="mt-1">{developer}</p>
                </div>
                
                <div>
                  <span className="font-medium">Хугацаа:</span>
                  <p className="mt-1">{duration}</p>
                </div>
                
                <div>
                  <span className="font-medium">Үнэлгээ:</span>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{rating}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <Button variant="outline" size="sm" onClick={onView}>
                <Eye className="h-4 w-4 mr-1" />
                Харах
              </Button>
              <Button variant="outline" size="sm" onClick={onEdit}>
                <Edit className="h-4 w-4 mr-1" />
                Засах
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Системийг устгах</AlertDialogTitle>
                    <AlertDialogDescription>
                      Та "{name}" системийг устгахдаа итгэлтэй байна уу? Энэ үйлдлийг буцаах боломжгүй.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Цуцлах</AlertDialogCancel>
                    <AlertDialogAction onClick={onDelete} className="bg-red-600 hover:bg-red-700">
                      Устгах
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{name}</h3>
          </div>
          <div className="flex flex-col items-end gap-1">
            <Badge className={`${typeColors[type]} text-xs`}>
              {type}
            </Badge>
            {!isActive && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                Идэвхгүй
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">Хөгжүүлэгч:</span>
            <span className="font-medium">{developer}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">Хугацаа:</span>
            <span className="font-medium">{duration}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-600">Үнэлгээ:</span>
            <span className="font-bold text-yellow-600">{rating}/10</span>
          </div>
        </div>

        {relatedSystems.length > 0 && (
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Холбоотой системүүд:</p>
            <div className="flex flex-wrap gap-1">
              {relatedSystems.map((system, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {system}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-3 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={onView}>
          <Eye className="h-4 w-4 mr-1" />
          Харах
        </Button>
        <Button variant="outline" size="sm" className="flex-1" onClick={onEdit}>
          <Edit className="h-4 w-4 mr-1" />
          Засах
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
              <Trash2 className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Системийг устгах</AlertDialogTitle>
              <AlertDialogDescription>
                Та "{name}" системийг устгахдаа итгэлтэй байна уу? Энэ үйлдлийг буцаах боломжгүй.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Цуцлах</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} className="bg-red-600 hover:bg-red-700">
                Устгах
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  )
}
