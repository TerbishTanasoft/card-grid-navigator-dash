
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { SystemCreateModal } from "@/components/SystemCreateModal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewSystemPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const navigate = useNavigate()

  const handleCreate = (newSystem: any) => {
    console.log('Шинэ систем:', newSystem)
    // Энд backend рүү илгээх логик нэмэгдэнэ
    navigate('/')
  }

  const handleClose = () => {
    navigate('/')
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
              <span>Системүүд</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">Шинэ систем нэмэх</span>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-6">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Шинэ систем бүртгэх</h1>
              <p className="text-gray-600">Шинэ систем нэмэхэд бэлэн байна</p>
            </div>
          </div>
        </main>
        
        <SystemCreateModal
          isOpen={isModalOpen}
          onClose={handleClose}
          onCreate={handleCreate}
        />
      </div>
    </SidebarProvider>
  );
};

export default NewSystemPage;
