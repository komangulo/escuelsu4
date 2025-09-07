import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Llegué a las sesiones con muchos miedos y dudas sobre el BDSM. El enfoque profesional y la seguridad que transmite me permitieron explorar mi sexualidad de manera consciente. He descubierto un empoderamiento que no sabía que existía en mí.",
      author: "María, 32 años",
      course: "Iniciación al BDSM"
    },
    {
      text: "Como mujer profesional, siempre había sentido que necesitaba controlar todo. Aprender sobre dominación femenina me ayudó a entender que el poder real viene del autoconocimiento y la comunicación clara. Transformó completamente mi forma de relacionarme.",
      author: "Carmen, 28 años", 
      course: "Dominación Femenina"
    },
    {
      text: "Los talleres de cuerda no solo me enseñaron técnicas, sino que me conectaron con mi cuerpo de una manera totalmente nueva. La combinación de arte, técnica y sensualidad ha sido reveladora para mi crecimiento personal.",
      author: "Ana, 35 años",
      course: "Taller de Cuerdas"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lo Que Dicen Mis
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Alumnas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Testimonios reales de mujeres que han transformado su vida a través del empoderamiento sexual 
              y el descubrimiento consciente del BDSM.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-dark-surface border-border shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-primary text-sm">
                      {testimonial.course}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-dark-surface rounded-lg p-8 border border-border shadow-soft max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Confidencialidad y Privacidad Garantizadas
              </h3>
              <p className="text-muted-foreground">
                Todos los testimonios son anónimos y han sido compartidos con autorización expresa. 
                Tu privacidad y confidencialidad son fundamentales en mi práctica profesional. 
                Cada sesión se desarrolla en un ambiente de completa discreción y respeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;