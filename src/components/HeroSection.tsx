import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-label="Fondo de la sección principal de la escuela de sumisas"
      >
        <div className="absolute inset-0 bg-gradient-dark opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Academia de Sumisas: Tu Guía Experto en
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              BDSM y Relaciones de Sumisión
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aprende Sumisión Consensuada con un Experto formador de sumisas y en BDSM
          </h2>
          
          <div className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Descubre el Arte de la Sumisión con el mejor profesional posible
            </h3>
            <p>
              En mi escuela de sumisas, te ofrezco una formación especializada en BDSM, 
              relaciones D/s y sumisión consensuada con los más altos estándares de seguridad y respeto.
            </p>
            <h4 className="text-xl font-medium text-white">
              ¿Por qué elegir mi escuela de sumisas?
            </h4>
          </div>
          
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-white text-lg px-8 py-4 shadow-elegant transform hover:scale-105 transition-all duration-300"
            aria-label="Comienza tu viaje en nuestra escuela de sumisas"
          >
            Comienza tu Viaje en la Sumisión
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;