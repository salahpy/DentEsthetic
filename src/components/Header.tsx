const Header = () => {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-blue-600">DentEsthetic</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-600 hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">À propos</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Témoignages</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#appointment" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Prendre Rendez-vous
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;