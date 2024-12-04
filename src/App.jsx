import './App.css';
import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Recycle, Menu } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle email signup
    alert(`¡Gracias por suscribirte con ${email}!`);
    setEmail('');
  };

  return (
    <div className="bg-[#D9D9D9] min-h-screen flex flex-col">
      {/* Mobile Navigation */}
      <nav className="bg-[#225779] text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShoppingBag color="#57CC98" size={24} />
          <span className="text-xl font-bold">Wearabouts</span>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <Menu color="#57CC98" size={24} />
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#225779] z-50 md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-white"
              >
                ✕
              </button>
              <a href="#" className="text-2xl text-white hover:text-[#57CC98]">Inicio</a>
              <a href="#" className="text-2xl text-white hover:text-[#57CC98]">Catálogo</a>
              <a href="#" className="text-2xl text-white hover:text-[#57CC98]">Sobre Nosotros</a>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-[#57CC98]">Inicio</a>
          <a href="#" className="hover:text-[#57CC98]">Catálogo</a>
          <a href="#" className="hover:text-[#57CC98]">Sobre Nosotros</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-grow container mx-auto px-4 py-8 md:py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <img
            src="https://www.fashiongonerogue.com/wp-content/uploads/2014/04/kylie-james6.jpg"
            alt="Wearabouts Clothing"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-[#225779] mb-4">
            Moda Sostenible, <br />Segunda Vida
          </h1>
          <p className="text-base md:text-xl text-[#225779] mb-6">
            Descubre ropa única y de calidad. Cada prenda tiene una historia, y tú eres parte de ella.
          </p>

          {/* Email Signup */}
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg md:rounded-l-lg md:rounded-r-none border-2 border-[#225779] mb-2 md:mb-0 md:flex-grow"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-[#57CC98] text-white p-3 rounded-lg md:rounded-l-none hover:bg-opacity-90 transition flex items-center justify-center"
            >
              Suscribirse <ArrowRight className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-8 md:py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#225779] mb-8 md:mb-12">
            ¿Por qué Wearabouts?
          </h2>
          <div className="flex flex-col md:flex-row justify-around">
            {[
              {
                icon: <Recycle color="#57CC98" size={48} className="mx-auto mb-4" />,
                title: "Sostenibilidad",
                description: "Reducimos la huella de carbono al darle una segunda vida a la ropa."
              },
              {
                icon: <ShoppingBag color="#57CC98" size={48} className="mx-auto mb-4" />,
                title: "Calidad",
                description: "Cada prenda es cuidadosamente seleccionada para garantizar durabilidad."
              },
              {
                icon: <ArrowRight color="#57CC98" size={48} className="mx-auto mb-4" />,
                title: "Único",
                description: "Encuentra piezas exclusivas que reflejan tu estilo individual."
              }
            ].map((feature, index) => (
              <div key={index} className="w-full md:w-1/3 p-4 mb-4 md:mb-0">
                {feature.icon}
                <h3 className="text-xl md:text-2xl text-[#225779] mb-4">{feature.title}</h3>
                <p className="text-[#225779]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#225779] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p>© 2024 Wearabouts. Todos los derechos reservados.</p>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-[#57CC98]">Instagram</a>
            <a href="#" className="hover:text-[#57CC98]">Facebook</a>
            <a href="#" className="hover:text-[#57CC98]">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;