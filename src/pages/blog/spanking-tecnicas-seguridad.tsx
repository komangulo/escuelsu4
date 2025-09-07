import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'spanking-tecnicas-seguridad',
    title: 'Spanking: Técnicas y Seguridad para Explorar el Dolor Controlado en el BDSM',
    excerpt: 'Descubre cómo el spanking puede ser una forma de expresión consensual que explora el dolor controlado como medio para la intimidad y la liberación emocional en dinámicas de poder.',
    category: 'Técnicas',
    date: '24 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/spanking.jpg',
    tags: ['spanking', 'dolor controlado', 'técnicas', 'seguridad', 'BDSM'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El spanking, o las nalgadas, es una de las prácticas más conocidas y, a menudo, malentendidas dentro del BDSM. Lejos de ser un acto de agresión, es una forma de expresión consensual que explora el dolor controlado como medio para la intimidad, la liberación emocional y el juego de poder. Dominar las técnicas y priorizar la seguridad son esenciales para que esta experiencia sea placentera, significativa y, sobre todo, segura para ambas partes.'
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
                    <time dateTime="2025-08-24">{blogPost.date}</time>
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
              
              <h2>El Spanking como Herramienta de Conexión</h2>
              <p>En el contexto BDSM, el spanking no se trata de infligir daño. En cambio, es un acto íntimo y negociado que puede tener múltiples propósitos:</p>
              
              <h3>Liberación Emocional</h3>
              <p>El dolor controlado puede liberar endorfinas y dopamina, generando una sensación de euforia y bienestar que algunos describen como una "subida de poder" o rush.</p>
              
              <h3>Refuerzo de la Dinámica de Poder</h3>
              <p>El acto de dar y recibir nalgadas refuerza la dinámica de Dominación y Sumisión. Para el Dominante, es una forma de ejercer su poder; para el sumiso, es una forma de entrega y confianza.</p>
              
              <h3>Foco Sensorial</h3>
              <p>La sensación del impacto puede ayudar a una persona a concentrarse completamente en el momento presente, dejando atrás las preocupaciones y el ruido mental.</p>
              
              <h2>Técnicas y Herramientas: La Precisión es Clave</h2>
              <p>Para una práctica segura, la técnica es tan importante como la comunicación. A menudo se utilizan herramientas como la mano abierta, paletas, correas o látigos de cola de dragón. Cada herramienta tiene un impacto diferente en el cuerpo:</p>
              
              <h3>Mano Abierta</h3>
              <p>Es la técnica más común para principiantes. Permite un control preciso sobre la fuerza, la ubicación y el ritmo. Es ideal para aprender a entender la respuesta del cuerpo al impacto.</p>
              
              <h3>Paletas</h3>
              <p>Hechas de cuero, madera o acrílico, ofrecen una superficie plana que distribuye el impacto de manera amplia. Son excelentes para generar una sensación de ardor más superficial.</p>
              
              <h3>Correas y Látigos</h3>
              <p>Generan un dolor más penetrante y agudo, y requieren de una técnica depurada para evitar lesiones. Su uso debe ser gradual y negociado en cada sesión.</p>
              
              <p>Es crucial empezar con poca fuerza y aumentar gradualmente, prestando atención a las reacciones de la persona que recibe las nalgadas. La comunicación debe ser constante para asegurar que el dolor controlado no se convierta en algo insoportable.</p>
              
              <h2>Seguridad y Negociación: La Regla de Oro del BDSM</h2>
              <p>La seguridad es la máxima prioridad en cualquier práctica BDSM. Antes de una sesión de spanking, la pareja debe negociar los siguientes puntos:</p>
              
              <h3>Límites y Palabras de Seguridad</h3>
              <p>La persona que recibe debe tener una palabra de seguridad clara y no negociable (por ejemplo, "rojo") que, al ser dicha, detiene la actividad de inmediato.</p>
              
              <h3>Objetivos de la Sesión</h3>
              <p>La pareja debe acordar la intensidad, la duración y el propósito de la sesión.</p>
              
              <h3>Cuidado Posterior (Aftercare)</h3>
              <p>Después de una escena, es vital que el Dominante ofrezca consuelo y atención a la sumisa, como abrazos, caricias o bebidas, para ayudarla a procesar las emociones y aterrizar de nuevo en la realidad.</p>
              
              <p>En la vibrante comunidad BDSM de Madrid, al igual que en todo el mundo, las técnicas y la seguridad del spanking se aprenden en talleres y mediante una comunicación honesta. El verdadero poder del spanking no está en la fuerza, sino en el respeto mutuo que permite a dos personas explorar el placer del dolor controlado en un entorno de total confianza.</p>
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
                  Psicología
                </span>
                <h3 className="font-semibold text-lg mb-2">Degradación y Humillación Consensuada</h3>
                <p className="text-muted-foreground text-sm mb-4">Una mirada profunda a cómo la degradación y humillación consensuadas pueden convertirse en herramientas de conexión emocional.</p>
                <Link to="/blog/degradacion-humillacion-consensuada" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
