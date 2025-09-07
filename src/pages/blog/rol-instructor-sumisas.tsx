import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2, MessageSquare } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'rol-instructor-sumisas',
    title: 'El Rol de la Escuela de Sumisas: Tu Guía para una Sumisión Segura y Empoderadora',
    excerpt: 'Descubre cómo nuestra escuela de sumisas puede ser tu guía en el viaje hacia una sumisión consciente y segura. Aprende sobre los beneficios de la formación profesional en BDSM.',
    category: 'Formación',
    date: '18 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/blog-bondage-kink-habit.jpg',
    tags: ['instructor', 'mentoría', 'seguridad', 'BDSM'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el mundo del BDSM, la formación especializada es un pilar fundamental para el crecimiento personal y la exploración segura. Nuestra escuela de sumisas no es solo un espacio de aprendizaje, sino un entorno dedicado a ayudar a las mujeres a comprender, explorar y dominar su propia naturaleza sumisa de forma consciente y empoderadora.',
      'Este artículo te guiará a través de los beneficios de nuestra formación profesional en BDSM y el camino transformador que puedes emprender.'
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
              
              <h2>¿Qué es una Academia de Sumisas?</h2>
              <p>Una academia de sumisas es un espacio profesional con experiencia y conocimientos profundos en las dinámicas de Dominación y Sumisión (D/s). Nuestro rol principal es educativo. A diferencia de una relación personal, ofrecemos un espacio neutral y confidencial para que una mujer aprenda, practique y perfeccione las habilidades necesarias para una sumisión plena y saludable.</p>
              <p>El enfoque está siempre en el crecimiento personal de la sumisa, enseñando los cimientos de la comunicación en BDSM, la negociación de límites y la importancia del consentimiento en cada paso del proceso.</p>
              
              <h2>Beneficios de la Mentoría BDSM Profesional</h2>
              <p>Trabajar con un instructor de sumisas ofrece ventajas únicas que no se encuentran en la exploración solitaria o en relaciones no estructuradas:</p>
              
              <h3>Seguridad Ante Todo</h3>
              <p>Un instructor profesional prioriza la seguridad física y emocional. Te enseñará a identificar riesgos, a usar palabras de seguridad (safe words) y a practicar el aftercare para un cierre seguro de cada sesión.</p>
              
              <h3>Desarrollo de la Confianza</h3>
              <p>A través de la guía y el apoyo, aprenderás a confiar en tu instructor y, más importante aún, en ti misma. Esta confianza te permitirá explorar tus límites y deseos de una forma que nunca creíste posible.</p>
              
              <h3>Aprendizaje Acelerado</h3>
              <p>La mentoría personalizada te permite avanzar a tu propio ritmo, enfocándote en las áreas que más te interesan. Desde la obediencia básica hasta el role-play avanzado, cada sesión está diseñada para tu entrenamiento de sumisa personal.</p>
              
              <h3>Crecimiento Emocional</h3>
              <p>La sumisión consciente es una herramienta para el autoconocimiento. Aprenderás a manejar tus emociones, a comunicarte de manera más efectiva y a encontrar una profunda satisfacción en la entrega de control.</p>
              
              <h2>Habilidades Clave que Adquirirás</h2>
              <p>Un programa de mentoría para sumisas te preparará con un conjunto de habilidades fundamentales:</p>
              
              <h3>Comunicación Asertiva</h3>
              <p>Aprenderás a expresar tus deseos, miedos y límites de forma clara y directa, una habilidad vital tanto dentro como fuera de la dinámica.</p>
              
              <h3>Protocolo y Etiqueta D/s</h3>
              <p>Comprenderás las reglas no escritas que rigen las dinámicas D/s, desde cómo dirigirte a tu Dominante hasta la etiqueta en los espacios de juego.</p>
              
              <h3>Manejo de Emociones</h3>
              <p>Se te guiará para entender la psicología de la sumisión y cómo manejar las emociones intensas que pueden surgir durante las sesiones.</p>
              
              <h3>Práctica Segura</h3>
              <p>Adquirirás un conocimiento práctico sobre la implementación de las reglas de seguridad, el uso de equipo y la importancia de la higiene emocional después de cada sesión.</p>
              
              <h2>Conclusión</h2>
              <p>Nuestra escuela de sumisas es mucho más que una guía en el mundo del BDSM; es un aliado en tu viaje de autodescubrimiento y empoderamiento. A través de la formación profesional, podrás explorar tu sumisión de manera segura, informada y enriquecedora.</p>
              
              <p>¿Estás lista para dar el primer paso hacia una sumisión más consciente? Explora nuestros programas de mentoría y descubre cómo podemos guiarte en este fascinante camino de crecimiento personal.</p>
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
                <h3 className="font-semibold text-lg mb-2">Academia de Sumisión: El Camino de la Formación de Sumisas</h3>
                <p className="text-muted-foreground text-sm mb-4">Descubre cómo una academia de sumisión puede guiarte en tu viaje de autodescubrimiento y crecimiento personal en el BDSM.</p>
                <Link to="/blog/academia-sumision" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                  Seguridad
                </span>
                <h3 className="font-semibold text-lg mb-2">Consentimiento y Límites en el BDSM</h3>
                <p className="text-muted-foreground text-sm mb-4">Aprende sobre la importancia del consentimiento informado y cómo establecer límites claros en tus dinámicas.</p>
                <a href="#" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
