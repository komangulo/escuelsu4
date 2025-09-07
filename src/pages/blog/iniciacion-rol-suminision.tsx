import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'iniciacion-rol-suminision',
    title: 'Iniciación al Rol de Sumisión: Un Viaje de Autoconocimiento y Crecimiento Personal en las Relaciones D/s',
    excerpt: 'Explora los primeros pasos en el camino de la sumisión consciente. Descubre cómo este rol puede convertirse en una poderosa herramienta de autodescubrimiento y crecimiento personal en el BDSM.',
    category: 'Formación',
    date: '20 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/BDSM_collar_side.jpg',
    tags: ['iniciación', 'sumisión', 'autoconocimiento', 'crecimiento'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El camino hacia la sumisión consciente es un viaje profundamente personal que va más allá de las nociones superficiales que a menudo se muestran en los medios. Para muchas personas, especialmente en la comunidad BDSM de Madrid, descubrir el rol de sumisión es un proceso de autodescubrimiento que puede llevar a un crecimiento personal significativo. Este artículo explora los aspectos fundamentales de la iniciación al rol de sumisión, ofreciendo una guía para quienes están dando sus primeros pasos en este viaje transformador.'
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
              
              <h2>¿Qué significa realmente ser sumiso?</h2>
              <p>La sumisión en el contexto BDSM es un acto de entrega voluntaria de poder, donde la persona sumisa consiente en ceder el control a un Dominante de manera temporal y negociada. Contrario a lo que podrías pensar, la sumisión no es sinónimo de debilidad. Al contrario, requiere una gran fortaleza interior, autoconocimiento y confianza para entregarse de manera consciente y segura.</p>
              
              <p>En Madrid, cada vez son más las personas que descubren que la sumisión puede ser un camino hacia el autoconocimiento y el crecimiento personal. A través de esta dinámica, muchas personas encuentran nuevas facetas de sí mismas que les permiten crecer emocional y espiritualmente.</p>
              
              <h2>Los Primeros Pasos en el Rol de Sumisión</h2>
              
              <h3>Autoconocimiento y Reflexión</h3>
              <p>Antes de sumergirte en una relación D/s, es fundamental dedicar tiempo a la introspección. Pregúntate qué es lo que realmente buscas en esta experiencia. ¿Es explorar tu sexualidad? ¿Encontrar una forma de desconexión del estrés diario? ¿O quizás descubrir nuevas facetas de tu personalidad?</p>
              
              <h3>Educación e Investigación</h3>
              <p>Informarte es clave para una experiencia segura y satisfactoria. Asiste a talleres en Madrid, lee libros especializados y participa en foros de la comunidad BDSM. Cuanto más sepas, mejor preparado/a estarás para tomar decisiones informadas sobre tu viaje en la sumisión.</p>
              
              <h3>Establecer Límites Claros</h3>
              <p>Uno de los aspectos más importantes al comenzar es identificar y comunicar tus límites. ¿Qué estás dispuesto/a a probar? ¿Qué está completamente fuera de discusión? Recuerda que en el BDSM, el consentimiento es la base de cualquier interacción.</p>
              
              <h2>Encontrar un Guía o Mentor</h2>
              <p>Para muchas personas que inician su camino en la sumisión, contar con un guía experimentado puede marcar la diferencia. Un mentor puede ayudarte a navegar por las complejidades de las relaciones D/s, ofrecerte consejos sobre seguridad y ayudarte a identificar posibles señales de alerta en potenciales parejas.</p>
              
              <p>En Madrid, existen espacios seguros donde puedes conectar con mentores y otros miembros de la comunidad que pueden orientarte en tus primeros pasos. Asistir a eventos de la comunidad puede ser una excelente manera de aprender de personas con más experiencia.</p>
              
              <h2>La Importancia de la Comunicación</h2>
              <p>En cualquier relación D/s, pero especialmente cuando estás comenzando, la comunicación abierta y honesta es fundamental. Aprender a expresar tus necesidades, deseos y límites de manera clara es una habilidad que te servirá no solo en el ámbito BDSM, sino en todas tus relaciones personales.</p>
              
              <p>Recuerda que la sumisión no significa perder tu voz. Al contrario, una sumisa informada y segura de sí misma es capaz de comunicarse efectivamente con su Dominante para asegurar que la dinámica sea satisfactoria para ambos.</p>
              
              <h2>Beneficios del Rol de Sumisión</h2>
              <p>Explorar el rol de sumisión puede ofrecer numerosos beneficios personales:</p>
              
              <ul>
                <li><strong>Autoconocimiento:</strong> A través de la sumisión, muchas personas descubren aspectos de su personalidad que desconocían.</li>
                <li><strong>Liberación del estrés:</strong> La entrega de control puede ser profundamente relajante y liberadora.</li>
                <li><strong>Crecimiento personal:</strong> Los desafíos que plantea la sumisión pueden fomentar la resiliencia y la confianza en uno mismo.</li>
                <li><strong>Conexión emocional:</strong> Las relaciones D/s bien llevadas pueden generar vínculos profundos y significativos.</li>
              </ul>
              
              <p>Recuerda que la sumisión es un viaje personal, y no hay una sola manera "correcta" de experimentarla. Lo más importante es que te tomes el tiempo para explorar lo que funciona para ti, establezcas límites claros y siempre priorices tu seguridad y bienestar emocional.</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
