import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    contactMethod: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdkdrazr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: '¡Mensaje enviado!',
          description: 'Gracias por contactarme. Te responderé lo antes posible.',
          variant: 'default',
        });
        setFormData({ 
          name: '',
          age: '',
          city: '',
          contactMethod: '',
          message: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contacto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes alguna pregunta? Escríbeme y te responderé lo antes posible.
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
                      <p className="text-muted-foreground">24 horas / 7 días a la semana</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-muted-foreground">
                        Escríbeme usando el formulario
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-dark-surface border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">
                  Contáctame
                </CardTitle>
                <p className="text-center text-muted-foreground text-sm mt-2">
                  Rellena el formulario y me pondré en contacto contigo
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-dark-surface border-border text-white placeholder:text-muted-foreground"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="age" className="text-sm font-medium text-white">
                        Edad
                      </label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        min="18"
                        
                        value={formData.age}
                        onChange={handleChange}
                        className="bg-dark-surface border-border text-white placeholder:text-muted-foreground"
                        placeholder="Tu edad"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-medium text-white">
                        Ciudad
                      </label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        
                        value={formData.city}
                        onChange={handleChange}
                        className="bg-dark-surface border-border text-white placeholder:text-muted-foreground"
                        placeholder="Ciudad donde vives"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="contactMethod" className="text-sm font-medium text-white">
                        Redes sociales / forma de contacto
                      </label>
                      <Input
                        id="contactMethod"
                        name="contactMethod"
                        type="text"
                        
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="bg-dark-surface border-border text-white placeholder:text-muted-foreground"
                        placeholder="Ej: @usuario, email, teléfono..."
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[120px] bg-dark-surface border-border text-white placeholder:text-muted-foreground"
                      placeholder="Cuéntame en qué puedo ayudarte..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-opacity text-white font-medium py-6 text-lg"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Te responderé en un plazo máximo de 24-48 horas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
