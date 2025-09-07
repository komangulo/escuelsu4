import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'cnc-consentimiento-no-consensuado',
    title: 'CNC (Consentimiento No Consensuado): Entendiendo la Complejidad del Juego de Poder Extremo',
    excerpt: 'Una guía detallada sobre el CNC, una de las prácticas más complejas y malentendidas dentro del BDSM, y cómo practicarla de manera ética y segura.',
    category: 'Técnicas Avanzadas',
    date: '22 de Agosto, 2025',
    readTime: '10 min de lectura',
    image: '/images/services/bdsm-il-piacere-di-potere.jpg',
    tags: ['CNC', 'consentimiento', 'juego de poder', 'seguridad', 'límites'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El Consentimiento No Consensuado (CNC) es quizás una de las prácticas más complejas y malentendidas dentro del BDSM. A primera vista, parece una contradicción: ¿cómo puede haber consentimiento en algo que se define como no consensuado? La respuesta radica en comprender que el CNC es, en realidad, un juego de roles cuidadosamente negociado donde el consentimiento está implícito, aunque la dinámica simule lo contrario. Es una forma de explorar fantasías de pérdida de control en un entorno seguro, respetuoso y, sobre todo, acordado de antemano.'
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
                    <time dateTime="2025-08-22">{blogPost.date}</time>
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
              
              <h2>El CNC: Una Paradoja Aparente</h2>
              <p>El CNC es una práctica donde las partes acuerdan simular una situación de no consentimiento. La clave está en que, aunque la escena parezca no consensuada, en realidad ha sido minuciosamente planeada y acordada con anticipación. Es un juego de roles sofisticado que requiere un nivel excepcional de confianza, comunicación y límites claros.</p>
              
              <p>Este tipo de juego puede incluir escenarios como secuestros, violaciones simuladas o cualquier situación donde una de las partes parece no tener control. Sin embargo, es fundamental recordar que todo lo que sucede durante una escena de CNC ha sido previamente negociado y aceptado por todas las personas involucradas.</p>
              
              <h2>La Importancia del Consentimiento Explícito</h2>
              <p>En el CNC, el consentimiento es la base sobre la que se construye toda la experiencia. A diferencia de otros tipos de juegos de poder, donde los límites pueden ser más flexibles, el CNC requiere una negociación detallada y específica. Antes de la escena, es esencial discutir:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Límites claros:</strong> ¿Qué acciones están permitidas y cuáles están estrictamente prohibidas?</li>
                <li><strong>Palabras de seguridad:</strong> Establecer un sistema de palabras de seguridad que detendrán la escena de inmediato si son pronunciadas.</li>
                <li><strong>Duración:</strong> Definir cuánto tiempo durará la escena y cómo será la transición de vuelta a la realidad.</li>
                <li><strong>Aftercare:</strong> Planificar el cuidado posterior, que es especialmente importante después de experiencias intensas como el CNC.</li>
              </ul>
              
              <h2>La Preparación: Clave para una Experiencia Segura</h2>
              <p>Antes de embarcarse en una escena de CNC, es fundamental que todas las partes involucradas tengan experiencia previa en BDSM y estén familiarizadas con sus propias reacciones emocionales y físicas. La preparación debe incluir:</p>
              
              <h3>1. Conocimiento Mutuo</h3>
              <p>Las personas involucradas deben conocerse lo suficientemente bien como para predecir las reacciones del otro. Es recomendable haber establecido una relación de confianza antes de intentar juegos tan intensos.</p>
              
              <h3>2. Planificación Detallada</h3>
              <p>Cada aspecto de la escena debe ser discutido de antemano, incluyendo el guión, los roles, el vestuario, el escenario y cualquier elemento que se vaya a utilizar. Nada debe dejarse al azar.</p>
              
              <h3>3. Señales de Comunicación</h3>
              <p>Además de las palabras de seguridad, es útil establecer señales no verbales para verificar el bienestar durante la escena, especialmente si se utiliza un elemento de amordazamiento.</p>
              
              <h2>Los Riesgos y Cómo Mitigarlos</h2>
              <p>El CNC no está exento de riesgos, tanto físicos como emocionales. Algunos de los más comunes incluyen:</p>
              
              <h3>1. Disociación o Flashbacks</h3>
              <p>Las escenas intensas pueden desencadenar recuerdos traumáticos. Es importante conocer el historial de la pareja y estar preparado para detener la escena si es necesario.</p>
              
              <h3>2. Límites Cruzados</h3>
              <p>En el calor del momento, es posible sobrepasar límites sin darse cuenta. La comunicación constante y las verificaciones periódicas son esenciales.</p>
              
              <h3>3. Consecuencias Legales</h3>
              <p>Es importante recordar que, legalmente, el consentimiento puede ser revocado en cualquier momento. Las escenas de CNC deben documentarse cuidadosamente para evitar malentendidos.</p>
              
              <h2>El Aftercare en el CNC</h2>
              <p>El cuidado posterior es especialmente importante después de una escena de CNC. Puede incluir:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Reconexión física:</strong> Abrazos, caricias o contacto físico reconfortante.</li>
                <li><strong>Hidratación y alimentación:</strong> Las escenas intensas pueden agotar las reservas de energía.</li>
                <li><strong>Procesamiento emocional:</strong> Hablar sobre la experiencia, expresar sentimientos y validar emociones.</li>
                <li><strong>Tiempo de recuperación:</strong> Permitir un período de descanso antes de volver a las actividades cotidianas.</li>
              </ul>
              
              <p>En la comunidad BDSM de Madrid, el CNC se considera una práctica avanzada que no debe tomarse a la ligera. Requiere madurez emocional, responsabilidad y un profundo respeto por los límites propios y ajenos. Cuando se practica de manera ética y segura, puede ser una experiencia profundamente transformadora que fortalece la conexión entre las personas involucradas.</p>
              
              <p>Recuerda: el verdadero poder del CNC no está en la simulación de la falta de consentimiento, sino en el profundo nivel de confianza y comunicación que requiere. Es un recordatorio de que, incluso en los juegos más extremos, el respeto y el cuidado mutuo son las bases sobre las que se construyen experiencias verdaderamente significativas.</p>
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
