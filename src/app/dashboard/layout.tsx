import { Metadata } from "next"

interface LayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Descrição da pagina dashboard',
  }


export default function DashboardLayout({ children }: LayoutProps){
    return (
        <div className="p-10 w-full h-full flex items-center justify-center">
            {children}
        </div>
    )
}