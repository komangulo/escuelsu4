import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'petplay-juego-mascotas',
    title: 'Petplay: Explorando la Conexión y la Confianza a través del Juego de Roles con Mascotas',
    excerpt: 'Sumérgete en el mundo del petplay, una práctica del BDSM donde el juego de roles con mascotas se convierte en una poderosa herramienta de conexión emocional y exploración de la dinámica de poder.',
    category: 'Juegos de Rol',
    date: '21 de Agosto, 2025',
    readTime: '7 min de lectura',
    image: '/images/services/shiba.jpg',
    tags: ['petplay', 'juego de roles', 'mascotas', 'confianza', 'BDSM'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El petplay es una de las formas más fascinantes y malinterpretadas de explorar la dinámica de poder en el BDSM. A primera vista, puede parecer un simple juego de disfraces o una fantasía lúdica, pero para quienes lo practican, el petplay es mucho más profundo. Es una experiencia transformadora que permite a las personas explorar la entrega, la confianza y la conexión emocional a través de la adopción de roles de mascota y dueño/a. En este artículo, desentrañaremos los matices de esta práctica, sus diferentes formas y cómo puede convertirse en un poderoso vehículo para el crecimiento personal y la intimidad.'
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
                    <time dateTime="2025-08-21">{blogPost.date}</time>
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
              
              <h2>¿Qué es el Petplay?</h2>
              <p>El petplay es una práctica dentro del BDSM donde los participantes adoptan los roles de mascota y dueño/a. Aunque comúnmente se asocia con la imitación de perros o gatos, el espectro es mucho más amplio y puede incluir cualquier tipo de animal, desde caballos y zorros hasta criaturas mitológicas. La esencia del petplay no está en el disfraz, sino en la dinámica de poder y la conexión emocional que se establece entre las partes.</p>
              
              <p>Esta práctica puede ser puramente lúdica, profundamente espiritual o cualquier punto intermedio. Para algunos, es una forma de escapar de las responsabilidades humanas; para otros, es un camino hacia la liberación emocional y la exploración de la sumisión o dominación de una manera única.</p>
              
              <h2>Las Múltiples Formas del Petplay</h2>
              <p>El petplay es tan diverso como las personas que lo practican. Algunas de las formas más comunes incluyen:</p>
              
              <h3>Puppy Play (Juego de Cachorros)</h3>
              <p>Quizás la forma más conocida, donde la persona que asume el rol de mascota adopta comportamientos caninos. Puede incluir el uso de correas, collares, máscaras de perro y juguetes para morder. El énfasis está en la lealtad, el entrenamiento y el juego.</p>
              
              <h3>Kitten Play (Juego de Gatitos)</h3>
              <p>Este estilo se centra en la elegancia, la independencia y la curiosidad felina. Los accesorios pueden incluir orejas de gato, colas, guantes con garras y juguetes con plumas. La dinámica a menudo incluye caricias, ronroneos y juegos que estimulan los instintos felinos.</p>
              
              <h3>Pony Play (Juego de Ponis)</h3>
              <p>Una forma más estructurada que a menudo incluye arneses, riendas y, a veces, incluso carros o carruajes. El entrenamiento puede ser más formal, con comandos específicos y obstáculos que superar.</p>
              
              <h3>Otros Animales</h3>
              <p>La imaginación es el límite: zorros, conejos, vacas, dragones... cada animal ofrece una dinámica única y una forma diferente de explorar la identidad y la conexión.</p>
              
              <h2>La Psicología del Petplay</h2>
              <p>El atractivo del petplay va más allá de lo superficial. Para muchos, ofrece:</p>
              
              <h3>Liberación del Ego</h3>
              <p>Al adoptar una identidad animal, las personas pueden liberarse temporalmente de las presiones y expectativas sociales. Es una forma de "apagar" la mente racional y conectarse con sensaciones más instintivas.</p>
              
              <h3>Exploración de la Sumisión</h3>
              <p>Para las sumisas, el rol de mascota puede ser una forma poderosa de entregar el control. Al renunciar a la toma de decisiones y seguir las órdenes de su dueño/a, encuentran una profunda sensación de libertad en la sumisión.</p>
              
              <h3>Responsabilidad y Cuidado</h3>
              <p>Para los dominantes, el rol de dueño/a conlleva una gran responsabilidad. Deben estar atentos a las necesidades de su mascota, proporcionar estructura, disciplina y, sobre todo, cuidado. Es una forma de ejercer el poder de manera afectuosa y protectora.</p>
              
              <h2>Elementos Clave del Petplay</h2>
              <p>El petplay puede incluir una variedad de elementos, dependiendo de las preferencias de los participantes:</p>
              
              <h3>Vestuario y Accesorios</h3>
              <p>Desde orejas y colas hasta arneses completos, el atuendo ayuda a la inmersión en el personaje. Los materiales varían desde cuero y látex hasta telas suaves, dependiendo del animal y la dinámica deseada.</p>
              
              <h3>Comportamiento y Lenguaje Corporal</h3>
              <p>Los participantes a menudo adoptan movimientos y sonidos característicos del animal que representan. Esto puede incluir gatear, ladrar, maullar o relinchar, según el caso.</p>
              
              <h3>Entrenamiento y Comandos</h3>
              <p>Muchas dinámicas de petplay incluyen elementos de entrenamiento, donde la mascota aprende a responder a órdenes específicas. Esto refuerza la dinámica de poder y puede ser una fuente de satisfacción para ambas partes.</p>
              
              <h3>Espacio y Ambiente</h3>
              <p>Algunas personas crean espacios dedicados para el petplay, con camas para mascotas, tazones de comida y agua, y juguetes. Esto ayuda a establecer una clara distinción entre el espacio de juego y la vida cotidiana.</p>
              
              <h2>Consideraciones Éticas y de Seguridad</h2>
              <p>Como en cualquier práctica BDSM, el consentimiento y la comunicación son fundamentales en el petplay:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Negociación previa:</strong> Discutir límites, expectativas y palabras de seguridad.</li>
                <li><strong>Consentimiento continuo:</strong> Estar atento a las señales de incomodidad o angustia.</li>
                <li><strong>Salir del personaje:</strong> Tener un ritual claro para volver a la realidad después de la escena.</li>
                <li><strong>Aftercare:</strong> Dedicar tiempo a la reconexión emocional después del juego.</li>
              </ul>
              
              <p>En la comunidad BDSM de Madrid, el petplay es cada vez más reconocido como una práctica válida y enriquecedora. Talleres y eventos especializados ofrecen espacios seguros para que las personas exploren esta faceta de su sexualidad de manera respetuosa y consensuada.</p>
              
              <p>Al final, el petplay es una celebración de la imaginación, la confianza y la conexión. Ya sea como un juego ocasional o como una parte integral de una relación de poder, ofrece un camino único para explorar la dinámica entre humanos y las muchas formas en que podemos relacionarnos más allá de las convenciones sociales.</p>
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
                  Técnicas Avanzadas
                </span>
                <h3 className="font-semibold text-lg mb-2">CNC: Consentimiento No Consensuado</h3>
                <p className="text-muted-foreground text-sm mb-4">Una guía detallada sobre el CNC, una de las prácticas más complejas y malentendidas dentro del BDSM, y cómo practicarla de manera ética y segura.</p>
                <Link to="/blog/cnc-consentimiento-no-consensuado" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
