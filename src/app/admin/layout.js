import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeToggleButton } from "@/components/theme-toggle-button"
import { Toaster } from "@/components/ui/toaster"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
        <div className="flex flex-row items-center justify-center p-3">
              <img src="/rguktlogo.png" alt="Logo" className="w-20 h-20" />
              <pre>       </pre>
              <h1 className="text-[calc(40px)] font-bold text-black dark:text-white">
                Krishna Admin Dashboard
              </h1>
            </div>
          <ThemeToggleButton classes="fixed right-7 bottom-5"/>
          {/* <header className={`flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full`}>
            <div className="flex items-center justify-between w-full">
              <SidebarTrigger className="ml-2" />
            </div>
          </header> */}
          {children}
        </main>
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  )
}
        