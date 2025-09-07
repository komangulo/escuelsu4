import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'comunicacion-poder-relaciones-ds',
    title: 'La Comunicación de Poder en Relaciones D/s: Construyendo Confianza a Través del Diálogo',
    excerpt: 'Descubre cómo la comunicación efectiva es el pilar fundamental de las relaciones de poder consensuadas, permitiendo negociar dinámicas, establecer límites y construir una conexión profunda basada en la confianza mutua.',
    category: 'Comunicación',
    date: '14 de Agosto, 2025',
    readTime: '10 min de lectura',
    image: '/images/services/image-bdsm-limits-learn-whats-hard-soft-1.jpg',
    tags: ['comunicación', 'relaciones D/s', 'confianza', 'límites', 'negociación'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el corazón de toda relación D/s saludable y satisfactoria se encuentra una comunicación clara, honesta y continua. A diferencia de lo que podrían sugerir los estereotipos, las relaciones de poder consensuadas no se tratan de silencio y obediencia ciega, sino de diálogo abierto, negociación constante y comprensión mutua. Este artículo explora los fundamentos de la comunicación efectiva en las relaciones D/s y cómo puede fortalecer el vínculo entre las partes involucradas.'
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
                    <time dateTime="2025-08-14">{blogPost.date}</time>
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
              
              <h2>La Importancia de la Comunicación en las Relaciones de Poder</h2>
              <p>En las dinámicas D/s, la comunicación efectiva no es solo importante, es absolutamente esencial. A diferencia de las relaciones convencionales, donde la comunicación puede ser más flexible, las relaciones de poder requieren una claridad excepcional para garantizar la seguridad y el bienestar de todas las partes involucradas.</p>
              
              <h3>Elementos Clave de la Comunicación en D/s</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Negociación inicial:</strong> Establecer límites, expectativas y deseos de manera clara desde el principio.</li>
                <li><strong>Check-ins regulares:</strong> Espacios designados para evaluar la dinámica y hacer ajustes necesarios.</li>
                <li><strong>Lenguaje claro:</strong> Uso de términos específicos para evitar malentendidos.</li>
                <li><strong>Señales de seguridad:</strong> Establecer palabras de seguridad o gestos para indicar la necesidad de pausa o detención.</li>
              </ul>
              
              <h2>Técnicas de Comunicación Efectiva</h2>
              <p>Para fomentar una comunicación saludable en las relaciones D/s, considera implementar las siguientes prácticas:</p>
              
              <h3>1. Escucha Activa</h3>
              <p>La escucha activa va más allá de oír las palabras; implica comprender completamente el mensaje del otro, incluyendo emociones y necesidades no expresadas verbalmente. En el contexto D/s, esto es crucial para detectar señales sutiles de incomodidad o satisfacción.</p>
              
              <h3>2. Comunicación No Violenta (CNV)</h3>
              <p>La CNV es un enfoque que fomenta la expresión honesta de sentimientos y necesidades sin juicios ni críticas. Este método es particularmente útil para discutir temas difíciles o resolver conflictos en la dinámica de poder.</p>
              
              <h3>3. Diálogos Estructurados</h3>
              <p>Establecer momentos específicos para conversaciones profundas sobre la relación puede ser beneficioso. Estos diálogos pueden incluir:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Revisión de límites y consentimiento</li>
                <li>Discusión de fantasías y deseos</li>
                <li>Evaluación del bienestar emocional</li>
                <li>Ajuste de expectativas y dinámicas</li>
              </ul>
              
              <h2>Desafíos Comunes y Cómo Superarlos</h2>
              <p>A pesar de las mejores intenciones, pueden surgir desafíos en la comunicación de las relaciones D/s. Algunos comunes incluyen:</p>
              
              <h3>1. Dificultad para Expresar Necesidades</h3>
              <p>Para la persona sumisa, puede ser un reto expresar necesidades o deseos que parezcan contradecir su rol. Fomentar un entorno donde todas las voces sean valoradas por igual durante los check-ins puede ayudar a superar esta barrera.</p>
              
              <h3>2. Asimetría en la Comunicación</h3>
              <p>Mientras que la dinámica de poder puede ser desigual, la comunicación debe permanecer abierta en ambos sentidos. Establecer momentos específicos donde la jerarquía se pausa temporalmente puede facilitar conversaciones más equilibradas.</p>
              
              <h3>3. Malentendidos en la Comunicación No Verbal</h3>
              <p>En situaciones de juego de roles intenso, los mensajes no verbales pueden malinterpretarse. Es crucial tener señales claras y acordadas que trasciendan el rol para garantizar la seguridad y el consentimiento continuo.</p>
              
              <h2>Conclusión</h2>
              <p>La comunicación efectiva es el cimiento sobre el que se construyen relaciones D/s saludables y satisfactorias. Al priorizar el diálogo abierto, la escucha activa y la negociación continua, las parejas pueden crear dinámicas de poder que enriquezcan su conexión y respeten los límites de cada uno. Recuerda que la verdadera fortaleza en una relación de poder no está en el silencio, sino en la capacidad de comunicarse con honestidad y respeto mutuo.</p>
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
                <p className="text-muted-foreground text-sm mb-4">Explora los aspectos psicológicos de la sumisión consciente y cómo puede convertirse en un camino de crecimiento personal.</p>
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
                  Educación
                </span>
                <h3 className="font-semibold text-lg mb-2">El Protocolo BDSM y la Etiqueta D/s</h3>
                <p className="text-muted-foreground text-sm mb-4">Aprende sobre los protocolos y la etiqueta que rigen las relaciones de poder consensuadas y cómo pueden mejorar la comunicación.</p>
                <Link to="/blog/protocolo-bdsm-etiqueta" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
