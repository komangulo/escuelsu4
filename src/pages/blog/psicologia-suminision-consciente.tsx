import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'psicologia-suminision-consciente',
    title: 'La Psicología de la Sumisión Consciente: Un Viaje de Autodescubrimiento',
    excerpt: 'Explora los aspectos psicológicos de la sumisión consciente en las relaciones D/s, entendiendo cómo esta elección puede convertirse en un camino de crecimiento personal y conexión profunda.',
    category: 'Psicología',
    date: '15 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/BDSM_collar_side.jpg',
    tags: ['psicología', 'sumisión', 'crecimiento', 'autoconocimiento', 'D/s'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'La sumisión consciente en el contexto de las relaciones de poder consensuadas es un viaje de autodescubrimiento que trasciende los estereotipos comunes. Lejos de ser una simple entrega de poder, la verdadera sumisión es un acto de profunda intencionalidad y autoconocimiento. En este artículo, exploraremos los aspectos psicológicos que subyacen a la sumisión consciente y cómo puede convertirse en una poderosa herramienta de crecimiento personal.'
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
                    <time dateTime="2025-08-15">{blogPost.date}</time>
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
              
              <h2>La Naturaleza de la Sumisión Consciente</h2>
              <p>La sumisión consciente no es sinónimo de debilidad o falta de voluntad. Por el contrario, es una elección activa que requiere fortaleza, claridad mental y un profundo entendimiento de los propios límites y deseos. A diferencia de la sumisión forzada o inconsciente, la sumisión consciente es un acto de empoderamiento personal donde la persona sumisa mantiene plena agencia sobre sus decisiones.</p>
              
              <h3>Los Pilares de la Sumisión Consciente</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Autoconocimiento:</strong> Comprensión profunda de los propios deseos, límites y motivaciones.</li>
                <li><strong>Consentimiento informado:</strong> Decisión tomada con pleno conocimiento de lo que implica la dinámica D/s.</li>
                <li><strong>Comunicación asertiva:</strong> Habilidad para expresar necesidades y límites de manera clara.</li>
                <li><strong>Responsabilidad personal:</strong> Asumir la propiedad de las propias elecciones y sus consecuencias.</li>
              </ul>
              
              <h2>Beneficios Psicológicos de la Sumisión Consciente</h2>
              <p>Cuando se practica de manera consciente y ética, la sumisión puede ofrecer numerosos beneficios psicológicos:</p>
              
              <h3>1. Liberación del Estrés y la Ansiedad</h3>
              <p>La entrega del control en un entorno seguro puede proporcionar un alivio significativo del estrés cotidiano. La mente se libera de la constante necesidad de tomar decisiones, permitiendo un estado de relajación profunda y presencia en el momento.</p>
              
              <h3>2. Mayor Conciencia Corporal</h3>
              <p>Las prácticas de sumisión a menudo implican una mayor atención a las sensaciones corporales, lo que puede mejorar la conexión mente-cuerpo y la inteligencia emocional.</p>
              
              <h3>3. Desarrollo de la Confianza</h3>
              <p>La relación de confianza que se construye en una dinámica D/s saludable puede tener efectos positivos en la autoestima y la capacidad de establecer límites saludables en otras áreas de la vida.</p>
              
              <h2>Consideraciones Importantes</h2>
              <p>Es fundamental recordar que la sumisión consciente debe practicarse de manera segura, consensuada y ética. Algunas consideraciones clave incluyen:</p>
              
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Nunca debe haber coerción o presión para participar en dinámicas de sumisión.</li>
                <li>El consentimiento debe ser informado, entusiasta y puede retirarse en cualquier momento.</li>
                <li>Es importante tener en cuenta la salud mental y emocional de todas las partes involucradas.</li>
                <li>La comunicación abierta y honesta es fundamental para mantener una dinámica saludable.</li>
              </ul>
              
              <p>En resumen, la psicología de la sumisión consciente revela que esta elección puede ser un camino profundo de autodescubrimiento y crecimiento personal cuando se practica con intención, respeto y cuidado mutuo.</p>
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
                <p className="text-muted-foreground text-sm mb-4">Explora los primeros pasos en el camino de la sumisión consciente y cómo este rol puede convertirse en una herramienta de autodescubrimiento.</p>
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
                  Educación
                </span>
                <h3 className="font-semibold text-lg mb-2">El Protocolo BDSM y la Etiqueta D/s</h3>
                <p className="text-muted-foreground text-sm mb-4">Descubre cómo el protocolo BDSM y la etiqueta D/s son fundamentales para relaciones de poder saludables y respetuosas.</p>
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
