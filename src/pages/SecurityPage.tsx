
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SecurityPage = () => {
  const securityChecks = [
    { name: "SSL сертификат", status: "pass", description: "Бүх системүүд HTTPS протокол ашиглаж байна" },
    { name: "Хандалтын эрх", status: "warning", description: "Зарим системүүдэд хандалтын эрх тохиргоо шаардлагатай" },
    { name: "Нууц үгийн бодлого", status: "pass", description: "Нууц үгийн бодлого стандартын дагуу тохируулсан" },
    { name: "Өгөгдлийн нөөцлөлт", status: "fail", description: "Автомат нөөцлөлт тохируулаагүй" },
    { name: "Аудитын лог", status: "pass", description: "Бүх системийн үйл ажиллагаа бүртгэгдэж байна" }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass": return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning": return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "fail": return <XCircle className="h-5 w-5 text-red-500" />
      default: return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pass": return <Badge className="bg-green-100 text-green-800">Амжилттай</Badge>
      case "warning": return <Badge className="bg-yellow-100 text-yellow-800">Анхааруулга</Badge>
      case "fail": return <Badge className="bg-red-100 text-red-800">Алдаа</Badge>
      default: return null
    }
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <div className="flex items-center gap-4 p-4 bg-white border-b border-gray-200">
            <SidebarTrigger className="h-8 w-8" />
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Аюулгүй байдал</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">Стандартын шалгалт</span>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Мэдээллийн аюулгүй байдлын шалгалт
                </h1>
                <p className="text-gray-600 mt-2">Системүүдийн аюулгүй байдлын стандартуудын биелэлтийг хянах</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">3</div>
                    <div className="text-sm text-gray-600">Амжилттай</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">1</div>
                    <div className="text-sm text-gray-600">Анхааруулга</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">1</div>
                    <div className="text-sm text-gray-600">Алдаа</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                {securityChecks.map((check, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(check.status)}
                          <div>
                            <h3 className="font-semibold text-gray-900">{check.name}</h3>
                            <p className="text-sm text-gray-600">{check.description}</p>
                          </div>
                        </div>
                        {getStatusBadge(check.status)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SecurityPage;
