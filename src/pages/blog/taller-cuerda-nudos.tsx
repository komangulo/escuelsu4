import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'taller-cuerda-nudos',
    title: 'Taller de Cuerda y Nudos: Descubriendo el Arte del Bondage y la Conexión en las Relaciones BDSM',
    excerpt: 'Sumérgete en el arte del bondage y los nudos como una forma de conexión íntima. Aprende sobre las diferencias entre bondage y shibari, y cómo estas prácticas pueden fortalecer la confianza en las relaciones D/s.',
    category: 'Talleres',
    date: '18 de Agosto, 2025',
    readTime: '7 min de lectura',
    image: '/images/services/IMG_1255-1024x575.jpg',
    tags: ['bondage', 'nudos', 'shibari', 'taller'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el fascinante mundo del BDSM, pocas prácticas son tan visualmente impactantes y emocionalmente intensas como el arte de las cuerdas. Ya sea que lo conozcas como bondage, shibari o kinbaku, el uso de cuerdas para atar, inmovilizar o decorar el cuerpo humano es una forma de arte ancestral que ha encontrado un hogar en la comunidad BDSM moderna. En este artículo, exploraremos los fundamentos de los talleres de cuerda y nudos, su importancia en las relaciones D/s y cómo pueden enriquecer tu vida íntima.'
    ]
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>
          
          <article>
            <header className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <Tag className="w-4 h-4" />
                {blogPost.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {blogPost.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 mb-8">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-muted overflow-hidden mr-3">
                    <img 
                      src={blogPost.author.avatar} 
                      alt={blogPost.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{blogPost.author.name}</p>
                    <p className="text-sm text-muted-foreground">{blogPost.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime="2025-08-18">{blogPost.date}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
              </div>
              
              {blogPost.image && (
                <div className="rounded-xl overflow-hidden mb-8">
                  <img 
                    src={blogPost.image} 
                    alt={blogPost.title}
                    className="w-full h-auto max-h-[400px] object-cover"
                  />
                </div>
              )}
            </header>
            
            <div className="prose prose-lg max-w-none text-foreground/90 mb-12">
              {blogPost.content.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
              
              <h2>¿Qué es el bondage y el shibari?</h2>
              <p>El término "bondage" se refiere a la práctica de atar o inmovilizar a una persona con fines eróticos o estéticos. Por otro lado, el shibari (縛り), que significa "atar" en japonés, es una forma de bondage que se originó en Japón y que se centra tanto en el aspecto estético como en la conexión emocional entre las personas involucradas. Aunque a menudo se usan indistintamente, el shibari se distingue por su enfoque artístico y ritualístico.</p>
              
              <p>En Madrid, los talleres de cuerda y nudos han ganado popularidad en los últimos años, atrayendo a personas de todos los orígenes y niveles de experiencia. Estos talleres ofrecen un espacio seguro para aprender técnicas, practicar con supervisión y conectarse con otros entusiastas del bondage.</p>
              
              <h2>Beneficios de los talleres de cuerda y nudos</h2>
              
              <h3>1. Conexión emocional intensa</h3>
              <p>El proceso de atar o ser atado requiere un alto nivel de confianza y comunicación. Esta dinámica puede fortalecer significativamente el vínculo entre las personas involucradas, creando una experiencia íntima y poderosa que va más allá de lo físico.</p>
              
              <h3>2. Desarrollo de la confianza</h3>
              <p>Para la persona que es atada (el/la "bottom"), confiar en que su pareja lo hará de manera segura puede ser profundamente liberador. Para quien ata (el/la "top"), la responsabilidad de cuidar a su pareja fomenta la atención plena y la conexión emocional.</p>
              
              <h3>3. Exploración de la sensualidad</h3>
              <p>Las cuerdas pueden transformar la percepción del cuerpo, creando sensaciones únicas y abriendo nuevas posibilidades de placer. Muchas personas descubren que el bondage les permite experimentar su sexualidad de maneras completamente nuevas.</p>
              
              <h3>4. Expresión artística</h3>
              <p>El shibari, en particular, es considerado una forma de arte corporal. Los patrones intrincados y la estética de las ataduras pueden ser tan hermosos como significativos, convirtiendo el cuerpo en un lienzo vivo.</p>
              
              <h2>¿Qué esperar de un taller de iniciación?</h2>
              
              <p>Si estás considerando asistir a un taller de cuerdas en Madrid, aquí tienes una idea de lo que podrías esperar:</p>
              
              <ul>
                <li><strong>Teoría básica:</strong> Aprenderás sobre seguridad, tipos de cuerdas y conceptos fundamentales.</li>
                <li><strong>Técnicas básicas de nudos:</strong> Nudos simples que son seguros y fáciles de deshacer.</li>
                <li><strong>Comunicación:</strong> Cómo establecer límites y verificar el bienestar de tu pareja.</li>
                <li><strong>Práctica supervisada:</strong> Oportunidad de practicar con la guía de instructores experimentados.</li>
              </ul>
              
              <h2>Seguridad primero</h2>
              <p>Antes de sumergirte en el mundo del bondage, es crucial entender los riesgos potenciales y cómo mitigarlos. Los talleres profesionales siempre enfatizan la importancia de:</p>
              
              <ul>
                <li>Usar herramientas de seguridad como tijeras de emergencia.</li>
                <li>Conocer la anatomía básica y los puntos de presión a evitar.</li>
                <li>Establecer señales de seguridad claras.</li>
                <li>Empezar con sesiones cortas y aumentar gradualmente la duración.</li>
              </ul>
              
              <h2>Conclusión</h2>
              <p>Los talleres de cuerda y nudos ofrecen mucho más que solo aprender a atar nudos. Son una puerta de entrada a un mundo de conexión íntima, confianza mutua y expresión artística. Ya sea que estés en Madrid o en cualquier otra ciudad, buscar talleres con instructores calificados puede ser el primer paso hacia una experiencia segura y gratificante en el mundo del bondage y el shibari.</p>
              
              <p>Recuerda que, como en todas las prácticas BDSM, el consentimiento, la comunicación y la seguridad deben ser siempre la prioridad. Con estos principios en mente, el arte de las cuerdas puede convertirse en una adición valiosa y enriquecedora a tu vida íntima y relaciones.</p>
            </div>
            
            <footer className="border-t border-border pt-8 mb-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comparte este artículo</h3>
                  <p className="text-muted-foreground text-sm">Ayuda a otras personas a encontrar este contenido</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Compartir
                  </Button>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Sobre el autor</h3>
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-muted overflow-hidden flex-shrink-0">
                    <img 
                      src={blogPost.author.avatar} 
                      alt={blogPost.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{blogPost.author.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{blogPost.author.role}</p>
                    <p className="text-sm">Especializada en formación de sumisas y dinámicas de poder consensuadas. Con más de 10 años de experiencia en el mundo BDSM, me apasiona guiar a otras personas en su viaje de descubrimiento y crecimiento personal.</p>
                  </div>
                </div>
              </div>
            </footer>
          </article>
          
          <div className="border-t border-border pt-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Artículos relacionados</h2>
              <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
                Ver todos
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  Entrenamiento
                </span>
                <h3 className="font-semibold text-lg mb-2">Entrenamiento de Sumisas</h3>
                <p className="text-muted-foreground text-sm mb-4">Descubre cómo el entrenamiento de sumisas puede convertirse en un viaje de empoderamiento, disciplina personal y desarrollo de confianza mutua.</p>
                <Link to="/blog/entrenamiento-sumisas" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  Psicología
                </span>
                <h3 className="font-semibold text-lg mb-2">La Psicología de la Sumisión Consciente</h3>
                <p className="text-muted-foreground text-sm mb-4">Explora los aspectos psicológicos detrás de la sumisión consciente y cómo puede convertirse en un vehículo para el autoconocimiento y el crecimiento personal.</p>
                <Link to="/blog/psicologia-suminision-consciente" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
