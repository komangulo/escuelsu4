import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'protocolo-bdsm-etiqueta',
    title: 'El Protocolo BDSM y la Etiqueta D/s: Pilares de una Relación de Dominación y Sumisión Respetuosa',
    excerpt: 'Descubre cómo el protocolo BDSM y la etiqueta D/s son fundamentales para relaciones de poder saludables. Aprende sobre comunicación, límites y el verdadero significado del intercambio de poder consensuado.',
    category: 'Educación',
    date: '21 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/image-bdsm-limits-learn-whats-hard-soft-1.jpg',
    tags: ['protocolo', 'etiqueta', 'D/s', 'comunicación'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el corazón de las relaciones D/s (Dominación/sumisión), ya sea en la vibrante comunidad BDSM de Madrid o en cualquier otro lugar, se encuentra un pilar fundamental: el protocolo BDSM. Lejos de ser un conjunto de reglas rígidas y aburridas, el protocolo y la etiqueta D/s son las herramientas que permiten que la dinámica Amo/sumisa se desarrolle de manera segura, respetuosa y profundamente gratificante para ambas partes. Entender y aplicar estas directrices es crucial para transformar un juego de poder en una relación sólida y significativa.'
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
                    <time dateTime="2025-08-21">{blogPost.date}</time>
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
              
              <h2>¿Qué es el Protocolo en el BDSM?</h2>
              <p>El protocolo se refiere al conjunto de reglas, expectativas y rituales establecidos y acordados mutuamente dentro de una relación Amo/sumisa. Funciona como el "idioma" de la dinámica, creando una estructura clara que permite a la pareja explorar sus roles con confianza y sin miedo a cruzar límites no negociados.</p>
              
              <p>El protocolo puede ser tan formal o informal como la pareja decida. En una relación Amo/sumisa, un ejemplo simple de protocolo podría ser que la sumisa siempre espere a que su Amo le dé permiso para hablar o sentarse. Estas pequeñas acciones, aunque puedan parecer simbólicas para el mundo exterior, refuerzan la jerarquía de la relación y profundizan la conexión emocional.</p>
              
              <h2>La Importancia de la Etiqueta D/s</h2>
              <p>La etiqueta D/s va de la mano con el protocolo. Mientras que el protocolo es específico de la pareja, la etiqueta se refiere a las pautas de comportamiento esperadas en la comunidad BDSM en general, especialmente en entornos públicos o eventos sociales.</p>
              
              <p>Por ejemplo, la etiqueta dicta que no debes interrumpir la dinámica de otra pareja sin su permiso. En eventos y fiestas en Madrid, observar con respeto y mantener el espacio de los demás es una muestra de cortesía esencial. La etiqueta fomenta un ambiente de confianza y seguridad, donde cada persona puede sentirse cómoda explorando sus preferencias sin juicio.</p>
              
              <h2>Claves para una Dinámica Amo/sumisa Exitosa</h2>
              
              <h3>Comunicación Abierta y Continua</h3>
              <p>Antes de establecer cualquier regla o ritual, la comunicación debe ser la base de todo. Un Amo debe entender los deseos, necesidades y miedos de su sumisa, y una sumisa debe sentirse segura para expresar sus límites. Esta negociación constante es lo que distingue las relaciones D/s sanas de las insanas.</p>
              
              <h3>El Rol de la Dominación Masculina</h3>
              <p>El concepto de dominación masculina en las relaciones D/s no se trata de control coercitivo, sino de liderazgo consensuado. El Amo es el líder y el protector, y su rol es guiar la dinámica de manera responsable, asegurándose de que el crecimiento de su pareja esté en el centro de cada interacción.</p>
              
              <h3>El Consenso es Absoluto</h3>
              <p>El BDSM se basa en la premisa de "Safe, Sane, and Consensual" (Seguro, Sano y Consensuado). Sin consenso, no hay juego. Cada acto, cada regla, y cada momento de la dinámica debe ser acordado por ambas partes. El protocolo es la manifestación de ese consenso en la práctica diaria.</p>
              
              <h2>Beneficios del Protocolo y la Etiqueta</h2>
              <p>Adoptar el protocolo BDSM y la etiqueta D/s en una relación de Dominación y Sumisión ofrece múltiples beneficios:</p>
              
              <ul>
                <li><strong>Seguridad:</strong> Al establecer límites claros, ambas partes saben qué esperar y cuándo detenerse.</li>
                <li><strong>Intimidad Profunda:</strong> Las reglas acordadas crean un marco seguro que fomenta la vulnerabilidad y la conexión emocional.</li>
                <li><strong>Claridad de Roles:</strong> Elimina la confusión sobre quién tiene el control en cada momento, permitiendo que la dinámica fluya de manera natural.</li>
              </ul>
              
              <p>En la comunidad BDSM, ya sea en Madrid o en cualquier otro lugar, el protocolo y la etiqueta son mucho más que simples reglas; son los cimientos sobre los que se construyen relaciones de confianza, respeto mutuo y exploración consciente.</p>
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
                  Comunicación
                </span>
                <h3 className="font-semibold text-lg mb-2">La Comunicación de Poder en Relaciones D/s</h3>
                <p className="text-muted-foreground text-sm mb-4">Aprende técnicas para negociar límites, expresar necesidades y construir una dinámica de poder basada en la confianza y el respeto mutuo.</p>
                <Link to="/blog/comunicacion-poder-relaciones" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  Relaciones
                </span>
                <h3 className="font-semibold text-lg mb-2">Rituales y Ceremonias en Relaciones D/s</h3>
                <p className="text-muted-foreground text-sm mb-4">Descubre cómo los rituales y ceremonias pueden enriquecer tu relación D/s y fortalecer el vínculo con tu pareja.</p>
                <Link to="/blog/rituales-ceremonias" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
