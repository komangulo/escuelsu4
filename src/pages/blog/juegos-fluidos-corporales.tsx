import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'juegos-fluidos-corporales',
    title: 'Juegos con Fluidos Corporales: Explorando la Intimidad Líquida en el BDSM',
    excerpt: 'Descubre cómo los juegos con fluidos corporales pueden añadir una nueva dimensión de intimidad y sumisión en tus prácticas BDSM, siempre desde el respeto y la seguridad.',
    category: 'Prácticas Avanzadas',
    date: '19 de Agosto, 2025',
    readTime: '7 min de lectura',
    image: '/images/services/que-es-el-bdsm-750x400.jpg',
    tags: ['fluidos', 'saliva', 'semen', 'orina', 'golden shower', 'BDSM', 'juegos eróticos'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el vasto universo del BDSM, los juegos con fluidos corporales ocupan un espacio único, despertando tanto fascinación como tabú. La saliva, el semen y la orina, entre otros fluidos, pueden convertirse en poderosas herramientas de conexión, sumisión y placer cuando se utilizan de manera consensuada y segura. Este artículo explora el mundo de los juegos con fluidos, ofreciendo una guía completa para quienes deseen adentrarse en esta práctica desde el respeto, la higiene y el placer compartido.'
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
              
              <h2>La Psicología de los Juegos con Fluidos</h2>
              <p>Los juegos con fluidos tocan aspectos profundos de la psique humana. Para muchos, representan una forma extrema de intimidad y entrega, donde las barreras físicas y simbólicas se disuelven. La conexión que se establece al compartir fluidos puede ser profundamente significativa, aunque también puede despertar emociones intensas que es importante gestionar.</p>
              
              <h2>Tipos de Juegos con Fluidos</h2>
              
              <h3>1. Juegos con Saliva</h3>
              <p>La saliva es quizás el fluido más accesible y menos tabú. Puede utilizarse en:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Beso húmedo:</strong> Compartir saliva a través de besos profundos.</li>
                <li><strong>Escupir:</strong> Sobre el cuerpo o la cara como acto de dominación.</li>
                <li><strong>Compartir comida/bebida:</strong> De boca a boca como acto de intimidad.</li>
              </ul>
              
              <h3>2. Juegos con Semen</h3>
              <p>El semen puede ser un elemento poderoso en dinámicas de sumisión:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Facial:</strong> Eyacular en el rostro como acto de posesión.</li>
                <li><strong>Degradación consensuada:</strong> Hacer que la sumisa lo beba o lo mantenga en la boca.</li>
                <li><strong>Marcaje:</strong> Utilizarlo como "marca" temporal sobre el cuerpo.</li>
              </ul>
              
              <h3>3. Golden Showers (Juegos con Orina)</h3>
              <p>Los juegos con orina, conocidos como "golden showers" o "lluvia dorada", son quizás los más tabú y requieren una comunicación especialmente clara:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>En el cuerpo:</strong> Orinar sobre el cuerpo de la pareja.</li>
                <li><strong>En la boca:</strong> Beber la orina del Dominante (urolagnia).</li>
                <li><strong>Ropa interior:</strong> Orinar en la ropa interior como acto de humillación consensuada.</li>
              </ul>
              
              <h2>Seguridad e Higiene</h2>
              <p>Los juegos con fluidos requieren precauciones especiales:</p>
              
              <h3>1. Salud</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Realizarse pruebas de ETS regularmente.</li>
                <li>Evitar el contacto con heridas abiertas o mucosas si hay riesgo de infección.</li>
                <li>En el caso de la orina, la primera orina de la mañana es la más concentrada y puede ser más irritante.</li>
              </ul>
              
              <h3>2. Higiene</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Mantener una buena hidratación, especialmente para juegos con orina.</li>
                <li>Ducharse antes y después de las prácticas.</li>
                <li>Tener toallas o protectores de cama a mano.</li>
              </ul>
              
              <h3>3. Consenso y Límites</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Negociar claramente qué fluidos están permitidos y cómo.</li>
                <li>Establecer palabras de seguridad.</li>
                <li>Empezar de forma gradual para evaluar el confort de ambas partes.</li>
              </ul>
              
              <h2>Consejos para una Primera Experiencia</h2>
              <p>Si es tu primera vez explorando los juegos con fluidos, considera estos consejos:</p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li><strong>Comienza con la saliva:</strong> Es el fluido más accesible y menos intimidante.</li>
                <li><strong>Háblalo primero:</strong> Asegúrate de que ambas partes están cómodas y entusiasmadas.</li>
                <li><strong>Prepara el espacio:</strong> Usa toallas o plásticos para proteger superficies.</li>
                <li><strong>Hidrátate:</strong> Especialmente importante para juegos con orina.</li>
                <li><strong>Despuás del juego:</strong> Asegúrate de tener tiempo para el aftercare y la limpieza.</li>
              </ol>
              
              <h2>Consideraciones Éticas</h2>
              <p>Los juegos con fluidos deben practicarse siempre desde el respeto mutuo:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Nunca presiones a nadie para participar en estas prácticas.</li>
                <li>Respeta los límites de tu pareja, incluso si cambian durante la sesión.</li>
                <li>Recuerda que el consentimiento puede retirarse en cualquier momento.</li>
              </ul>
              
              <p>En la comunidad BDSM de Madrid, cada vez son más las personas que exploran los juegos con fluidos como una forma de profundizar en su conexión y dinámica de poder. Como con cualquier práctica BDSM, la comunicación abierta, el consentimiento entusiasta y la seguridad son los pilares sobre los que construir experiencias placenteras y significativas.</p>
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
                <h3 className="font-semibold text-lg mb-2">Técnicas de Oral: Deepthroat y Follada de Garganta</h3>
                <p className="text-muted-foreground text-sm mb-4">Domina el arte del sexo oral con técnicas avanzadas de deepthroat y follada de garganta para llevar el placer a nuevas alturas.</p>
                <Link to="/blog/tecnicas-oral-deepthroat" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
