
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { SystemDashboard } from "@/components/SystemDashboard"

const SystemsListPage = () => {
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
              <span className="text-gray-900 font-medium">Системийн жагсаалт</span>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <SystemDashboard />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SystemsListPage;
