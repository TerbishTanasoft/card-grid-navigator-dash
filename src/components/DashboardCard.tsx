
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Calendar, Users, TrendingUp } from "lucide-react"

interface DashboardCardProps {
  title: string
  description: string
  status: "active" | "pending" | "completed"
  progress: number
  team: number
  dueDate: string
  isListView?: boolean
}

export function DashboardCard({ 
  title, 
  description, 
  status, 
  progress, 
  team, 
  dueDate, 
  isListView = false 
}: DashboardCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-blue-100 text-blue-800"
  }

  if (isListView) {
    return (
      <Card className="hover:shadow-md transition-all duration-200 border border-gray-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
                <Badge className={`${statusColors[status]} border-0`}>
                  {status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {progress}% complete
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {team} members
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {dueDate}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-1 truncate">
              {title}
            </CardTitle>
            <Badge className={`${statusColors[status]} border-0`}>
              {status}
            </Badge>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 shrink-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {team} members
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {dueDate}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
