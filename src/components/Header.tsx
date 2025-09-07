import { Button } from "@/components/ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      // The actual scrolling will happen after the navigation
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100, // Adjust offset for header
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100, // Adjust offset for header
          behavior: 'smooth'
        });
      }
    }
  };

  const navigateToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/#contacto');
      // The actual scrolling will happen after the navigation
      setTimeout(() => {
        const element = document.getElementById('contacto');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100, // Adjust offset for header
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById('contacto');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100, // Adjust offset for header
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={navigateToHome}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Academia de Sumisas</span>
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre-mi')} 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Sobre Mí
          </button>
          <button 
            onClick={() => scrollToSection('servicios')} 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('testimonios')} 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Testimonios
          </button>
          <Link 
            to="/blog" 
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            Blog
          </Link>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant"
          >
            Agenda tu Consulta
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;