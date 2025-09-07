import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import servicesBg from "@/assets/services-bg.jpg";
import { services } from "@/data/services";
import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  keywords: string;
  duration: string;
  image: string;
}

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-20 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${servicesBg})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cursos y Mentorías
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Personalizadas</span>
              <div className="text-2xl md:text-3xl font-semibold mt-2">de Academia de Sumisas</div>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Programas presenciales diseñados para desarrollar sumisas responsables y fortalecer 
              relaciones D/s saludables basadas en consentimiento, comunicación y crecimiento mutuo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service) => (
              <Card 
                key={service.id} 
                className="bg-dark-surface border-border shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCard === service.id ? 'scale-110' : 'scale-100'}`}
                    onError={(e) => {
                      console.error(`Error loading image: ${service.image}`);
                      const target = e.target as HTMLImageElement;
                      // Try with absolute path if relative fails
                      if (!target.src.startsWith(window.location.origin)) {
                        target.src = `${window.location.origin}${service.image}`;
                      } else {
                        // Fallback to placeholder
                        target.src = `${window.location.origin}/images/services/placeholder.jpg`;
                      }
                      target.alt = 'Imagen no disponible';
                    }}
                    onLoad={() => console.log(`Image loaded: ${service.image}`)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl text-white mb-2 line-clamp-2 h-14">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {service.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="text-xs text-accent-foreground/70 mb-4">
                    Keywords: {service.keywords}
                  </div>
                  <Link 
                    to={`/servicios/${service.id}`}
                    className="block w-full"
                  >
                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-all"
                    >
                      Más Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              ¿Buscas algo más personalizado?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Ofrezco programas personalizados adaptados a tus necesidades específicas. 
              Cada relación D/s es única y requiere un enfoque individualizado para alcanzar su máximo potencial.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-primary hover:opacity-90 text-white py-6 px-8 text-lg"
            >
              Consulta Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;