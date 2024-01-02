import { Metadata } from "next"

interface LayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Equipamentos',
    description: 'Descrição da pagina equipamentos',
  }


export default function EquipmentLayout({ children }: LayoutProps){
    return (
        <div className="p-10 w-full h-full flex items-center justify-center">
            {children}
        </div>
    )
}