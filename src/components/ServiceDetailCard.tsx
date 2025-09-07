import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    description: string;
    duration: string;
    sessionFormat: string;
    programDuration: string;
    location: string;
    testimonials: string[];
    objectives: string[];
    details: {
      overview: string;
      benefits: string[];
      whatYouWillLearn: string[];
      whoIsThisFor: string[];
    };
    image: string;
  };
}

export const ServiceDetailCard = ({ service }: ServiceDetailProps) => {
  const navigate = useNavigate();
  const { title, duration, image, details } = service;

  const scrollToContact = () => {
    // Navigate to the home page first
    navigate('/');
    
    // Then scroll to the contact section after a small delay to allow the page to load
    setTimeout(() => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Card className="bg-dark-surface border-border shadow-soft overflow-hidden">
        {/* Service Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = '/images/services/placeholder.jpg';
              target.alt = 'Imagen no disponible';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
            <p className="text-primary font-semibold text-lg">{duration}</p>
          </div>
        </div>
        
        <CardHeader className="pt-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <CardTitle className="text-3xl text-white mb-2">
                {title}
              </CardTitle>
              <p className="text-primary font-semibold text-lg">
                {duration}
              </p>
              <p className="text-muted-foreground mt-2">
                <span className="font-medium">Formato:</span> {service.sessionFormat}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Duración del Programa:</span> {service.programDuration}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Ubicación:</span> {service.location}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              >
                ¡Quiero más información o inscribirme!
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8 text-foreground">
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Descripción del Programa</h3>
            <p className="text-lg leading-relaxed">
              {service.details.overview}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Beneficios Clave</h3>
            <ul className="list-disc pl-6 space-y-2">
              {service.details.benefits.map((benefit, index) => (
                <li key={index} className="text-lg">{benefit}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Lo que Aprenderás</h3>
            <ul className="list-disc pl-6 space-y-2">
              {service.details.whatYouWillLearn.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">¿Para quién es este programa?</h3>
            <ul className="list-disc pl-6 space-y-2">
              {service.details.whoIsThisFor.map((item, index) => (
                <li key={`who-${index}`} className="text-lg">{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Objetivos del Programa</h3>
            <ul className="list-disc pl-6 space-y-2">
              {service.objectives.map((objective, index) => (
                <li key={`objective-${index}`} className="text-lg">{objective}</li>
              ))}
            </ul>
          </section>

          {service.testimonials.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Testimonios</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {service.testimonials.map((testimonial, index) => (
                  <div key={`testimonial-${index}`} className="bg-dark-surface-secondary p-6 rounded-lg border border-border">
                    <p className="italic text-lg">"{testimonial}"</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="pt-6">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-primary hover:opacity-90 transition-all text-white py-6 px-8 text-lg"
            >
              ¡Quiero más información o inscribirme!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDetailCard;
