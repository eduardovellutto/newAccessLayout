import { Metadata } from "next"

interface LayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Configurações',
    description: 'Descrição da pagina de configurações',
  }


export default function ConfigurationLayout({ children }: LayoutProps){
    return (
        <div className="p-10 w-full h-full flex items-center justify-center">
            {children}
        </div>
    )
}