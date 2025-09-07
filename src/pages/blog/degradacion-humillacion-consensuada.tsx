import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'degradacion-humillacion-consensuada',
    title: 'Degradación y Humillación Consensuada: Explorando los Límites del Poder en el BDSM',
    excerpt: 'Una mirada profunda a cómo la degradación y humillación consensuadas pueden convertirse en herramientas de conexión emocional y liberación en relaciones de poder saludables.',
    category: 'Psicología',
    date: '23 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/humillate.PNG',
    tags: ['degradación', 'humillación', 'consentimiento', 'poder', 'confianza'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el mundo del BDSM, la exploración de los juegos de poder a menudo nos lleva a dinámicas psicológicamente intensas, como la degradación y humillación consensuada. Estos términos pueden sonar fuertes y, fuera de contexto, negativos. Sin embargo, dentro de una relación segura y basada en el consenso, estas prácticas son una forma poderosa de explorar la vulnerabilidad, la confianza y la liberación de la vergüenza. El arte de la humillación consensuada no se trata de dañar, sino de liberar y de profundizar la intimidad a través de la entrega.'
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
                    <time dateTime="2025-08-23">{blogPost.date}</time>
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
              
              <h2>La Clave del Consenso: Un Contraste con el Mundo Real</h2>
              <p>La diferencia fundamental entre la degradación en el BDSM y la humillación en la vida real es el consenso absoluto. En una dinámica consensuada, la persona que recibe la humillación ha elegido participar en la fantasía. Ha negociado los límites y las reglas, y tiene la capacidad de detener el juego en cualquier momento.</p>
              
              <p>Esta distinción es crucial: mientras que la humillación en la vida real busca infligir dolor emocional genuino y disminuir a una persona, la humillación consensuada es un acto de confianza mutua. Permite a la sumisa explorar fantasías de vulnerabilidad en un entorno seguro, sabiendo que su Dominante la valora y la respeta profundamente, incluso en medio del juego.</p>
              
              <h2>El Poder Transformador de la Degradación Consensuada</h2>
              <p>Para muchas personas, la degradación es una forma de liberar la ansiedad y las inhibiciones. En lugar de ser algo a lo que se le teme, se convierte en un acto de purificación emocional. Al enfrentar los miedos a ser juzgado o sentirse inadecuado en un contexto controlado, la persona puede encontrar una profunda liberación.</p>
              
              <p>Además, estos juegos de poder pueden fortalecer el vínculo entre la pareja. La sumisa confía plenamente en que su Dominante nunca la humillaría de verdad fuera del contexto del juego. Esta confianza inquebrantable permite una intimidad que de otra forma sería imposible.</p>
              
              <h2>Claves para una Práctica Segura y Exitosa</h2>
              <p>Para explorar la humillación consensuada de forma segura, la comunicación y los límites son esenciales:</p>
              
              <h3>Negociación Detallada</h3>
              <p>Antes de la escena, la pareja debe hablar de los límites exactos. ¿Qué tipo de palabras están permitidas? ¿Qué acciones son tabú? La negociación debe ser tan detallada como sea posible.</p>
              
              <h3>Palabras de Seguridad</h3>
              <p>El uso de una palabra de seguridad (por ejemplo, el "rojo" del semáforo) es fundamental. La persona que recibe la humillación debe saber que tiene el poder de detener la escena al instante si se siente abrumada.</p>
              
              <h3>Aftercare</h3>
              <p>Después de la escena, el aftercare es un momento crucial para reafirmar el respeto y el cariño. Abrazos, palabras de consuelo y un espacio para procesar las emociones ayudan a la persona a volver a la realidad con una sensación de seguridad y cuidado.</p>
              
              <p>En la comunidad BDSM de Madrid, como en otras partes del mundo, la humillación consensuada se considera una forma avanzada de juegos de poder que requiere una gran dosis de confianza, respeto y una comunicación impecable. Es una práctica que demuestra que la verdadera fuerza en una relación no es el control, sino el consenso que permite una exploración honesta y segura de los deseos más profundos.</p>
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
                  Técnicas Avanzadas
                </span>
                <h3 className="font-semibold text-lg mb-2">CNC: Consentimiento No Consensuado</h3>
                <p className="text-muted-foreground text-sm mb-4">Una guía detallada sobre el CNC, una de las prácticas más complejas y malentendidas dentro del BDSM, y cómo practicarla de manera ética y segura.</p>
                <Link to="/blog/cnc-consentimiento-no-consensuado" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  Técnicas
                </span>
                <h3 className="font-semibold text-lg mb-2">Spanking: Técnicas y Seguridad</h3>
                <p className="text-muted-foreground text-sm mb-4">Descubre cómo el spanking puede ser una forma de expresión consensual que explora el dolor controlado como medio para la intimidad.</p>
                <Link to="/blog/spanking-tecnicas-seguridad" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
