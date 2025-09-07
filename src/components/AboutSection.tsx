import { Card } from "@/components/ui/card";
import coachProfile from "@/assets/coach-profile.jpg";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tu Coach Especializado en
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Dominación y Relaciones D/s</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={coachProfile}
                alt="Coach BDSM profesional especializado en dominación masculina y relaciones D/s"
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg"></div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-8 bg-dark-surface border-border shadow-soft">
                <div className="space-y-6 text-foreground">
                  <p className="text-lg leading-relaxed">
                    Como <strong>coach BDSM</strong> y <strong>mentor especializado</strong>, he dedicado años 
                    a guiar a hombres y mujeres en el desarrollo de relaciones <strong>D/s saludables</strong> y el 
                    dominio responsable de la <strong>dominación masculina</strong>.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Mi enfoque se centra en la <strong>seguridad BDSM</strong>, el consentimiento informado y el 
                    desarrollo del liderazgo en relaciones <strong>Amo/sumisa</strong>. Creo firmemente que la 
                    <strong>dominación masculina</strong> requiere responsabilidad, protocolo y comunicación efectiva.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    <strong className="text-primary">Ubicado en Madrid, España</strong> - Ofrezco mis <strong>cursos BDSM</strong> y 
                    <strong>talleres especializados</strong> tanto de forma presencial en mi espacio en el centro de Madrid, 
                    como en línea para quienes prefieren la comodidad de sus hogares.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Mi formación integral está diseñada para desarrollar habilidades de dominación responsable y 
                    establecer <strong>relaciones D/s</strong> basadas en confianza mutua y respeto.
                  </p>
                  
                  <div className="border-l-4 border-primary pl-6 mt-8">
                    <p className="text-primary font-semibold italic">
                      "Mi misión es formar sumisas responsables y guiar relaciones D/s hacia su máximo potencial, 
                      siempre basadas en el consentimiento, la comunicación y el crecimiento mutuo."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;