import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Instagram, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contacto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes alguna pregunta? Contáctame a través de mis redes sociales.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card className="bg-dark-surface border-border shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-white font-medium">Ubicación</p>
                      <p className="text-muted-foreground">Madrid, España (Sesiones presenciales)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-white font-medium">Disponibilidad</p>
                      <p className="text-muted-foreground">Lunes a Viernes, 10:00 - 20:00</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a 
                        href="https://formsubmit.co/el/vuvelu" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Enviar mensaje directo
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-dark-surface border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">
                  Redes Sociales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-darker-surface rounded-lg hover:bg-opacity-80 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-primary" />
                  <span className="text-white">Instagram</span>
                </a>
                
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-darker-surface rounded-lg hover:bg-opacity-80 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                  <span className="text-white">LinkedIn</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
