import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'rituales-ceremonias-relaciones-ds',
    title: 'Rituales y Ceremonias en Relaciones D/s: Creando Significado en la Dinámica de Poder',
    excerpt: 'Explora cómo los rituales y ceremonias pueden enriquecer las relaciones de poder consensuadas, añadiendo profundidad, estructura y significado a la dinámica D/s.',
    category: 'Prácticas',
    date: '13 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/tumblr_nrr9vyJb4f1sjyuzzo1_500.jpg',
    tags: ['rituales', 'ceremonias', 'D/s', 'simbolismo', 'tradiciones'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'Los rituales y ceremonias han sido parte fundamental de las relaciones humanas a lo largo de la historia, y las dinámicas de poder consensuadas no son la excepción. En el contexto de las relaciones D/s, estos rituales pueden convertirse en poderosas herramientas para reforzar la conexión, marcar transiciones significativas y crear un sentido de propósito compartido. Este artículo explora el papel de los rituales y ceremonias en las relaciones de poder y cómo pueden implementarse de manera significativa.'
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
                    <time dateTime="2025-08-13">{blogPost.date}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden mb-8">
                <img 
                  src={blogPost.image} 
                  alt={blogPost.title}
                  className="w-full h-auto max-h-[400px] object-cover"
                />
              </div>
            </header>
            
            <div className="prose prose-lg max-w-none text-foreground/90 mb-12">
              {blogPost.content.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
              
              <h2>El Poder de los Rituales en las Relaciones D/s</h2>
              <p>Los rituales en las relaciones de poder van más allá de la mera repetición de acciones. Son actos cargados de significado que refuerzan la dinámica acordada, crean estructura y fomentan la conexión emocional. A diferencia de las rutinas, los rituales tienen un componente simbólico que los hace especiales y significativos para quienes los practican.</p>
              
              <h3>Tipos de Rituales en las Relaciones D/s</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Rituales diarios:</strong> Pequeños actos que marcan el comienzo o el final del día, como servir el café de cierta manera o arrodillarse al llegar a casa.</li>
                <li><strong>Rituales de transición:</strong> Para marcar el paso de un estado a otro, como entrar o salir del rol de sumisión.</li>
                <li><strong>Rituales de conexión:</strong> Actividades que refuerzan el vínculo, como baños rituales o sesiones de cuidado.</li>
                <li><strong>Rituales de mantenimiento:</strong> Para el cuidado de implementos o espacios sagrados de la relación.</li>
              </ul>
              
              <h2>Ceremonias Significativas en las Dinámicas de Poder</h2>
              <p>Mientras que los rituales son prácticas regulares, las ceremonias son eventos más formales que marcan hitos importantes en la relación D/s. Algunos ejemplos incluyen:</p>
              
              <h3>1. Ceremonia de Colocación del Collar</h3>
              <p>Similar a un anillo de compromiso en las relaciones convencionales, la ceremonia de colocación del collar es un momento solemne donde se formaliza el compromiso en la relación D/s. Puede incluir votos, intercambio de promesas y la colocación ceremonial del collar.</p>
              
              <h3>2. Ceremonias de Iniciación</h3>
              <p>Para marcar el comienzo de una nueva fase en la relación, como el inicio de un período de entrenamiento o la transición a un nivel más profundo de compromiso.</p>
              
              <h3>3. Rituales de Renovación</h3>
              <p>Celebraciones periódicas para renovar votos, reflexionar sobre el viaje compartido y establecer intenciones para el futuro de la relación.</p>
              
              <h2>Cómo Crear Rituales Significativos</h2>
              <p>La clave para crear rituales efectivos radica en su significado personal. Aquí hay algunos pasos para desarrollar rituales significativos:</p>
              
              <ol className="list-decimal pl-6 mb-4 space-y-1">
                <li><strong>Identifica el propósito:</strong> ¿Qué quieres lograr con este ritual? ¿Reforzar la conexión? ¿Marcar una transición? ¿Expresar devoción?</li>
                <li><strong>Selecciona elementos significativos:</strong> Objetos, palabras o acciones que tengan un significado especial para la relación.</li>
                <li><strong>Establece la frecuencia:</strong> Algunos rituales son diarios, otros semanales o para ocasiones especiales.</li>
                <li><strong>Incorpora los sentidos:</strong> Los rituales más poderosos involucran múltiples sentidos: vista, oído, tacto, olfato y gusto.</li>
                <li><strong>Revisa y ajusta:</strong> Los rituales deben evolucionar con la relación. No tengas miedo de modificarlos si dejan de ser significativos.</li>
              </ol>
              
              <h2>Consideraciones Importantes</h2>
              <p>Al incorporar rituales y ceremonias en tu relación D/s, ten en cuenta:</p>
              
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Consentimiento mutuo:</strong> Ambos deben estar de acuerdo con los rituales y su significado.</li>
                <li><strong>Flexibilidad:</strong> Los rituales deben enriquecer la relación, no convertirse en una carga.</li>
                <li><strong>Privacidad:</strong> Algunos rituales pueden ser muy personales y es importante respetar los límites de privacidad de cada uno.</li>
                <li><strong>Adaptabilidad:</strong> Las circunstancias cambian, y los rituales deben poder adaptarse a esos cambios.</li>
              </ul>
              
              <h2>Conclusión</h2>
              <p>Los rituales y ceremonias pueden añadir una capa profunda de significado a las relaciones D/s, creando una estructura que refuerza la conexión y el propósito compartido. Ya sea a través de pequeños gestos cotidianos o ceremonias elaboradas, estos actos ritualizados pueden convertirse en la columna vertebral de una dinámica de poder rica y satisfactoria. Recuerda que el poder de un ritual no está en su complejidad, sino en el significado que le otorguen quienes lo practican.</p>
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
                <p className="text-muted-foreground text-sm mb-4">Descubre cómo la comunicación efectiva es el pilar fundamental de las relaciones de poder consensuadas.</p>
                <Link to="/blog/comunicacion-poder-relaciones-ds" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
                <p className="text-muted-foreground text-sm mb-4">Explora los aspectos psicológicos de la sumisión consciente y cómo puede convertirse en un camino de crecimiento personal.</p>
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
