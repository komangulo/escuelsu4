import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'entrenamiento-sumisas',
    title: 'Entrenamiento de Sumisas: Una Guía para el Crecimiento Personal en las Relaciones D/s',
    excerpt: 'El entrenamiento de sumisas va más allá de la obediencia. Descubre cómo este proceso puede convertirse en un viaje de empoderamiento, disciplina personal y desarrollo de confianza mutua.',
    category: 'Entrenamiento',
    date: '19 de Agosto, 2025',
    readTime: '10 min de lectura',
    image: '/images/services/submission-bdsm.jpg',
    tags: ['entrenamiento', 'disciplina', 'crecimiento', 'D/s'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el corazón de la comunidad BDSM, el entrenamiento de sumisas es un concepto que a menudo se malinterpreta. Lejos de ser simplemente un conjunto de órdenes a seguir, el entrenamiento de sumisas es un viaje de crecimiento mutuo, confianza y autodescubrimiento. Este artículo explora los fundamentos del entrenamiento de sumisas, desmitificando conceptos y ofreciendo una visión clara de lo que realmente implica este proceso transformador.'
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
                    <time dateTime="2025-08-19">{blogPost.date}</time>
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
              
              <h2>¿Qué es realmente el entrenamiento de sumisas?</h2>
              <p>El entrenamiento de sumisas es un proceso estructurado mediante el cual una persona sumisa desarrolla habilidades, conocimientos y actitudes que le permiten explorar su sumisión de manera segura y satisfactoria. Contrario a lo que podrías imaginar, no se trata de moldear a alguien según los deseos de otro, sino de facilitar el crecimiento personal dentro de un marco de respeto mutuo y consentimiento.</p>
              
              <p>En Madrid, cada vez más personas descubren que el entrenamiento de sumisas puede ser una experiencia profundamente enriquecedora que va más allá de la mera obediencia. Se trata de un viaje de autoconocimiento, disciplina personal y desarrollo de la confianza mutua.</p>
              
              <h2>Los Pilares del Entrenamiento de Sumisas</h2>
              
              <h3>1. Comunicación Clara y Consistente</h3>
              <p>La base de cualquier entrenamiento exitoso es una comunicación abierta y honesta. Esto incluye establecer expectativas claras, discutir límites de manera detallada y mantener líneas de comunicación abiertas durante todo el proceso. En Madrid, muchos formadores de sumisas enfatizan la importancia de las "negociaciones de escena" antes de cualquier interacción.</p>
              
              <h3>2. Establecimiento de Objetivos</h3>
              <p>¿Qué esperas lograr con el entrenamiento? ¿Es mejorar la confianza en ti misma? ¿Explorar tu sexualidad? ¿O quizás desarrollar habilidades específicas? Definir objetivos claros y realistas es fundamental para medir el progreso y mantener la motivación.</p>
              
              <h3>3. Desarrollo de Habilidades Prácticas</h3>
              <p>Desde protocolos básicos hasta técnicas más avanzadas, el entrenamiento de sumisas puede incluir el desarrollo de diversas habilidades. Esto puede abarcar desde la postura y el lenguaje corporal hasta la ejecución de tareas específicas o la práctica de rituales acordados.</p>
              
              <h3>4. Crecimiento Emocional</h3>
              <p>El aspecto emocional es tan importante como el físico. Un buen entrenamiento de sumisas aborda el desarrollo de la inteligencia emocional, la gestión del estrés y la construcción de la autoestima. En Madrid, muchos programas de formación incluyen ejercicios de reflexión y autoevaluación.</p>
              
              <h2>Beneficios del Entrenamiento de Sumisas</h2>
              
              <p>El entrenamiento de sumisas bien llevado puede ofrecer numerosos beneficios personales:</p>
              
              <ul>
                <li><strong>Autoconocimiento:</strong> Aprenderás más sobre tus límites, deseos y capacidades.</li>
                <li>Disciplina personal: Desarrollarás habilidades de autocontrol y enfoque.</li>
                <li>Confianza: La superación de desafíos fortalece la autoestima.</li>
                <li>Conexión emocional: Las relaciones D/s basadas en la confianza pueden ser profundamente satisfactorias.</li>
                <li>Crecimiento personal: Cada desafío superado es una oportunidad para crecer.</li>
              </ul>
              
              <h2>Encontrar el Entrenamiento Adecuado</h2>
              <p>Si estás considerando comenzar un entrenamiento de sumisas en Madrid, es importante que investigues y elijas cuidadosamente. Busca formadores con experiencia, referencias verificables y un enfoque centrado en el consentimiento y la seguridad. Asiste a talleres introductorios, participa en eventos de la comunidad y no tengas miedo de hacer preguntas antes de comprometerte con un programa de entrenamiento.</p>
              
              <p>Recuerda que el mejor entrenamiento es aquel que respeta tu ritmo, tus límites y tu individualidad. No hay un camino único hacia la sumisión, y tu viaje debe ser tan único como tú misma.</p>
              
              <h2>Conclusión</h2>
              <p>El entrenamiento de sumisas es mucho más que aprender a seguir órdenes. Es un viaje de autodescubrimiento, crecimiento personal y desarrollo de habilidades que pueden enriquecer todos los aspectos de tu vida. Ya sea que estés en Madrid o en cualquier otro lugar, el camino de la sumisión consciente puede ofrecerte herramientas valiosas para tu desarrollo personal y tus relaciones.</p>
              
              <p>Recuerda que la verdadera sumisión nace de la elección consciente, no de la obligación. Es un regalo que se ofrece libremente, un acto de confianza y entrega que, cuando se practica con respeto y consentimiento, puede ser profundamente transformador.</p>
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
                  Formación
                </span>
                <h3 className="font-semibold text-lg mb-2">Iniciación al Rol de Sumisión</h3>
                <p className="text-muted-foreground text-sm mb-4">Explora los primeros pasos en el camino de la sumisión consciente y cómo este rol puede convertirse en una poderosa herramienta de autodescubrimiento.</p>
                <Link to="/blog/iniciacion-rol-suminision" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  Talleres
                </span>
                <h3 className="font-semibold text-lg mb-2">Taller de Cuerda y Nudos</h3>
                <p className="text-muted-foreground text-sm mb-4">Sumérgete en el arte del bondage y los nudos como una forma de conexión íntima y desarrollo de confianza en las relaciones D/s.</p>
                <Link to="/blog/taller-cuerda-nudos" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
