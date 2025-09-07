import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'formador-sumisas',
    title: 'El Papel del Formador de Sumisas: Tu Guía Hacia el Empoderamiento y la Entrega',
    excerpt: 'Descubre cómo un formador de sumisas puede guiarte en tu viaje de autodescubrimiento y crecimiento en el BDSM. Aprende sobre los beneficios de la formación profesional y el empoderamiento a través de la sumisión consciente.',
    category: 'Formación',
    date: '19 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/placeholder.jpg',
    tags: ['formación', 'sumisión', 'BDSM', 'empoderamiento'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el mundo del BDSM, la figura de un formador de sumisas es un recurso invaluable para quienes buscan explorar su rol con seriedad y seguridad. Un formador es más que una figura de Dominación; es un mentor, un educador y un guía dedicado a ayudar a las mujeres a comprender, explorar y dominar su propia naturaleza sumisa de una manera consciente y profunda.',
      'Este artículo te guiará a través del importante papel de un formador en sumisión, los beneficios de un entrenamiento para sumisas y el camino transformador que puedes emprender.'
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
              
              <h2>¿Qué es un Formador de Sumisas?</h2>
              <p>Un formador de sumisas es un profesional con amplia experiencia y un profundo conocimiento de la dinámica D/s. Su rol principal es educativo. A diferencia de una relación personal, el formador proporciona un espacio seguro, neutro y confidencial para que una mujer pueda aprender, practicar y perfeccionar las habilidades necesarias para una sumisión segura y gratificante.</p>
              <p>El enfoque está siempre en el crecimiento personal de la sumisa, enseñando los fundamentos de la comunicación en BDSM, la negociación de límites y la importancia del consentimiento en cada paso del proceso.</p>
              
              <h2>Beneficios de un Entrenamiento de Sumisión Profesional</h2>
              <p>Trabajar con un formador profesional ofrece ventajas únicas que no se encuentran en la exploración individual o en relaciones sin estructura:</p>
              
              <h3>Seguridad Ante Todo</h3>
              <p>Un formador profesional prioriza tu bienestar físico y emocional. Te enseñará a identificar riesgos, a usar palabras de seguridad (safe words) y a practicar el aftercare para un cierre emocionalmente seguro de cada sesión.</p>
              
              <h3>Desarrollo de la Confianza</h3>
              <p>A través de una guía experta y apoyo constante, aprenderás a confiar no solo en tu formador, sino en ti misma. Esta confianza te permitirá explorar tus límites y deseos de una forma que nunca creíste posible.</p>
              
              <h3>Aprendizaje Acelerado</h3>
              <p>Un programa de entrenamiento para sumisas te permite avanzar a tu propio ritmo, enfocándote en las áreas que más te interesan. Desde la obediencia básica hasta el role-play avanzado, cada sesión está diseñada para tu desarrollo personal.</p>
              
              <h3>Crecimiento Emocional</h3>
              <p>La sumisión consciente es una poderosa herramienta de autoconocimiento. Aprenderás a manejar tus emociones, a comunicarte de forma más efectiva y a encontrar una profunda satisfacción en la entrega de control.</p>
              
              <h2>Habilidades Clave que Adquirirás</h2>
              <p>Un programa de mentoría de sumisión te equipará con un conjunto de habilidades fundamentales:</p>
              
              <h3>Comunicación Asertiva</h3>
              <p>Aprenderás a expresar tus deseos, necesidades y límites de forma clara y directa, una habilidad vital tanto dentro como fuera de la dinámica.</p>
              
              <h3>Protocolo y Etiqueta D/s</h3>
              <p>Comprenderás las reglas no escritas que rigen las dinámicas de poder, desde cómo dirigirte a tu Dominante hasta la etiqueta en los espacios de juego.</p>
              
              <h3>Manejo de Emociones</h3>
              <p>Serás guiada para entender la psicología detrás de la sumisión y cómo manejar las emociones que surgen durante las sesiones de juego.</p>
              
              <h3>Práctica Segura</h3>
              <p>Adquirirás un conocimiento práctico sobre la implementación de las reglas de seguridad, el uso de equipo y la importancia del aftercare emocional después de cada sesión.</p>
              
              <h2>La Sumisión como un Acto de Empoderamiento</h2>
              <p>Contrario a los estereotipos, la sumisión, cuando es elegida y practicada de forma consciente, es un acto de poder personal. Te permite entregar el control en un espacio seguro para explorar una parte de ti que puede estar dormida. Un formador de sumisas te acompaña en este viaje, asegurando que cada paso sea una lección de empoderamiento, confianza y profundo autodescubrimiento.</p>
              
              <p>Si buscas una guía profesional y un camino seguro hacia el empoderamiento sexual, la mentoría individual puede ser el siguiente paso en tu viaje personal.</p>
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
                  Mentoría
                </span>
                <h3 className="font-semibold text-lg mb-2">El Rol de la Academia de Sumisas</h3>
                <p className="text-muted-foreground text-sm mb-4">Descubre cómo nuestra academia de sumisas puede ser tu guía en el viaje hacia una sumisión consciente y segura.</p>
                <Link to="/blog/rol-instructor-sumisas" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  Formación
                </span>
                <h3 className="font-semibold text-lg mb-2">Academia de Sumisión</h3>
                <p className="text-muted-foreground text-sm mb-4">Descubre cómo una academia de sumisión puede guiarte en tu viaje de autodescubrimiento y crecimiento personal.</p>
                <Link to="/blog/academia-sumision" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
