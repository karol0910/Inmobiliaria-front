import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import We from './pages/We';
import Properties from './pages/Properties';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-yellow-500 hover:text-yellow-600 transition duration-300">
              Inmobiliaria Santa María
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-yellow-500 font-semibold transition duration-300"
              >
                Inicio
              </Link>
              <Link 
                to="/properties" 
                className="text-gray-800 hover:text-yellow-500 font-semibold transition duration-300"
              >
                Propiedades
              </Link>
              <Link 
                to="/services" 
                className="text-gray-800 hover:text-yellow-500 font-semibold transition duration-300"
              >
                Servicios
              </Link>
              <Link 
                to="/we" 
                className="text-gray-800 hover:text-yellow-500 font-semibold transition duration-300"
              >
                Nosotros
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-yellow-500 font-semibold transition duration-300"
              >
                Contacto
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-800 hover:text-yellow-500 font-semibold py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link 
                  to="/properties" 
                  className="text-gray-800 hover:text-yellow-500 font-semibold py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Propiedades
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-800 hover:text-yellow-500 font-semibold py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link 
                  to="/we" 
                  className="text-gray-800 hover:text-yellow-500 font-semibold py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nosotros
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-800 hover:text-yellow-500 font-semibold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </header>

        <main className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<Detail />} />
            <Route path="/we" element={<We />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Inmobiliaria Santa María. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;