interface Service {
  id: string;
  title: string;
  description: string;
  keywords: string;
  duration: string;
  image: string;
  sessionFormat: string;
  programDuration: string;
  location: string;
  testimonials: string[];
  objectives: string[];
  details: {
    overview: string;
    benefits: string[];
    whatYouWillLearn: string[];
    whoIsThisFor: string[];
  };
}

export const services: Service[] = [
  {
    id: 'protocolo-etiqueta',
    title: 'Protocolo y Etiqueta en las Relaciones D/s',
    description: 'Un servicio educativo y protocolario que se enfoca en las reglas no escritas y la estructura de una relación de Dominación/Sumisión (D/s). Aprende los fundamentos del liderazgo responsable.',
    keywords: 'protocolo BDSM, etiqueta D/s, relaciones Amo/sumisa, dominación masculina',
    duration: '10 sesiones presenciales',
    image: '/images/services/bdsm-il-piacere-di-potere.jpg',
    sessionFormat: 'Sesiones individuales y privadas',
    programDuration: 'De 2 a 3 semanas, con sesiones de hasta 4 horas según experiencia y necesidad',
    location: 'Madrid',
    testimonials: [
      'Excelente servicio, me ayudó a entender mejor la dinámica D/s de manera segura y profesional.',
      'Las sesiones personalizadas me permitieron avanzar a mi propio ritmo.'
    ],
    objectives: [
      'Comprender los fundamentos del protocolo y etiqueta en relaciones D/s',
      'Desarrollar habilidades de liderazgo responsable',
      'Establecer dinámicas de poder saludables y consensuadas'
    ],
    details: {
      overview: 'Este programa te sumergirá en el mundo del protocolo y la etiqueta en las relaciones D/s, proporcionándote las herramientas necesarias para establecer una dinámica de poder clara, respetuosa y satisfactoria para ambas partes.',
      benefits: [
        'Establecer una base sólida para relaciones D/s saludables',
        'Aprender a comunicar expectativas y límites de manera efectiva',
        'Desarrollar confianza y respeto mutuo en la dinámica de poder',
        'Crear rituales significativos que fortalezcan la conexión D/s'
      ],
      whatYouWillLearn: [
        'Los fundamentos del protocolo D/s y su importancia',
        'Cómo establecer reglas y expectativas claras',
        'Técnicas de comunicación efectiva en dinámicas de poder',
        'Rituales diarios y su impacto en la conexión D/s',
        'Manejo de situaciones desafiantes en la dinámica'
      ],
      whoIsThisFor: [
        'Sumisas que buscan comprender mejor su rol en la dinámica D/s',
        'Parejas que desean establecer o mejorar su relación de poder',
        'Personas nuevas en el estilo de vida BDSM',
        'Practicantes experimentados que buscan refinar sus habilidades'
      ]
    }
  },
  {
    id: 'iniciacion-rol-dominante',
    title: 'Iniciación al Rol de Sumisión',
    description: 'Curso completo para quienes desean desarrollar su rol como sumisas. Aprende técnicas de comunicación asertiva, entrega y construcción de confianza en relaciones D/s.',
    keywords: 'sumisión, entrenamiento sumisa, curso BDSM, relaciones D/s',
    duration: '8 sesiones presenciales',
    image: '/images/services/que-es-el-bdsm-750x400.jpg',
    sessionFormat: 'Sesiones individuales y privadas',
    programDuration: 'De 2 a 3 semanas, con sesiones de hasta 4 horas según experiencia y necesidad',
    location: 'Madrid',
    testimonials: [
      'Excelente introducción al rol de sumisión, muy recomendable para principiantes.',
      'Las sesiones prácticas fueron especialmente útiles para ganar confianza.'
    ],
    objectives: [
      'Comprender los fundamentos del rol de sumisión',
      'Desarrollar habilidades de comunicación asertiva',
      'Aprender a establecer y mantener límites saludables'
    ],
    details: {
      overview: 'Este programa está diseñado para guiarte en el descubrimiento y desarrollo de tu sumisión, proporcionándote las herramientas necesarias para explorar este rol de manera segura, consciente y satisfactoria.',
      benefits: [
        'Comprender y abrazar tu sumisión de manera saludable',
 'Desarrollar habilidades de comunicación asertiva',
        'Aprender a establecer y mantener límites claros',
        'Construir confianza en la dinámica D/s'
      ],
      whatYouWillLearn: [
        'Los fundamentos de la sumisión consciente',
        'Técnicas de comunicación efectiva en dinámicas de poder',
        'Cómo establecer y negociar límites',
        'El arte de la entrega y la obediencia',
        'Manejo de emociones en la dinámica sumisa'
      ],
      whoIsThisFor: [
        'Personas que desean explorar su lado sumisa',
        'Sumisas principiantes que buscan orientación',
        'Parejas que desean establecer una dinámica D/s',
        'Quienes buscan comprender mejor el rol sumisa en BDSM'
      ]
    }
  },
  {
    id: 'entrenamiento-sumisas',
    title: 'Entrenamiento de Sumisas: Guía para el Crecimiento Personal',
    description: 'Programa especializado para quienes desean perfeccionar el arte de la sumisión. Técnicas de desarrollo personal, autoconocimiento y construcción de una sumisión consciente.',
    keywords: 'entrenamiento sumisa, desarrollo personal, crecimiento personal, relaciones D/s',
    duration: '12 sesiones especializadas',
    image: '/images/services/BDSM_collar_side.jpg',
    sessionFormat: 'Sesiones individuales y privadas',
    programDuration: 'De 2 a 3 semanas, con sesiones de hasta 4 horas según experiencia y necesidad',
    location: 'Madrid',
    testimonials: [
      'El programa transformó mi comprensión de la sumisión consciente.',
      'Las técnicas de autoconocimiento fueron invaluables para mi crecimiento personal.'
    ],
    objectives: [
      'Perfeccionar las habilidades de sumisión',
      'Desarrollar autoconocimiento y crecimiento personal',
      'Construir una práctica de sumisión consciente y significativa'
    ],
    details: {
      overview: 'Este programa integral está diseñado para ayudarte a desarrollar tu sumisión de manera profunda y significativa, enfocándote en el crecimiento personal y la construcción de una dinámica D/s saludable.',
      benefits: [
        'Desarrollar una comprensión más profunda de tu sumisión',
        'Mejorar la comunicación y autoconocimiento',
        'Aprender técnicas para mantener el equilibrio emocional',
        'Fortalecer tu confianza en el rol sumisa'
      ],
      whatYouWillLearn: [
        'Autoconocimiento y exploración de la sumisión personal',
        'Técnicas de comunicación asertiva en dinámicas de poder',
        'Manejo de emociones y conflictos',
        'Establecimiento y mantenimiento de límites saludables',
        'Crecimiento personal dentro de la dinámica D/s'
      ],
      whoIsThisFor: [
        'Sumisas que buscan profundizar en su rol',
        'Personas en proceso de autodescubrimiento D/s',
        'Quienes desean mejorar su comunicación en dinámicas de poder',
        'Individuos que buscan una sumisión más consciente y satisfactoria'
      ]
    }
  },
  {
    id: 'taller-cuerda',
    title: 'Taller de Cuerda y Nudos (Bondage)',
    description: 'Aprende las técnicas seguras de bondage y shibari. Desde nudos básicos hasta patrones avanzados, con énfasis en seguridad y conexión emocional.',
    keywords: 'taller de cuerdas, bondage, shibari, nudos BDSM, conexión',
    duration: 'Talleres intensivos de fin de semana',
    image: '/images/services/shiba.jpg',
    sessionFormat: 'Sesiones individuales y privadas',
    programDuration: 'De 2 a 3 semanas, con sesiones de hasta 4 horas según experiencia y necesidad',
    location: 'Madrid',
    testimonials: [
      'Aprendí técnicas de atado seguras y hermosas en un entorno de confianza.',
      'El enfoque en la seguridad y la conexión emocional hizo toda la diferencia.'
    ],
    objectives: [
      'Dominar técnicas seguras de atado y nudos',
      'Aprender los fundamentos del bondage y shibari',
      'Desarrollar habilidades para crear conexiones significativas a través del atado'
    ],
    details: {
      overview: 'Este taller te sumergirá en el arte del bondage, enseñándote técnicas seguras y efectivas para crear ataduras hermosas mientras priorizas la seguridad y la conexión emocional.',
      benefits: [
        'Aprender técnicas de bondage de manera segura',
        'Fortalecer la conexión con tu pareja',
        'Desarrollar habilidades prácticas de atadura',
        'Explorar la dimensión artística del shibari'
      ],
      whatYouWillLearn: [
        'Nudos básicos y su aplicación segura',
        'Técnicas de atado para diferentes partes del cuerpo',
        'Seguridad en el bondage: qué hacer y qué evitar',
        'Comunicación y conexión durante las ataduras',
        'Introducción al shibari artístico'
      ],
      whoIsThisFor: [
        'Principiantes interesados en aprender bondage seguro',
        'Parejas que desean explorar esta práctica juntas',
        'Personas interesadas en el aspecto artístico del shibari',
        'Quienes buscan añadir nuevas dimensiones a su práctica BDSM'
      ]
    }
  },
  {
    id: 'psicologia-sumision',
    title: 'Psicología de la Sumisión Consciente',
    description: 'Seminario profundo sobre los aspectos psicológicos de la sumisión. Comprende la mente sumisa, desarrolla autoconocimiento y explora la entrega de manera ética y consciente.',
    keywords: 'psicología BDSM, sumisión consciente, mente sumisa, autoconocimiento',
    duration: 'Seminario intensivo de 2 días',
    image: '/images/services/1.jpg',
    sessionFormat: 'Sesiones individuales y privadas',
    programDuration: 'De 2 a 3 semanas, con sesiones de hasta 4 horas según experiencia y necesidad',
    location: 'Madrid',
    testimonials: [
      'Una perspectiva única sobre la psicología de la sumisión que cambió mi enfoque.',
      'Las discusiones sobre ética y consentimiento fueron particularmente valiosas.'
    ],
    objectives: [
      'Explorar los aspectos psicológicos de la sumisión',
      'Desarrollar un mayor autoconocimiento y conciencia',
      'Aprender a navegar las dinámicas de poder de manera ética'
    ],
    details: {
      overview: 'Este seminario explora la complejidad psicológica de la sumisión, proporcionando herramientas para una comprensión más profunda de este rol y su impacto en las relaciones de poder consensuadas.',
      benefits: [
        'Mayor autoconocimiento y comprensión de tu sumisión',
        'Herramientas para navegar las emociones en dinámicas D/s',
        'Comprensión de los aspectos psicológicos del poder y la entrega',
        'Estrategias para mantener el equilibrio emocional'
      ],
      whatYouWillLearn: [
        'Los fundamentos psicológicos de la sumisión',
        'Cómo la mente procesa la dinámica de poder',
        'Técnicas para mantener límites saludables',
        'Manejo de emociones intensas en la dinámica D/s',
        'Estrategias para el crecimiento personal dentro del rol sumisa'
      ],
      whoIsThisFor: [
        'Sumisas que buscan profundizar en su rol',
        'Personas interesadas en la psicología del BDSM',
        'Quienes desean comprender mejor su sumisión',
        'Practicantes que buscan una base teórica sólida'
      ]
    }
  },
  {
    id: 'comunicacion-poder',
    title: 'Comunicación de Poder en Relaciones D/s',
    description: 'Curso especializado en técnicas de comunicación desde la posición sumisa. Aprende a expresar necesidades, establecer límites y mantener el intercambio de poder saludable.',
    keywords: 'comunicación sumisa, necesidades, límites, intercambio poder, liderazgo BDSM',
    duration: '6 sesiones grupales',
    image: '/images/services/submission-bdsm.jpg',
    sessionFormat: 'Sesiones individuales y privadas',
    programDuration: 'De 2 a 3 semanas, con sesiones de hasta 4 horas según experiencia y necesidad',
    location: 'Madrid',
    testimonials: [
      'Las técnicas de comunicación aprendidas mejoraron significativamente mi relación D/s.',
      'Aprender a expresar mis necesidades de manera efectiva fue transformador.'
    ],
    objectives: [
      'Dominar técnicas de comunicación efectiva en dinámicas de poder',
      'Aprender a expresar necesidades y establecer límites claros',
      'Mantener un intercambio de poder saludable y consensuado'
    ],
    details: {
      overview: 'Este curso se enfoca en desarrollar habilidades de comunicación efectiva para sumisas, permitiéndote expresar tus necesidades, deseos y límites de manera clara y asertiva dentro de la dinámica D/s.',
      benefits: [
        'Mejorar la comunicación en tu dinámica D/s',
        'Aprender a expresar necesidades y deseos de manera efectiva',
        'Desarrollar habilidades de negociación de límites',
        'Fortalecer la confianza en la comunicación de poder'
      ],
      whatYouWillLearn: [
        'Técnicas de comunicación asertiva para sumisas',
        'Cómo expresar necesidades y deseos de manera efectiva',
        'Estrategias para negociar y mantener límites',
        'Comunicación durante el juego de poder',
        'Manejo de conflictos en dinámicas D/s'
      ],
      whoIsThisFor: [
        'Sumisas que desean mejorar su comunicación',
        'Personas nuevas en dinámicas de poder',
        'Quienes buscan establecer límites más claros',
        'Parejas que desean mejorar su conexión D/s'
      ]
    }
  },
  {
    id: 'rituales-ceremonias',
    title: 'Rituales y Ceremonias en Relaciones D/s',
    description: 'Aprende a crear y participar en rituales significativos que fortalezcan la dinámica D/s. Desde ceremonias de entrega hasta rituales diarios de conexión y sumisión.',
    keywords: 'rituales BDSM, ceremonias D/s, dinámicas poder, tradiciones BDSM',
    duration: 'Taller especializado de día completo',
    image: '/images/services/image-bdsm-limits-learn-whats-hard-soft-1.jpg',
    sessionFormat: 'Sesiones individuales y privadas',
    programDuration: 'De 2 a 3 semanas, con sesiones de hasta 4 horas según experiencia y necesidad',
    location: 'Madrid',
    testimonials: [
      'Los rituales que aprendí añadieron profundidad y significado a mi práctica D/s.',
      'La ceremonia de entrega fue una experiencia verdaderamente transformadora.'
    ],
    objectives: [
      'Aprender a crear rituales significativos en relaciones D/s',
      'Explorar diferentes tipos de ceremonias y su significado',
      'Fortalecer la conexión a través de prácticas ritualizadas'
    ],
    details: {
      overview: 'Este taller te guiará a través de la creación e implementación de rituales significativos que pueden enriquecer tu experiencia D/s, proporcionando estructura, significado y profundidad a tu dinámica de poder.',
      benefits: [
        'Añadir profundidad y significado a tu dinámica D/s',
        'Crear momentos de conexión y entrega significativos',
        'Establecer rutinas que refuercen los roles de poder',
        'Desarrollar prácticas personales que fortalezcan tu sumisión'
      ],
      whatYouWillLearn: [
        'El propósito y significado de los rituales en D/s',
        'Cómo diseñar rituales personales significativos',
        'Diferentes tipos de rituales y ceremonias D/s',
        'Adaptar rituales a tu estilo de vida y dinámica',
        'Mantener el significado de los rituales con el tiempo'
      ],
      whoIsThisFor: [
        'Sumisas que buscan profundizar su práctica',
        'Parejas que desean añadir estructura a su dinámica',
        'Personas atraídas por el aspecto ceremonial del BDSM',
        'Quienes buscan fortalecer su conexión D/s a través de rituales'
      ]
    }
  },
  {
    id: 'mentoria-personalizada',
    title: 'Mentoría Personalizada para Sumisas',
    description: 'Sesiones individuales de coaching para sumisas de todos los niveles. Resolución de situaciones específicas, desarrollo personal y perfeccionamiento de técnicas de sumisión consciente.',
    keywords: 'mentoría sumisa, coaching personalizado, asesoría BDSM, sesiones individuales',
    duration: 'Sesiones de 90 minutos',
    image: '/images/services/IMG_0736-2-300x169.jpg',
    sessionFormat: 'Sesiones individuales y privadas',
    programDuration: 'De 2 a 3 semanas, con sesiones de hasta 4 horas según experiencia y necesidad',
    location: 'Madrid',
    testimonials: [
      'La mentoría personalizada me ayudó a superar mis bloqueos personales en mi viaje de sumisión.',
      'Las estrategias específicas para mis necesidades fueron increíblemente efectivas.'
    ],
    objectives: [
      'Recibir orientación personalizada en tu viaje de sumisión',
      'Resolver situaciones específicas y desafíos personales',
      'Perfeccionar técnicas y prácticas de sumisión consciente'
    ],
    details: {
      overview: 'Este programa de mentoría personalizada está diseñado para ofrecerte orientación individualizada en tu viaje de sumisión, adaptándose a tus necesidades, preguntas y objetivos específicos en un entorno seguro y de apoyo.',
      benefits: [
        'Atención personalizada a tus necesidades específicas',
        'Orientación experta en tu viaje de sumisión',
        'Espacio seguro para explorar preguntas y desafíos',
        'Desarrollo de estrategias personalizadas para tu crecimiento'
      ],
      whatYouWillLearn: [
 'Técnicas personalizadas para tu desarrollo personal',
        'Estrategias para superar desafíos específicos',
        'Herramientas para una comunicación más efectiva',
        'Métodos para profundizar en tu sumisión',
        'Enfoques personalizados para tu dinámica D/s'
      ],
      whoIsThisFor: [
        'Sumisas que buscan orientación personalizada',
        'Personas con preguntas específicas sobre su sumisión',
        'Quienes enfrentan desafíos particulares en su dinámica D/s',
        'Individuos que prefieren un enfoque uno a uno'
      ]
    }
  },
  {
    id: 'spanking',
    title: 'Spanking: Técnicas y Seguridad',
    description: 'Aprende técnicas seguras de spanking, desde palmadas suaves hasta sesiones más intensas. Incluye calentamiento, intensidad, zonas seguras y cuidado posterior.',
    keywords: 'spanking, nalgadas, BDSM, castigo, dolor controlado',
    duration: 'Sesiones de 2 horas',
    image: '/images/services/spanking.jpg',
    sessionFormat: 'Sesiones individuales o en pareja',
    programDuration: '1-2 sesiones de 2 horas',
    location: 'Madrid',
    testimonials: [
      'Aprendí a disfrutar del spanking de manera segura y consensuada.',
      'Las técnicas de calentamiento y cuidado posterior fueron invaluables.'
    ],
    objectives: [
      'Aprender técnicas seguras de spanking',
      'Conocer las zonas seguras y de riesgo',
      'Desarrollar habilidades para sesiones placenteras y seguras'
    ],
    details: {
      overview: 'Este taller práctico te enseñará todo lo necesario para disfrutar del spanking de manera segura y consensuada, incluyendo técnicas, comunicación y cuidado posterior.',
      benefits: [
        'Técnicas para principiantes y avanzados',
        'Seguridad y primeros auxilios básicos',
        'Comunicación efectiva sobre límites',
        'Juguetes y herramientas recomendados'
      ],
      whatYouWillLearn: [
        'Técnicas básicas y avanzadas de spanking',
        'Zonas seguras y de riesgo',
        'Intensidad y lectura de señales',
        'Cuidado posterior y aftercare',
        'Juguetes y accesorios recomendados'
      ],
      whoIsThisFor: [
        'Principiantes que quieran explorar el spanking',
        'Parejas que deseen incorporar el spanking en su dinámica',
        'Personas interesadas en el BDSM de impacto',
        'Quienes buscan técnicas seguras y consensuadas'
      ]
    }
  },
  {
    id: 'degradacion-humillacion',
    title: 'Degradación y Humillación Consensuada',
    description: 'Explora el mundo de la degradación y humillación de manera segura, consensuada y ética. Aprende a establecer límites claros y a navegar este intenso aspecto del BDSM.',
    keywords: 'degradación, humillación, consenso, BDSM, juegos de poder',
    duration: '3-4 sesiones de 2 horas',
    image: '/images/services/humillate.PNG',
    sessionFormat: 'Sesiones individuales o en pareja',
    programDuration: '2-3 semanas',
    location: 'Madrid',
    testimonials: [
      'Aprendí a comunicar mis límites de manera efectiva.',
      'Las técnicas de aftercare fueron fundamentales para la experiencia.'
    ],
    objectives: [
      'Entender la degradación y humillación de manera segura',
      'Establecer límites y palabras de seguridad',
      'Practicar técnicas de aftercare especializadas'
    ],
    details: {
      overview: 'Este programa te guiará a través de la exploración segura y consensuada de la degradación y humillación, con énfasis en la comunicación, el consentimiento y el cuidado emocional.',
      benefits: [
        'Técnicas de comunicación efectiva',
        'Establecimiento de límites claros',
        'Aftercare especializado',
        'Enfoque ético y seguro'
      ],
      whatYouWillLearn: [
        'Diferentes tipos de degradación y humillación',
        'Técnicas de negociación de escenas',
        'Manejo emocional durante y después',
        'Palabras de seguridad y señales',
        'Aftercare especializado'
      ],
      whoIsThisFor: [
        'Personas interesadas en explorar este aspecto del BDSM',
        'Parejas que deseen incorporar estas prácticas',
        'Quienes buscan hacerlo de manera segura y ética',
        'Practicantes que deseen profundizar sus conocimientos'
      ]
    }
  },
  {
    id: 'cnc',
    title: 'CNC: Consentimiento No Consensuado',
    description: 'Exploración segura y ética del CNC, con énfasis en el consentimiento informado, la negociación de límites y la seguridad emocional.',
    keywords: 'CNC, consentimiento, BDSM, juegos de poder, negociación',
    duration: '4-5 sesiones de 2 horas',
    image: '/images/services/IMG_1255-1024x575.jpg',
    sessionFormat: 'Sesiones individuales o en pareja',
    programDuration: '3-4 semanas',
    location: 'Madrid',
    testimonials: [
      'La atención al consentimiento y seguridad fue excepcional.',
      'Me siento mucho más segura explorando este aspecto del BDSM.'
    ],
    objectives: [
      'Comprender los aspectos éticos del CNC',
      'Aprender técnicas de negociación de escenas',
      'Desarrollar protocolos de seguridad'
    ],
    details: {
      overview: 'Este programa te proporcionará las herramientas necesarias para explorar el CNC de manera segura, ética y consensuada, con un fuerte énfasis en la comunicación y la seguridad.',
      benefits: [
        'Comprensión profunda del consentimiento',
        'Técnicas de negociación avanzadas',
        'Protocolos de seguridad detallados',
        'Soporte emocional y aftercare'
      ],
      whatYouWillLearn: [
        'Fundamentos éticos del CNC',
        'Negociación de escenas y límites',
        'Técnicas de seguridad física y emocional',
        'Aftercare especializado',
        'Integración de la experiencia'
      ],
      whoIsThisFor: [
        'Personas interesadas en explorar el CNC',
        'Parejas que deseen incorporar estas dinámicas',
        'Practicantes experimentados que buscan profundizar',
        'Quienes valoran la seguridad y el consentimiento'
      ]
    }
  },
  {
    id: 'petplay',
    title: 'Petplay: Explorando el Juego de Mascotas',
    description: 'Sumérgete en el mundo del petplay, desde el entrenamiento básico hasta dinámicas avanzadas de dueño/mascota.',
    keywords: 'petplay, mascota, dueño, entrenamiento, BDSM',
    duration: '3-4 sesiones de 2 horas',
    image: '/images/services/tumblr_nrr9vyJb4f1sjyuzzo1_500.jpg',
    sessionFormat: 'Sesiones individuales o en pareja',
    programDuration: '2-3 semanas',
    location: 'Madrid',
    testimonials: [
      'Explorar el petplay ha añadido una nueva dimensión a nuestra relación.',
      'Las técnicas de entrenamiento fueron muy efectivas.'
    ],
    objectives: [
      'Explorar diferentes aspectos del petplay',
      'Aprender técnicas de entrenamiento',
      'Desarrollar una dinámica de dueño/mascota saludable'
    ],
    details: {
      overview: 'Este programa te guiará a través del mundo del petplay, desde los conceptos básicos hasta dinámicas más avanzadas, siempre con énfasis en el consentimiento y la seguridad.',
      benefits: [
        'Comprensión de los diferentes tipos de petplay',
        'Técnicas de entrenamiento efectivas',
        'Equipo y accesorios recomendados',
        'Cuidado y mantenimiento del equipo'
      ],
      whatYouWillLearn: [
        'Conceptos básicos del petplay',
        'Técnicas de entrenamiento',
        'Comunicación y límites',
        'Rituales y rutinas',
        'Integración en la dinámica de pareja'
      ],
      whoIsThisFor: [
        'Personas interesadas en el petplay',
        'Parejas que deseen explorar esta dinámica',
        'Quienes buscan una guía segura y ética',
        'Practicantes que deseen ampliar sus conocimientos'
      ]
    }
  },
  {
    id: 'oral-tecnicas',
    title: 'Técnicas de Oral: Deepthroat y Follada de Garganta',
    description: 'Aprende técnicas avanzadas de sexo oral, incluyendo deepthroat y follada de garganta, de manera segura y placentera.',
    keywords: 'oral, deepthroat, garganta profunda, técnicas sexuales, placer',
    duration: '2-3 sesiones de 2 horas',
    image: '/images/services/sample_bc4c3734b1634f50f91cea2b80c4a5496021b1ec.jpg',
    sessionFormat: 'Sesiones individuales o en pareja',
    programDuration: '1-2 semanas',
    location: 'Madrid',
    testimonials: [
      'Las técnicas de respiración cambiaron completamente mi experiencia.',
      'Aprendí a disfrutar del sexo oral de una manera nueva.'
    ],
    objectives: [
      'Dominar técnicas de deepthroat seguras',
      'Aprender a controlar el reflejo nauseoso',
      'Disfrutar del sexo oral de manera placentera'
    ],
    details: {
      overview: 'Este programa te enseñará técnicas avanzadas de sexo oral, con énfasis en la seguridad, el placer y la comunicación con tu pareja.',
      benefits: [
        'Técnicas de respiración',
        'Control del reflejo nauseoso',
        'Posiciones cómodas',
        'Comunicación efectiva'
      ],
      whatYouWillLearn: [
        'Técnicas básicas de calentamiento',
        'Ejercicios para el control del reflejo nauseoso',
        'Posiciones cómodas y efectivas',
        'Técnicas avanzadas de deepthroat',
        'Cuidado y recuperación'
      ],
      whoIsThisFor: [
        'Personas que deseen mejorar sus habilidades orales',
        'Quienes experimentan molestias durante el sexo oral',
        'Parejas que buscan nuevas experiencias',
        'Cualquiera interesado en técnicas de placer seguras'
      ]
    }
  },
  {
    id: 'entrenamiento-sumisa',
    title: 'Entrenamiento Integral para Sumisas',
    description: 'Programa completo de formación para sumisas que incluye control, órdenes, disciplina y castigo, con un enfoque en el crecimiento personal y la dinámica de poder consensuada.',
    keywords: 'entrenamiento, sumisa, disciplina, castigo, BDSM, dinámica de poder',
    duration: '8-10 sesiones de 2 horas',
    image: '/images/services/desayuno.jpg',
    sessionFormat: 'Sesiones individuales',
    programDuration: '4-6 semanas',
    location: 'Madrid',
    testimonials: [
      'El programa transformó mi comprensión de la sumisión.',
      'Las técnicas de disciplina han mejorado nuestra conexión.'
    ],
    objectives: [
      'Desarrollar una práctica de sumisión consciente',
      'Aprender a recibir y seguir órdenes',
      'Entender el papel del castigo en la dinámica D/s'
    ],
    details: {
      overview: 'Este programa integral está diseñado para guiarte en tu viaje de sumisión, proporcionándote las herramientas necesarias para una práctica segura, consensuada y satisfactoria.',
      benefits: [
        'Comprensión profunda de la sumisión',
        'Técnicas de comunicación efectiva',
        'Estructura y disciplina',
        'Crecimiento personal'
      ],
      whatYouWillLearn: [
        'Fundamentos de la sumisión',
        'Técnicas de obediencia',
        'Manejo del castigo y la disciplina',
        'Autocuidado y límites',
        'Integración en la vida diaria'
      ],
      whoIsThisFor: [
        'Nuevas sumisas que buscan orientación',
        'Personas que desean profundizar su sumisión',
        'Quienes buscan estructura en su práctica D/s',
        'Individuos comprometidos con su crecimiento personal'
      ]
    }
  },
  {
    id: 'juegos-fluidos',
    title: 'Juegos con Fluidos Corporales',
    description: 'Exploración segura de juegos eróticos que involucran fluidos corporales como saliva, semen y orina, con énfasis en higiene, consentimiento y placer compartido.',
    keywords: 'fluidos, saliva, semen, orina, golden shower, BDSM, juegos eróticos',
    duration: '2-3 sesiones de 2 horas',
    image: '/images/services/Captuasdasdra.PNG',
    sessionFormat: 'Sesiones individuales o en pareja',
    programDuration: '1-2 semanas',
    location: 'Madrid',
    testimonials: [
      'Aprendí a disfrutar de estos juegos de manera segura y placentera.',
      'La información sobre higiene fue muy valiosa.'
    ],
    objectives: [
      'Explorar juegos con fluidos de manera segura',
      'Aprender sobre higiene y seguridad',
      'Disfrutar de nuevas experiencias eróticas'
    ],
    details: {
      overview: 'Este programa te guiará a través de la exploración segura y consensuada de juegos eróticos que involucran fluidos corporales, con un fuerte énfasis en la higiene, la comunicación y el placer mutuo.',
      benefits: [
        'Técnicas seguras de juego con fluidos',
        'Información sobre higiene y salud',
        'Comunicación efectiva sobre límites',
        'Ideas creativas para explorar'
      ],
      whatYouWillLearn: [
        'Aspectos de seguridad e higiene',
        'Técnicas de juego con diferentes fluidos',
        'Comunicación y negociación',
        'Limpieza y cuidado posterior',
        'Integración en la vida sexual'
      ],
      whoIsThisFor: [
        'Personas curiosas sobre estos juegos',
        'Parejas que desean explorar nuevas experiencias',
        'Quienes valoran la seguridad e higiene',
        'Practicantes de BDSM que buscan ampliar sus horizontes'
      ]
    }
  }
];

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};
