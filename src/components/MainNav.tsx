import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Academia de Sumisas', path: '/' },
    { name: 'Sobre Mí', path: '/#sobre-mi' },
    { name: 'Servicios', path: '/#servicios' },
    { name: 'Testimonios', path: '/#testimonios' },
    { name: 'Agenda tu Consulta', path: '/#contacto' },
  ];

  const scrollToSection = (hash: string) => {
    if (hash.startsWith('#')) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-dark-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 flex items-center">
              Academia de Sumisas
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || 
                             (location.pathname === '/' && location.hash === item.path.substring(1));
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => {
                    if (item.path.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(item.path);
                    }
                  }}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-300 hover:text-white hover:bg-dark-surface-secondary'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-surface-secondary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
                           (location.pathname === '/' && location.hash === item.path.substring(1));
            
            return (
              <Link
                key={`mobile-${item.name}`}
                to={item.path}
                onClick={(e) => {
                  if (item.path.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(item.path);
                  }
                }}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  isActive
                    ? 'text-primary bg-dark-surface-secondary'
                    : 'text-gray-300 hover:text-white hover:bg-dark-surface-secondary'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
