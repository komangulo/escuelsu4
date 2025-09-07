import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Header from '@/components/Header';
import { useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'spanking-tecnicas-seguridad',
    title: 'Spanking: Técnicas y Seguridad para Explorar el Dolor Controlado en el BDSM',
    excerpt: 'Descubre cómo el spanking puede ser una forma de expresión consensual que explora el dolor controlado como medio para la intimidad y la liberación emocional en dinámicas de poder.',
    category: 'Técnicas',
    date: '24 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/spanking.jpg',
    tags: ['spanking', 'dolor controlado', 'técnicas', 'seguridad', 'BDSM']
  },
  {
    id: 'degradacion-humillacion-consensuada',
    title: 'Degradación y Humillación Consensuada: Explorando los Límites del Poder',
    excerpt: 'Una mirada profunda a cómo la degradación y humillación consensuadas pueden convertirse en herramientas de conexión emocional y liberación en relaciones de poder saludables.',
    category: 'Psicología',
    date: '23 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/humillate.PNG',
    tags: ['degradación', 'humillación', 'consentimiento', 'poder', 'confianza']
  },
  {
    id: 'cnc-consentimiento-no-consensuado',
    title: 'CNC: Consentimiento No Consensuado - Explorando los Juegos de Poder de forma Segura',
    excerpt: 'Una guía detallada sobre el CNC (Consensual Non-Consensual), una de las prácticas más complejas y malentendidas dentro del BDSM, y cómo practicarla de manera ética y segura.',
    category: 'Técnicas Avanzadas',
    date: '22 de Agosto, 2025',
    readTime: '10 min de lectura',
    image: '/images/services/bdsm-il-piacere-di-potere.jpg',
    tags: ['CNC', 'consentimiento', 'juegos de poder', 'seguridad', 'BDSM']
  },
  {
    id: 'petplay-juego-mascotas',
    title: 'Petplay: Explorando el Juego de Mascotas - Confianza y Posesión Consensuada',
    excerpt: 'Sumérgete en el mundo del petplay, una expresión única de confianza y entrega en el BDSM que va más allá del simple juego de roles para convertirse en una experiencia transformadora.',
    category: 'Juegos de Rol',
    date: '21 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/shiba.jpg',
    tags: ['petplay', 'juego de roles', 'confianza', 'posesión', 'BDSM']
  },
  {
    id: 'entrenamiento-integral-sumisas',
    title: 'Entrenamiento Integral para Sumisas: Disciplina, Crecimiento y Dinámica de Poder',
    excerpt: 'Un enfoque holístico del entrenamiento de sumisas que abarca el desarrollo mental, emocional y físico dentro de una dinámica de poder consensuada y respetuosa.',
    category: 'Entrenamiento',
    date: '20 de Agosto, 2025',
    readTime: '11 min de lectura',
    image: '/images/services/submission-bdsm.jpg',
    tags: ['entrenamiento', 'disciplina', 'crecimiento', 'dinámica de poder', 'BDSM']
  },
  {
    id: 'protocolo-bdsm-etiqueta',
    title: 'El Protocolo BDSM y la Etiqueta D/s: Pilares de una Relación de Dominación y Sumisión Respetuosa',
    excerpt: 'Descubre cómo el protocolo BDSM y la etiqueta D/s son fundamentales para relaciones de poder saludables. Aprende sobre comunicación, límites y el verdadero significado del intercambio de poder consensuado.',
    category: 'Educación',
    date: '19 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/image-bdsm-limits-learn-whats-hard-soft-1.jpg',
    tags: ['protocolo', 'etiqueta', 'D/s', 'comunicación', 'BDSM']
  },
  {
    id: 'iniciacion-rol-suminision',
    title: 'Iniciación al Rol de Sumisión: Un Viaje de Autoconocimiento',
    excerpt: 'Explora los primeros pasos en el camino de la sumisión consciente. Descubre cómo este rol puede convertirse en una poderosa herramienta de autodescubrimiento y crecimiento personal en el BDSM.',
    category: 'Formación',
    date: '18 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/BDSM_collar_side.jpg',
    tags: ['iniciación', 'sumisión', 'autoconocimiento', 'crecimiento', 'BDSM']
  },
  {
    id: 'entrenamiento-sumisas',
    title: 'Entrenamiento de Sumisas: Una Guía para el Crecimiento Personal',
    excerpt: 'El entrenamiento de sumisas va más allá de la obediencia. Descubre cómo este proceso puede convertirse en un viaje de empoderamiento, disciplina personal y desarrollo de confianza mutua.',
    category: 'Entrenamiento',
    date: '17 de Agosto, 2025',
    readTime: '10 min de lectura',
    image: '/images/services/submission-bdsm.jpg',
    tags: ['entrenamiento', 'disciplina', 'crecimiento', 'D/s', 'BDSM']
  },
  {
    id: 'taller-cuerda-nudos',
    title: 'Taller de Cuerda y Nudos: El Arte del Bondage y la Conexión',
    excerpt: 'Sumérgete en el arte del bondage y los nudos como una forma de conexión íntima. Aprende sobre las diferencias entre bondage y shibari, y cómo estas prácticas pueden fortalecer la confianza en las relaciones D/s.',
    category: 'Talleres',
    date: '16 de Agosto, 2025',
    readTime: '7 min de lectura',
    image: '/images/services/IMG_1255-1024x575.jpg',
    tags: ['bondage', 'nudos', 'shibari', 'taller', 'BDSM']
  },
  {
    id: 'psicologia-suminision-consciente',
    title: 'La Psicología de la Sumisión Consciente',
    excerpt: 'Explora los aspectos psicológicos detrás de la sumisión consciente. Descubre cómo este rol puede convertirse en un vehículo para el autoconocimiento, la confianza y el crecimiento personal.',
    category: 'Psicología',
    date: '15 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/BDSM_collar_side.jpg',
    tags: ['psicología', 'sumisión', 'autoconocimiento', 'crecimiento', 'BDSM']
  },
  {
    id: 'comunicacion-poder-relaciones',
    title: 'La Comunicación de Poder en Relaciones D/s',
    excerpt: 'La comunicación efectiva es la base de cualquier relación D/s saludable. Aprende técnicas para negociar límites, expresar necesidades y construir una dinámica de poder basada en la confianza y el respeto mutuo.',
    category: 'Comunicación',
    date: '14 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/image-bdsm-limits-learn-whats-hard-soft-1.jpg',
    tags: ['comunicación', 'límites', 'confianza', 'D/s', 'BDSM']
  },
  {
    id: 'rituales-ceremonias',
    title: 'Rituales y Ceremonias en Relaciones D/s',
    excerpt: 'Descubre cómo los rituales y ceremonias pueden enriquecer tu relación D/s. Desde pequeños gestos cotidianos hasta ceremonias formales, estas prácticas fortalecen el vínculo y la conexión emocional en la dinámica de poder.',
    category: 'Relaciones',
    date: '13 de Agosto, 2025',
    readTime: '7 min de lectura',
    image: '/images/services/tumblr_nrr9vyJb4f1sjyuzzo1_500.jpg',
    tags: ['rituales', 'ceremonias', 'tradiciones', 'D/s', 'BDSM']
  }
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          
          <h1 className="text-4xl font-bold tracking-tight mb-8">Blog Academia de Sumisas</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group h-full flex flex-col bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors">
                <Link to={`/blog/${post.id}`} className="block h-full flex flex-col">
                  {post.image && (
                    <div className="w-full h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      {post.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span 
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="text-xs text-muted-foreground">+{post.tags.length - 2} más</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <div className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Quieres recibir más artículos como estos?</h3>
            <p className="text-muted-foreground mb-6">
              Suscríbete a nuestro boletín para recibir contenido exclusivo sobre BDSM, sumisión consciente y dinámicas de poder directamente en tu bandeja de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-gradient-primary hover:opacity-90 whitespace-nowrap">
                Suscribirse
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
