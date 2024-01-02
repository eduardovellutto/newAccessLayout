import { Metadata } from "next"

interface LayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Colaborador',
    description: 'Descrição da pagina colaborador',
  }


export default function EmployeeLayout({ children }: LayoutProps){
    return (
        <div className="p-10 w-[80%] h-full flex items-center justify-cente">
            {children}
        </div>
    )
}