import { ItemNavbar } from '../Ui/ItemNavbar/ItemNavbar'
import { Footer } from '../Layouts/Footer/footer'

export const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-gradient-to-r from-gray-800 via-green-800 to-emerald-600 p-4 fixed top-0 left-0 w-full z-50">
        <nav>
          <ItemNavbar />
        </nav>
      </header>
      
      <main className="min-h-screen pt-16">
        {children}
      </main>
      
      <Footer />
    </>
  )
} 