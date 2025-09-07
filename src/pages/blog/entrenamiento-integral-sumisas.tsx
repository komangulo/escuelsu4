import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'entrenamiento-integral-sumisas',
    title: 'Entrenamiento Integral para Sumisas: Un Viaje de Crecimiento y Entrega',
    excerpt: 'Descubre cómo el entrenamiento estructurado puede ayudar a las sumisas a desarrollar su potencial, explorar sus límites y profundizar en su sumisión de manera segura y satisfactoria.',
    category: 'Formación',
    date: '20 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/placeholder.jpg',
    tags: ['entrenamiento', 'sumisas', 'formación', 'crecimiento', 'BDSM'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El entrenamiento para sumisas es mucho más que una simple lista de reglas o técnicas; es un viaje de autodescubrimiento, crecimiento personal y entrega consciente. En el mundo del BDSM, donde la confianza y el consentimiento son la base de cualquier dinámica, el entrenamiento estructurado puede ser una herramienta poderosa para aquellas que desean explorar su sumisión de manera profunda y significativa. Este artículo explora los principios fundamentales del entrenamiento para sumisas, sus beneficios y cómo puede transformar no solo la dinámica de poder, sino también la relación que la sumisa tiene consigo misma.'
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
                    <time dateTime="2025-08-20">{blogPost.date}</time>
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
              
              <h2>Los Pilares del Entrenamiento para Sumisas</h2>
              <p>Un programa de entrenamiento integral para sumisas se basa en varios pilares fundamentales que van más allá de la mera obediencia. Estos pilares incluyen:</p>
              
              <h3>Autoconocimiento</h3>
              <p>Antes de entregarse a otro, una sumisa debe conocerse a sí misma. El entrenamiento comienza con ejercicios de introspección para identificar deseos, límites, miedos y aspiraciones. Este proceso de autodescubrimiento es esencial para establecer una base sólida sobre la que construir la dinámica de poder.</p>
              
              <h3>Confianza y Comunicación</h3>
              <p>La confianza no se exige, se gana. Un buen entrenamiento enseña a las sumisas a reconocer cuándo y cómo confiar, así como a comunicar sus necesidades y límites de manera efectiva. La comunicación abierta y honesta es el cimiento sobre el que se construye cualquier relación D/s saludable.</p>
              
              <h3>Disciplina y Autocontrol</h3>
              <p>La disciplina no es solo seguir órdenes, sino cultivar la capacidad de mantenerse enfocada y comprometida con el proceso. A través de ejercicios específicos, las sumisas aprenden a desarrollar paciencia, perseverancia y control sobre sus impulsos.</p>
              
              <h3>Entrega Consciente</h3>
              <p>La verdadera sumisión es un acto de voluntad, no de sumisión forzada. El entrenamiento ayuda a las sumisas a entender la diferencia entre la entrega genuina y la sumisión por complacencia o miedo.</p>
              
              <h2>Estructura de un Programa de Entrenamiento</h2>
              <p>Un programa de entrenamiento efectivo suele incluir los siguientes componentes:</p>
              
              <h3>1. Evaluación Inicial</h3>
              <p>Antes de comenzar, es esencial realizar una evaluación completa que incluya:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Historial de experiencia en BDSM</li>
                <li>Límites y líneas rojas</li>
                <li>Objetivos personales</li>
                <li>Nivel de comodidad con diferentes prácticas</li>
              </ul>
              
              <h3>2. Establecimiento de Metas</h3>
              <p>Las metas deben ser SMART (Específicas, Medibles, Alcanzables, Relevantes y con Tiempo definido). Algunos ejemplos podrían ser:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Mejorar la postura y la presencia</li>
                <li>Aprender protocolos de etiqueta BDSM</n>
                <li>Desarrollar habilidades de servicio</li>
                <li>Explorar nuevos aspectos de la sumisión</li>
              </ul>
              
              <h3>3. Rutinas y Prácticas Diarias</h3>
              <p>El entrenamiento incluye rutinas que ayudan a internalizar la sumisión en la vida cotidiana. Estas pueden incluir:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Diarios de reflexión</li>
                <li>Ejercicios de postura y presencia</li>
                <li>Tareas específicas asignadas por el Dominante</li>
                <li>Prácticas de mindfulness y conciencia corporal</li>
              </ul>
              
              <h3>4. Educación Continua</h3>
              <p>El aprendizaje nunca termina. Un buen programa de entrenamiento incluye educación continua sobre:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Seguridad en las prácticas BDSM</li>
                <li>Primeros auxilios y cuidado posterior</li>
                <li>Comunicación asertiva</li>
                <li>Gestión emocional</li>
              </ul>
              
              <h2>El Papel del Dominante en el Entrenamiento</h2>
              <p>Un Dominante que guía el entrenamiento de una sumisa tiene una gran responsabilidad. Debe ser:</p>
              
              <h3>1. Paciente y Atento</h3>
              <p>Cada sumisa es única y avanza a su propio ritmo. Un buen Dominante reconoce esto y adapta el entrenamiento en consecuencia.</p>
              
              <h3>2. Consistente</h3>
              <p>La consistencia en las expectativas y las consecuencias es clave para crear un entorno seguro y predecible donde la sumisa pueda florecer.</p>
              
              <h3>3. Empático</h3>
              <p>La capacidad de leer las necesidades emocionales de la sumisa y responder adecuadamente es esencial para construir una conexión profunda y significativa.</p>
              
              <h3>4. Responsable</h3>
              <p>El bienestar físico, emocional y psicológico de la sumisa debe ser siempre la máxima prioridad.</p>
              
              <h2>Beneficios del Entrenamiento Estructurado</h2>
              <p>Un programa de entrenamiento bien diseñado ofrece numerosos beneficios:</p>
              
              <h3>1. Mayor Autoestima</h3>
              <p>Al alcanzar metas y superar desafíos, la sumisa desarrolla una mayor confianza en sí misma y en sus capacidades.</p>
              
              <h3>2. Comunicación Mejorada</h3>
              <p>El entrenamiento fomenta la comunicación abierta y honesta, lo que beneficia no solo la dinámica D/s, sino todas las relaciones de la persona.</p>
              
              <h3>3. Crecimiento Personal</h3>
              <p>El proceso de entrenamiento es un viaje de autodescubrimiento que puede llevar a un mayor autoconocimiento y desarrollo personal.</p>
              
              <h3>4. Conexión Profunda</h3>
              <p>La experiencia compartida del entrenamiento puede fortalecer significativamente el vínculo entre la sumisa y su Dominante.</p>
              
              <h2>Consideraciones Finales</h2>
              <p>Es importante recordar que el entrenamiento para sumisas no es un proceso único para todos. Lo que funciona para una persona puede no funcionar para otra. La flexibilidad y la disposición para adaptarse son esenciales.</p>
              
              <p>Además, el consentimiento debe ser continuo y puede ser revocado en cualquier momento. Una sumisa siempre tiene derecho a expresar sus límites y expectativas, y un Dominante respetuoso las tendrá en cuenta.</p>
              
              <p>En la comunidad BDSM de Madrid, cada vez son más las personas que buscan un enfoque estructurado para la formación de sumisas. Talleres, mentores y grupos de apoyo ofrecen recursos valiosos para quienes desean embarcarse en este viaje de manera segura y consciente.</p>
              
              <p>Al final, el entrenamiento para sumisas no se trata de crear una versión idealizada de lo que debería ser una sumisa, sino de ayudar a cada individuo a descubrir y expresar su propia versión auténtica de la sumisión, en un entorno de respeto mutuo y crecimiento compartido.</p>
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
                  Juegos de Rol
                </span>
                <h3 className="font-semibold text-lg mb-2">Petplay: Explorando la Conexión</h3>
                <p className="text-muted-foreground text-sm mb-4">Sumérgete en el mundo del petplay, una práctica donde el juego de roles con mascotas se convierte en una poderosa herramienta de conexión emocional.</p>
                <Link to="/blog/petplay-juego-mascotas" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
