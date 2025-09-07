import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image?: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

// Datos de todos los artículos del blog
const blogPosts: BlogPost[] = [
  {
    id: 'spanking-tecnicas-seguridad',
    title: 'Spanking: Técnicas y Seguridad para Explorar el Dolor Controlado en el BDSM',
    excerpt: 'Descubre cómo el spanking puede ser una forma de expresión consensual que explora el dolor controlado como medio para la intimidad y la liberación emocional en dinámicas de poder.',
    category: 'Técnicas',
    date: '24 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/spanking.jpg',
    tags: ['spanking', 'dolor controlado', 'técnicas', 'seguridad', 'BDSM'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El spanking, o azotar las nalgas, es una de las prácticas más reconocidas y malentendidas del BDSM. Lejos de ser simplemente un acto de dolor, cuando se practica de manera consensuada y segura, puede convertirse en una poderosa herramienta de conexión, liberación emocional y exploración sensorial.'
    ]
  },
  {
    id: 'psicologia-suminision-consciente',
    title: 'La Psicología de la Sumisión Consciente',
    excerpt: 'Explora los aspectos psicológicos detrás de la sumisión consciente. Descubre cómo este rol puede convertirse en un vehículo para el autoconocimiento, la confianza y el crecimiento personal.',
    category: 'Psicología',
    date: '15 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/BDSM_collar_side.jpg',
    tags: ['psicología', 'sumisión', 'autoconocimiento', 'crecimiento', 'BDSM'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'La sumisión consciente en el contexto de las relaciones de poder consensuadas es un viaje de autodescubrimiento que trasciende los estereotipos comunes. Lejos de ser una simple entrega de poder, la verdadera sumisión es un acto de profunda intencionalidad y autoconocimiento.'
    ]
  },
  {
    id: 'comunicacion-poder-relaciones-ds',
    title: 'La Comunicación de Poder en Relaciones D/s: Construyendo Confianza a Través del Diálogo',
    excerpt: 'Descubre cómo la comunicación efectiva es el pilar fundamental de las relaciones de poder consensuadas, permitiendo negociar dinámicas, establecer límites y construir una conexión profunda basada en la confianza mutua.',
    category: 'Comunicación',
    date: '14 de Agosto, 2025',
    readTime: '10 min de lectura',
    image: '/images/services/image-bdsm-limits-learn-whats-hard-soft-1.jpg',
    tags: ['comunicación', 'relaciones D/s', 'confianza', 'límites', 'negociación'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el corazón de toda relación D/s saludable y satisfactoria se encuentra una comunicación clara, honesta y continua. A diferencia de lo que podrían sugerir los estereotipos, las relaciones de poder consensuadas no se tratan de silencio y obediencia ciega, sino de diálogo abierto, negociación constante y comprensión mutua.'
    ]
  },
  {
    id: 'rituales-ceremonias-relaciones-ds',
    title: 'Rituales y Ceremonias en Relaciones D/s: Creando Significado en la Dinámica de Poder',
    excerpt: 'Explora cómo los rituales y ceremonias pueden enriquecer las relaciones de poder consensuadas, añadiendo profundidad, estructura y significado a la dinámica D/s.',
    category: 'Prácticas',
    date: '13 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/tumblr_nrr9vyJb4f1sjyuzzo1_500.jpg',
    tags: ['rituales', 'ceremonias', 'D/s', 'simbolismo', 'tradiciones'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'Los rituales y ceremonias son elementos fundamentales en muchas relaciones D/s, ya que proporcionan estructura, significado y profundidad a la dinámica de poder. Estas prácticas van más allá de lo meramente estético o simbólico; son herramientas poderosas para fortalecer el vínculo, establecer jerarquías y crear un sentido de pertenencia y propósito compartido.'
    ]
  },
  {
    id: 'degradacion-humillacion-consensuada',
    title: 'Degradación y Humillación Consensuada: Explorando los Límites del Poder en el BDSM',
    excerpt: 'Una mirada profunda a cómo la degradación y humillación consensuadas pueden convertirse en herramientas de conexión emocional y liberación en relaciones de poder saludables.',
    category: 'Psicología',
    date: '23 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/humillate.PNG',
    tags: ['degradación', 'humillación', 'consentimiento', 'poder', 'confianza'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el mundo del BDSM, la exploración de los juegos de poder a menudo nos lleva a dinámicas psicológicamente intensas, como la degradación y humillación consensuada. Estos términos pueden sonar fuertes y, fuera de contexto, negativos. Sin embargo, dentro de una relación segura y basada en el consenso, estas prácticas son una forma poderosa de explorar la vulnerabilidad, la confianza y la liberación de la vergüenza. El arte de la humillación consensuada no se trata de dañar, sino de liberar y de profundizar la intimidad a través de la entrega.'
    ]
  },
  {
    id: 'cnc-consentimiento-no-consensuado',
    title: 'CNC (Consentimiento No Consensuado): Entendiendo la Complejidad del Juego de Poder Extremo',
    excerpt: 'Una guía detallada sobre el CNC, una de las prácticas más complejas y malentendidas dentro del BDSM, y cómo practicarla de manera ética y segura.',
    category: 'Técnicas Avanzadas',
    date: '22 de Agosto, 2025',
    readTime: '10 min de lectura',
    image: '/images/services/bdsm-il-piacere-di-potere.jpg',
    tags: ['CNC', 'consentimiento', 'juego de poder', 'seguridad', 'límites'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El Consentimiento No Consensuado (CNC) es quizás una de las prácticas más complejas y malentendidas dentro del BDSM. A primera vista, parece una contradicción: ¿cómo puede haber consentimiento en algo que se define como no consensuado? La respuesta radica en comprender que el CNC es, en realidad, un juego de roles cuidadosamente negociado donde el consentimiento está implícito, aunque la dinámica simule lo contrario. Es una forma de explorar fantasías de pérdida de control en un entorno seguro, respetuoso y, sobre todo, acordado de antemano.'
    ]
  },
  {
    id: 'taller-cuerda-nudos',
    title: 'Taller de Cuerda y Nudos: Descubriendo el Arte del Bondage y la Conexión en las Relaciones BDSM',
    excerpt: 'Sumérgete en el arte del bondage y los nudos como una forma de conexión íntima. Aprende sobre las diferencias entre bondage y shibari, y cómo estas prácticas pueden fortalecer la confianza en las relaciones D/s.',
    category: 'Talleres',
    date: '18 de Agosto, 2025',
    readTime: '7 min de lectura',
    image: '/images/services/IMG_1255-1024x575.jpg',
    tags: ['bondage', 'nudos', 'shibari', 'taller'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el fascinante mundo del BDSM, pocas prácticas son tan visualmente impactantes y emocionalmente intensas como el arte de las cuerdas. Ya sea que lo conozcas como bondage, shibari o kinbaku, el uso de cuerdas para atar, inmovilizar o decorar el cuerpo humano es una forma de arte ancestral que ha encontrado un hogar en la comunidad BDSM moderna. En este artículo, exploraremos los fundamentos de los talleres de cuerda y nudos, su importancia en las relaciones D/s y cómo pueden enriquecer tu vida íntima.'
    ]
  },
  {
    id: 'tecnicas-oral-deepthroat',
    title: 'Técnicas de Oral: Deepthroat y Follada de Garganta - Guía Completa',
    excerpt: 'Domina el arte del sexo oral con técnicas avanzadas de deepthroat y follada de garganta para llevar el placer a nuevas alturas de manera segura y placentera.',
    category: 'Técnicas',
    date: '18 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/sample_bc4c3734b1634f50f91cea2b80c4a5496021b1ec.jpg',
    tags: ['oral', 'deepthroat', 'garganta profunda', 'técnicas sexuales', 'placer'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El sexo oral es una de las formas más íntimas de conexión sexual, y el deepthroat (garganta profunda) junto con la follada de garganta representan niveles avanzados de esta práctica. Cuando se realizan con conocimiento, comunicación y cuidado, estas técnicas pueden ofrecer un placer intenso tanto para quien da como para quien recibe. Esta guía detallada te llevará a través de todo lo que necesitas saber para explorar estas prácticas de manera segura, cómoda y extremadamente placentera.'
    ]
  },
  {
    id: 'rol-instructor-sumisas',
    title: 'El Rol del Instructor de Sumisas: Tu Guía para una Sumisión Segura y Empoderadora',
    excerpt: 'Descubre cómo un instructor de sumisas puede ser tu guía en el viaje hacia una sumisión consciente y segura. Aprende sobre los beneficios de la mentoría profesional en BDSM.',
    category: 'Mentoría',
    date: '18 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/blog-bondage-kink-habit.jpg',
    tags: ['instructor', 'mentoría', 'seguridad', 'BDSM'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El rol de un instructor de sumisas es uno de los más importantes y, a menudo, incomprendidos en la comunidad BDSM. No se trata de un simple maestro o guía, sino de un facilitador que ayuda a las personas a explorar su sumisión de manera segura, informada y empoderadora. En este artículo, exploraremos en profundidad qué hace un instructor de sumisas, por qué su rol es tan valioso y cómo puede ayudarte en tu viaje personal de sumisión.'
    ]
  },
  {
    id: 'protocolo-bdsm-etiqueta',
    title: 'El Protocolo BDSM y la Etiqueta D/s: Pilares de una Relación de Dominación y Sumisión Respetuosa',
    excerpt: 'Descubre cómo el protocolo BDSM y la etiqueta D/s son fundamentales para relaciones de poder saludables. Aprende sobre comunicación, límites y el verdadero significado del intercambio de poder consensuado.',
    category: 'Educación',
    date: '21 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/image-bdsm-limits-learn-whats-hard-soft-1.jpg',
    tags: ['protocolo', 'etiqueta', 'D/s', 'BDSM', 'relaciones de poder'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el mundo del BDSM y las relaciones de poder consensuadas, el protocolo y la etiqueta son mucho más que simples reglas de comportamiento. Son los cimientos sobre los que se construye la confianza, el respeto y la seguridad en dinámicas de Dominación y sumisión (D/s). Este artículo explora la importancia de estos elementos y cómo pueden enriquecer tus experiencias BDSM.'
    ]
  },
  {
    id: 'petplay-juego-mascotas',
    title: 'Petplay: Explorando la Conexión y la Confianza a través del Juego de Roles con Mascotas',
    excerpt: 'Sumérgete en el mundo del petplay, una práctica del BDSM donde el juego de roles con mascotas se convierte en una poderosa herramienta de conexión emocional y exploración de la dinámica de poder.',
    category: 'Juegos de Rol',
    date: '21 de Agosto, 2025',
    readTime: '7 min de lectura',
    image: '/images/services/shiba.jpg',
    tags: ['petplay', 'juego de roles', 'mascotas', 'confianza', 'BDSM'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El petplay, también conocido como animal roleplay, es una práctica dentro del BDSM donde los participantes adoptan roles de mascotas y dueños. Esta forma de juego de roles puede variar desde lo lúdico y juguetón hasta lo profundamente psicológico, ofreciendo una amplia gama de experiencias para quienes lo practican. En este artículo, exploraremos los diferentes aspectos del petplay, sus beneficios y cómo comenzar de manera segura.'
    ]
  },
  {
    id: 'juegos-fluidos-corporales',
    title: 'Juegos con Fluidos Corporales: Explorando la Intimidad Líquida en el BDSM',
    excerpt: 'Descubre cómo los juegos con fluidos corporales pueden añadir una nueva dimensión de intimidad y sumisión en tus prácticas BDSM, siempre desde el respeto y la seguridad.',
    category: 'Prácticas Avanzadas',
    date: '19 de Agosto, 2025',
    readTime: '7 min de lectura',
    image: '/images/services/que-es-el-bdsm-750x400.jpg',
    tags: ['fluidos', 'saliva', 'semen', 'orina', 'golden shower', 'BDSM', 'juegos eróticos'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'Los juegos con fluidos corporales son una de las prácticas más íntimas y tabú dentro del BDSM. Aunque pueden no ser para todo el mundo, para quienes los disfrutan, ofrecen una forma única de conexión, sumisión y placer. En este artículo, exploraremos los diferentes tipos de juegos con fluidos, consideraciones de seguridad y cómo incorporarlos de manera consensuada y satisfactoria en tus prácticas BDSM.'
    ]
  },
  {
    id: 'iniciacion-rol-suminision',
    title: 'Iniciación al Rol de Sumisión: Un Viaje de Autoconocimiento y Crecimiento Personal en las Relaciones D/s',
    excerpt: 'Explora los primeros pasos en el camino de la sumisión consciente. Descubre cómo este rol puede convertirse en una poderosa herramienta de autodescubrimiento y crecimiento personal en el BDSM.',
    category: 'Formación',
    date: '20 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/BDSM_collar_side.jpg',
    tags: ['iniciación', 'sumisión', 'crecimiento personal', 'D/s', 'BDSM'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'La iniciación en el rol de sumisión es un viaje personal único que combina autodescubrimiento, confianza y crecimiento. A diferencia de lo que podrían sugerir los estereotipos, la sumisión en el contexto del BDSM no se trata de debilidad o falta de carácter, sino de una elección consciente de entrega y confianza. En este artículo, exploraremos los aspectos fundamentales de la iniciación en la sumisión y cómo este viaje puede transformar tu vida de maneras inesperadas.'
    ]
  },
  {
    id: 'formador-sumisas',
    title: 'El Papel del Formador de Sumisas: Tu Guía Hacia el Empoderamiento y la Entrega',
    excerpt: 'Descubre cómo un formador de sumisas puede guiarte en tu viaje de autodescubrimiento y crecimiento en el BDSM. Aprende sobre los beneficios de la formación profesional y el empoderamiento a través de la sumisión consciente.',
    category: 'Formación',
    date: '19 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/placeholder.jpg',
    tags: ['formación', 'sumisión', 'BDSM', 'empoderamiento', 'mentoría'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el mundo del BDSM, la figura del formador de sumisas juega un papel fundamental como guía y mentor en el viaje de autodescubrimiento y crecimiento personal. A diferencia de lo que algunos puedan pensar, un formador de sumisas no es un simple instructor, sino un facilitador que acompaña a sus alumnos en un proceso de aprendizaje profundo y transformador. En este artículo, exploraremos en detalle qué hace un formador de sumisas, por qué su rol es tan valioso y cómo puede ayudarte a navegar el complejo pero gratificante camino de la sumisión consciente.'
    ]
  },
  {
    id: 'entrenamiento-sumisas',
    title: 'Entrenamiento de Sumisas: Una Guía para el Crecimiento Personal en las Relaciones D/s',
    excerpt: 'El entrenamiento de sumisas va más allá de la obediencia. Descubre cómo este proceso puede convertirse en un viaje de empoderamiento, disciplina personal y desarrollo de confianza mutua.',
    category: 'Entrenamiento',
    date: '19 de Agosto, 2025',
    readTime: '10 min de lectura',
    image: '/images/services/submission-bdsm.jpg',
    tags: ['entrenamiento', 'disciplina', 'crecimiento', 'D/s'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El entrenamiento de sumisas es un concepto que a menudo se malinterpreta en el mundo del BDSM. Para quienes están fuera de estas prácticas, puede parecer simplemente un conjunto de reglas para seguir ciegamente. Sin embargo, el verdadero entrenamiento de una sumisa es un viaje profundo de autodescubrimiento, crecimiento personal y desarrollo de habilidades que van mucho más allá de la mera obediencia. En este artículo, exploraremos los aspectos fundamentales del entrenamiento de sumisas y cómo puede convertirse en una experiencia transformadora.'
    ]
  },
  {
    id: 'entrenamiento-integral-sumisas',
    title: 'Entrenamiento Integral para Sumisas: Un Viaje de Crecimiento y Entrega',
    excerpt: 'Descubre cómo el entrenamiento estructurado puede ayudar a las sumisas a desarrollar su potencial, explorar sus límites y profundizar en su sumisión de manera segura y satisfactoria.',
    category: 'Formación',
    date: '20 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/placeholder.jpg',
    tags: ['entrenamiento', 'sumisas', 'formación', 'crecimiento', 'BDSM'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El entrenamiento integral para sumisas es un proceso profundo y transformador que va mucho más allá de aprender a seguir órdenes. Es un viaje de autodescubrimiento, crecimiento personal y desarrollo de habilidades que permite a las sumisas explorar su potencial y profundizar en su sumisión de manera segura, consciente y satisfactoria. En este artículo, exploraremos los componentes clave de un entrenamiento integral y cómo puede enriquecer tu experiencia en el BDSM.'
    ]
  },
  {
    id: 'psicologia-suminision-consciente',
    title: 'La Psicología de la Sumisión Consciente',
    excerpt: 'Explora los aspectos psicológicos detrás de la sumisión consciente. Descubre cómo este rol puede convertirse en un vehículo para el autoconocimiento, la confianza y el crecimiento personal.',
    category: 'Psicología',
    date: '15 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/BDSM_collar_side.jpg',
    tags: ['psicología', 'sumisión', 'autoconocimiento', 'crecimiento', 'BDSM'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'La sumisión consciente en el contexto de las relaciones de poder consensuadas es un viaje de autodescubrimiento que trasciende los estereotipos comunes. Lejos de ser una simple entrega de poder, la verdadera sumisión es un acto de profunda intencionalidad y autoconocimiento.'
    ]
  },
  {
    id: 'comunicacion-poder-relaciones',
    title: 'La Comunicación de Poder en Relaciones D/s',
    excerpt: 'La comunicación efectiva es la base de cualquier relación D/s saludable. Aprende técnicas para negociar límites, expresar necesidades y construir una dinámica de poder basada en la confianza y el respeto mutuo.',
    category: 'Comunicación',
    date: '14 de Agosto, 2025',
    readTime: '8 min de lectura',
    image: '/images/services/image-bdsm-limits-learn-whats-hard-soft-1.jpg',
    tags: ['comunicación', 'límites', 'confianza', 'D/s', 'BDSM'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el corazón de toda relación D/s saludable y satisfactoria se encuentra una comunicación clara, honesta y continua. A diferencia de lo que podrían sugerir los estereotipos, las relaciones de poder consensuadas no se tratan de silencio y obediencia ciega, sino de diálogo abierto, negociación constante y comprensión mutua.'
    ]
  },
  {
    id: 'rituales-ceremonias',
    title: 'Rituales y Ceremonias en Relaciones D/s',
    excerpt: 'Descubre cómo los rituales y ceremonias pueden enriquecer tu relación D/s. Desde pequeños gestos cotidianos hasta ceremonias formales, estas prácticas fortalecen el vínculo y la conexión emocional en la dinámica de poder.',
    category: 'Relaciones',
    date: '13 de Agosto, 2025',
    readTime: '7 min de lectura',
    image: '/images/services/tumblr_nrr9vyJb4f1sjyuzzo1_500.jpg',
    tags: ['rituales', 'ceremonias', 'tradiciones', 'D/s', 'BDSM'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'Los rituales y ceremonias son elementos fundamentales en muchas relaciones D/s, ya que proporcionan estructura, significado y profundidad a la dinámica de poder. Estas prácticas van más allá de lo meramente estético o simbólico; son herramientas poderosas para fortalecer el vínculo, establecer jerarquías y crear un sentido de pertenencia y propósito compartido.'
    ]
  },
  {
    id: 'degradacion-humillacion-consensuada',
    title: 'Degradación y Humillación Consensuada: Explorando los Límites del Poder en el BDSM',
    excerpt: 'Una mirada profunda a cómo la degradación y humillación consensuadas pueden convertirse en herramientas de conexión emocional y liberación en relaciones de poder saludables.',
    category: 'Psicología',
    date: '23 de Agosto, 2025',
    readTime: '9 min de lectura',
    image: '/images/services/humillate.PNG',
    tags: ['degradación', 'humillación', 'consentimiento', 'poder', 'confianza'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'En el mundo del BDSM, la exploración de los juegos de poder a menudo nos lleva a dinámicas psicológicamente intensas, como la degradación y humillación consensuada. Estos términos pueden sonar fuertes y, fuera de contexto, negativos. Sin embargo, dentro de una relación segura y basada en el consenso, estas prácticas son una forma poderosa de explorar la vulnerabilidad, la confianza y la liberación de la vergüenza. El arte de la humillación consensuada no se trata de dañar, sino de liberar y de profundizar la intimidad a través de la entrega.'
    ]
  },
  {
    id: 'cnc-consentimiento-no-consensuado',
    title: 'CNC (Consentimiento No Consensuado): Entendiendo la Complejidad del Juego de Poder Extremo',
    excerpt: 'Una guía detallada sobre el CNC, una de las prácticas más complejas y malentendidas dentro del BDSM, y cómo practicarla de manera ética y segura.',
    category: 'Técnicas Avanzadas',
    date: '22 de Agosto, 2025',
    readTime: '10 min de lectura',
    image: '/images/services/bdsm-il-piacere-di-potere.jpg',
    tags: ['CNC', 'consentimiento', 'juego de poder', 'seguridad', 'límites'],
    author: {
      name: 'Oscar Mártinez',
      role: 'Experto en Formación y tutelamiento en BDSM',
      avatar: '/images/placeholder-avatar.jpg'
    },
    content: [
      'El Consentimiento No Consensuado (CNC) es quizás una de las prácticas más complejas y malentendidas dentro del BDSM. A primera vista, parece una contradicción: ¿cómo puede haber consentimiento en algo que se define como no consensuado? La respuesta radica en comprender que el CNC es, en realidad, un juego de roles cuidadosamente negociado donde el consentimiento está implícito, aunque la dinámica simule lo contrario. Es una forma de explorar fantasías de pérdida de control en un entorno seguro, respetuoso y, sobre todo, acordado de antemano.'
    ]
  }
];

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Scroll to top when the blog post changes
    window.scrollTo(0, 0);
    
    // Find the blog post with the matching ID
    const post = blogPosts.find(post => post.id === id);
    if (post) {
      setBlogPost(post);
      // Find related posts (excluding the current one)
      const related = blogPosts
        .filter(p => p.id !== id && p.category === post.category)
        .slice(0, 2);
      setRelatedPosts(related);
    }
  }, [id]);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Artículo no encontrado</h2>
            <Link to="/blog" className="text-primary hover:underline">
              Volver al blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
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
                    <time dateTime="2025-08-17">{blogPost.date}</time>
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
              
              <h2>¿Qué es una Academia de Sumisión?</h2>
              <p>Una academia de sumisas es un espacio formativo donde las personas interesadas en la sumisión pueden aprender, crecer y desarrollarse en un entorno seguro y respetuoso. A diferencia de lo que algunos puedan imaginar, no se trata de un lugar de adoctrinamiento, sino de un espacio donde se fomenta la exploración consciente de la sumisión como elección personal.</p>
              
              <h2>El Proceso de Formación de Sumisas</h2>
              <p>La formación en una escuela de sumisas abarca múltiples aspectos esenciales para el desarrollo de una sumisión consciente y satisfactoria:</p>
              
              <ul>
                <li><strong>Autoconocimiento:</strong> Comprender los propios límites, deseos y motivaciones es el primer paso en cualquier viaje de sumisión.</li>
                <li><strong>Seguridad:</strong> Aprender sobre prácticas seguras, consentimiento informado y gestión de riesgos es fundamental.</li>
                <li><strong>Protocolos:</strong> Conocer diferentes estilos y protocolos de sumisión ayuda a encontrar el propio camino.</li>
                <li><strong>Comunicación:</strong> Desarrollar habilidades para expresar necesidades, límites y deseos de manera clara y asertiva.</li>
                <li><strong>Crecimiento personal:</strong> La sumisión consciente puede ser una poderosa herramienta para el desarrollo personal y la autoestima.</li>
              </ul>
              
              <h2>Beneficios de una Formación Estructurada</h2>
              <p>Optar por una formación guiada en una academia de sumisión ofrece numerosas ventajas:</p>
              
              <ul>
                <li>Acceso a mentores experimentados que pueden guiar el proceso con conocimiento y sensibilidad.</li>
                <li>Estructura y seguimiento del progreso personal, asegurando un desarrollo equilibrado.</li>
                <li>Comunidad de apoyo con personas en situaciones similares, fomentando el intercambio de experiencias.</li>
                <li>Recursos educativos de calidad y actualizados sobre prácticas seguras y éticas.</li>
                <li>Espacio seguro para hacer preguntas y resolver dudas sin juicios.</li>
              </ul>
              
              <h2>¿Es para Mí la Formación en una Academia de Sumisas?</h2>
              <p>La formación en sumisión puede ser beneficiosa si:</p>
              
              <ul>
                <li>Sientes curiosidad por la sumisión pero no sabes por dónde empezar.</li>
                <li>Buscas un enfoque estructurado para tu desarrollo como sumisa.</li>
                <li>Deseas conectar con una comunidad de personas con intereses similares.</li>
                <li>Quieres explorar tu sumisión de manera segura y consensuada.</li>
                <li>Buscas herramientas para mejorar la comunicación en tus dinámicas de poder.</li>
              </ul>
              
              <h2>Conclusión</h2>
              <p>La formación en una academia de sumisas va más allá de aprender técnicas; es un viaje de autodescubrimiento y empoderamiento. Al elegir este camino, estás dando el primer paso hacia una relación más consciente y satisfactoria con tu propia sumisión.</p>
              
              <p>¿Estás lista para comenzar tu viaje? Explora nuestros programas de formación y descubre cómo podemos guiarte en este apasionante camino de crecimiento personal y sumisión consciente.</p>
              
              <div className="mt-12 text-center">
                <Link 
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    // Navigate to home first
                    window.location.href = '/';
                    // After navigation completes, scroll to contact section
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors cursor-pointer"
                >
                  Contáctame para más información
                </Link>
                <p className="mt-3 text-sm text-muted-foreground">
                  ¿Tienes preguntas? Estoy aquí para ayudarte en tu viaje
                </p>
              </div>
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
                  Iniciación
                </span>
                <h3 className="font-semibold text-lg mb-2">Primeros Pasos en el BDSM: Guía para Principiantes</h3>
                <p className="text-muted-foreground text-sm mb-4">Descubre los conceptos básicos para comenzar tu viaje en el BDSM de manera segura y consciente.</p>
                <Link to="#" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
                <Link to="#" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
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
      </main>
    </div>
  );
};

export default BlogPostPage;
