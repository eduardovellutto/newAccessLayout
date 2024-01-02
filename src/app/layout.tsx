import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: 'Titulo da Aplicação',
  description: 'Descrição da aplicação'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
return (
  <html lang="en">
    <body>
    <div className= 'w-[screen] h-screen flex flex-col items-center justify-between'>
      <Header/>
      {children}
      <Footer/>
      </div>
    </body>
  </html>
)
} 
