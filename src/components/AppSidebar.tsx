
import { Calendar, Home, Database, Shield, Settings, Plus, List } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Үндсэн хуудас",
    url: "/",
    icon: Home,
  },
  {
    title: "Системийн бүртгэл",
    url: "#systems",
    icon: Database,
  },
  {
    title: "Системийн жагсаалт",
    url: "#list",
    icon: List,
  },
  {
    title: "Аюулгүй байдал",
    url: "#security",
    icon: Shield,
  },
]

const toolsItems = [
  {
    title: "Шинэ систем",
    url: "#new-system",
    icon: Plus,
  },
  {
    title: "Тохиргоо",
    url: "#settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">СБ</span>
          </div>
          <span className="font-semibold text-lg">Системийн бүртгэл</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 uppercase text-xs font-medium tracking-wider mb-2">
            Үндсэн цэс
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="w-full justify-start px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-gray-500 uppercase text-xs font-medium tracking-wider mb-2">
            Хэрэгслүүд
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="w-full justify-start px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-medium">ХА</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Хэрэглэгч Админ</p>
            <p className="text-xs text-gray-500 truncate">admin@company.mn</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
