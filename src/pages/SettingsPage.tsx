
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Settings, User, Bell, Shield, Database } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SettingsPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <div className="flex items-center gap-4 p-4 bg-white border-b border-gray-200">
            <SidebarTrigger className="h-8 w-8" />
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Тохиргоо</span>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Settings className="h-6 w-6" />
                  Системийн тохиргоо
                </h1>
                <p className="text-gray-600 mt-2">Системийн ерөнхий тохиргоонуудыг удирдах</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Хэрэглэгчийн мэдээлэл
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="username">Хэрэглэгчийн нэр</Label>
                      <Input id="username" defaultValue="Хэрэглэгч Админ" />
                    </div>
                    <div>
                      <Label htmlFor="email">И-мэйл</Label>
                      <Input id="email" type="email" defaultValue="admin@company.mn" />
                    </div>
                    <Button>Хадгалах</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Мэдэгдлийн тохиргоо
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>И-мэйл мэдэгдэл</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Системийн сэрэмжлүүлэг</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Аюулгүй байдлын анхааруулга</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <Button>Хадгалах</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Өгөгдлийн тохиргоо
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Автомат нөөцлөлт</Label>
                      <div className="flex items-center gap-2 mt-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Өдөр бүр нөөцлөх</span>
                      </div>
                    </div>
                    <div>
                      <Label>Өгөгдөл устгах хугацаа</Label>
                      <Input defaultValue="365" type="number" />
                      <span className="text-xs text-gray-500">хоногийн дараа</span>
                    </div>
                    <Button>Хадгалах</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Аюулгүй байдлын тохиргоо
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Нэвтрэх оролдлогын хязгаар</Label>
                      <Input defaultValue="5" type="number" />
                    </div>
                    <div>
                      <Label>Сессийн хугацаа (минут)</Label>
                      <Input defaultValue="60" type="number" />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Хоёр дахин баталгаажуулалт</span>
                    </div>
                    <Button>Хадгалах</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SettingsPage;
