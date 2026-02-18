export default {
  global: {
    Name:
      'Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
    Description:
      'Los aceites esenciales de plantas aromáticas son compuestos volátiles naturales con propiedades aromáticas y funcionales. Su caracterización permite identificar su origen, composición y calidad, mientras que la evaluación olfativa analiza la intensidad y el perfil del aroma. Estas características hacen posible su aplicación en cosmética, perfumería, industria alimentaria, odontología y productos de aseo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Propiedades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Propiedades farmacológicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Caracterización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Evaluación olfativa de los aceites esenciales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Usos farmacológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Usos en la odontología',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Usos en la industria cosmética y de la perfumería',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Usos en la industria del jabón y de los ambientadores',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Usos en la industria alimentaria y de los licores',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Usos en la industria veterinaria',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Usos en la agricultura',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aceites esenciales',
      significado:
        'Sustancias volátiles naturales de plantas aromáticas con propiedades aromáticas y funcionales.',
    },
    {
      termino: 'Aromaterapia',
      significado:
        'Aprovechamiento de las propiedades farmacológicas de los aceites esenciales.',
    },
    {
      termino: 'Evaluación olfativa',
      significado:
        'Proceso de análisis de la intensidad y el perfil del aroma realizado por expertos denominados “narices”.',
    },
    {
      termino: 'Identificación taxonómica',
      significado:
        'Nombre botánico universal de una planta, conformado por el género y la especie, que no varía entre regiones.',
    },
    {
      termino: 'Propiedades farmacológicas',
      significado:
        'Efectos biológicos de los aceites esenciales, como acción antimicrobiana, antiinflamatoria, antioxidante o analgésica.',
    },
    {
      termino: 'Quimiotipo',
      significado:
        'Clasificación química que identifica la molécula predominante en un aceite esencial puro.',
    },
    {
      termino: 'Uso terapéutico',
      significado:
        'Aplicación de los aceites esenciales con fines preventivos o complementarios en el cuidado de la salud.',
    },
  ],
  complementario: [],
  referencias: [
    {
      referencia:
        'González Moreno, B. J., Piña Barrera, A. M., Pérez López, L. A., Galindo Rodríguez, S. A., & Álvarez Román, R. (2022). Aceites esenciales de origen natural: Características químicas, técnicas de extracción y potencial aplicación biológica. Biología y Sociedad, 5(10), 20-29.',
    },
    {
      referencia:
        'Muñoz Embid, J. Estudio físico-químico de mezclas de aceites esenciales.',
    },
    {
      referencia:
        'Padrini, F., & Lucheroni, M. T. (2025). Aceites esenciales. Parkstone International.',
    },
    {
      referencia:
        'Ríos, M. A. C., & Vargas, E. B. A. (2023). Aceites esenciales de Citrus limon, Piper aduncum y Mentha spicata: Propiedades antioxidantes y aplicaciones específicas en la industria. TAYACAJA, 6(2), 79-86.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Eduardo Orozco Osorio',
          cargo: 'Desarrollador de contenidos ',
          centro: 'Centro para la Formación Cafetera - Regional Caldas',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
