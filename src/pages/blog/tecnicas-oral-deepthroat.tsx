import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const blogPost = {
    id: 'tecnicas-oral-deepthroat',
    title: 'Técnicas de Oral: Deepthroat y Follada de Garganta - Guía Completa',
    excerpt: 'Domina el arte del sexo oral con técnicas avanzadas de deepthroat y follada de garganta para llevar el placer a nuevas alturas de manera segura y placentera.',
    category: 'Técnicas',
    date: '18 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/sample_bc4c3734b1634f50f91cea2b80c4a5496021b1ec.jpg',
    tags: ['oral', 'deepthroat', 'garganta profunda', 'técnicas sexuales', 'placer'],
    author: {
      name: 'Elena Morales',
      role: 'Experta en Formación BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El sexo oral es una de las formas más íntimas de conexión sexual, y el deepthroat (garganta profunda) junto con la follada de garganta representan niveles avanzados de esta práctica. Cuando se realizan con conocimiento, comunicación y cuidado, estas técnicas pueden ofrecer un placer intenso tanto para quien da como para quien recibe. Esta guía detallada te llevará a través de todo lo que necesitas saber para explorar estas prácticas de manera segura, cómoda y extremadamente placentera.'
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
              
              <h2>Entendiendo el Deepthroat y la Follada de Garganta</h2>
              <p>Antes de adentrarnos en las técnicas, es importante comprender qué son exactamente estas prácticas y qué las diferencia:</p>
              
              <h3>¿Qué es el Deepthroat?</h3>
              <p>El deepthroat (garganta profunda) se refiere a la acción de tomar todo el pene en la boca, permitiendo que la cabeza pase por la garganta. Esto requiere relajar el reflejo nauseoso y posicionar correctamente la cabeza y el cuello.</p>
              
              <h3>¿Qué es la Follada de Garganta?</h3>
              <p>La follada de garganta (o throat fucking) implica un movimiento activo, donde la persona con pene empuja hacia la garganta de su pareja, quien relaja su garganta para recibirlo. Es una práctica que requiere mucha confianza, comunicación y control por ambas partes.</p>
              
              <h2>Preparación y Seguridad</h2>
              <p>Antes de intentar estas técnicas, es fundamental prepararse adecuadamente:</p>
              
              <h3>1. Comunicación y Consentimiento</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Habla abiertamente sobre deseos, límites y expectativas.</li>
                <li>Establece señales no verbales para detenerse si es necesario (como tocar la pierna del compañero).</li>
                <li>Recuerda que el consentimiento puede retirarse en cualquier momento.</li>
              </ul>
              
              <h3>2. Higiene Básica</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Lavado adecuado de manos y genitales antes de comenzar.</li>
                <li>Considera el uso de protección si no hay total certeza sobre el estado de salud de la pareja.</li>
                <li>Evita comidas pesadas antes de practicar deepthroat para reducir las náuseas.</li>
              </ul>
              
              <h3>3. Ambiente Adecuado</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Elige un lugar cómodo donde ambas partes se sientan seguras.</li>
                <li>Tén a mano toallas, agua y cualquier otro elemento que puedas necesitar.</li>
                <li>Asegúrate de tener privacidad para no sentirte presionado/a por el tiempo o interrupciones.</li>
              </ul>
              
              <h2>Técnicas de Deepthroat</h2>
              
              <h3>1. Posición Básica</h3>
              <p>Comienza con la posición más sencilla: la persona que da el oral se acuesta boca arriba con la cabeza colgando del borde de la cama, mientras que la otra persona se para o se arrodilla frente a ella. Esta posición alinea naturalmente la garganta con la boca.</p>
              
              <h3>2. Control de la Respiración</h3>
              <p>Respira por la nariz mientras el pene está en tu boca. Practica contener la respiración brevemente mientras el pene pasa por tu garganta.</p>
              
              <h3>3. Relajación de la Garganta</h3>
              <p>Imagina que estás bostezando o abriendo la garganta como si fueras a tragar. Esto ayuda a relajar los músculos de la garganta.</p>
              
              <h3>4. Uso de las Manos</h3>
              <p>Envuelve una mano alrededor de la base del pene para controlar la profundidad y el ritmo, especialmente cuando estés aprendiendo.</p>
              
              <h3>5. Técnica de la Lengua</h3>
              <p>Mantén la lengua plana contra la parte inferior de la boca para crear un canal suave que guíe el pene hacia la garganta.</p>
              
              <h2>Técnicas de Follada de Garganta</h2>
              
              <h3>1. Comunicación Constante</h3>
              <p>Mantén una comunicación abierta durante toda la experiencia. La persona que recibe debe sentirse cómoda para indicar si necesita detenerse o cambiar de posición.</p>
              
              <h3>2. Control del Ritmo</h3>
              <p>Comienza con movimientos lentos y superficiales, aumentando gradualmente la profundidad y la velocidad según la comodidad de ambos.</p>
              
              <h3>3. Posición de Control</h3>
              <p>La persona que recibe puede agarrar las caderas de su pareja para tener control sobre la profundidad y el ritmo de la penetración.</p>
              
              <h3>4. Uso de la Saliva</h3>
              <p>Mantén mucha saliva o usa lubricante a base de agua para reducir la fricción y hacer la experiencia más cómoda.</p>
              
              <h2>Consejos para Principiantes</h2>
              
              <h3>1. Entrenamiento Progresivo</h3>
              <p>No intentes hacer deepthroat completo en el primer intento. Comienza con la punta del pene y ve avanzando gradualmente a mayor profundidad.</p>
              
              <h3>2. Ejercicios de Relajación</h3>
              <p>Practica ejercicios de respiración y relajación de la garganta cuando no estés teniendo sexo para mejorar tu control.</p>
              
              <h3>3. Juegos de Lengua</h3>
              <p>Usa la lengua para masajear el frenillo y la parte inferior del glande, que son zonas altamente sensibles.</p>
              
              <h3>4. Alterna Técnicas</h3>
              <p>Combina momentos de deepthroat con estimulación manual y oral más suave para dar descanso a la garganta.</p>
              
              <h2>Posiciones Recomendadas</h2>
              
              <h3>1. Acostado con la Cabeza Colgando</h3>
              <p>La persona que da el oral se acuesta boca arriba con la cabeza colgando del borde de la cama, permitiendo que la garganta se alinee naturalmente con la boca.</p>
              
              <h3>2. De Rodillas</h3>
              <p>La persona que da el oral se arrodilla mientras la otra persona está de pie. Esta posición permite un buen control del ángulo.</p>
              
              <h3>3. 69 con Inclinación</h3>
              <p>En posición 69, con la persona que da el oral ligeramente más abajo para que la garganta esté más alineada.</p>
              
              <h2>Soluciones a Problemas Comunes</h2>
              
              <h3>1. Reflejo Nauseoso</h3>
              <p>Practica con un cepillo de dientes en la lengua para acostumbrarte a la sensación. También puedes probar a apretar el pulgar dentro del puño cerrado.</p>
              
              <h3>2. Dolor de Mandíbula</h3>
              <p>Haz estiramientos de mandíbula antes de comenzar y toma descansos regulares.</p>
              
              <h3>3. Dificultad para Respirar</h3>
              <p>Respira por la nariz cuando el pene esté en tu boca. Si necesitas aire, retíralo suavemente y respira profundamente.</p>
              
              <h2>Consideraciones Finales</h2>
              <p>El deepthroat y la follada de garganta son habilidades que se desarrollan con el tiempo y la práctica. No te desanimes si no lo logras perfectamente en los primeros intentos. Lo más importante es que ambas personas se sientan cómodas, respetadas y disfruten de la experiencia.</p>
              
              <p>Recuerda que cada cuerpo es diferente, y lo que funciona para una pareja puede no funcionar para otra. La clave está en la comunicación abierta, la paciencia y la disposición para explorar juntos de manera segura y placentera.</p>
              
              <p>En la comunidad BDSM de Madrid, estas técnicas a menudo se practican en un contexto de confianza y respeto mutuo, donde los límites personales son siempre la máxima prioridad. Si estás interesado en aprender más, considera asistir a talleres o buscar orientación de profesionales experimentados que puedan guiarte en tu viaje de exploración sexual.</p>
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
                  Prácticas Avanzadas
                </span>
                <h3 className="font-semibold text-lg mb-2">Juegos con Fluidos Corporales</h3>
                <p className="text-muted-foreground text-sm mb-4">Explora cómo los juegos con fluidos pueden añadir una nueva dimensión de intimidad en tus prácticas BDSM, siempre desde el respeto y la seguridad.</p>
                <Link to="/blog/juegos-fluidos-corporales" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
                <h3 className="font-semibold text-lg mb-2">Entrenamiento Integral para Sumisas</h3>
                <p className="text-muted-foreground text-sm mb-4">Descubre cómo el entrenamiento estructurado puede ayudar a las sumisas a desarrollar su potencial y explorar sus límites de manera segura.</p>
                <Link to="/blog/entrenamiento-integral-sumisas" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
