import './globals.css'
import Navbar from './components/Navbar'


export const metadata = {
  title: 'My Landing Page',
  description: 'Landing page built with Next.js + Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="bg-white">
      <Navbar />
      <div className="pt-4">
      {children}
      </div>
   </body>

    </html>
  )
}
