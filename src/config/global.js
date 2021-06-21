export default {
  global: {
    componenteFormativo: 'Sistema moda',
    descripcionCurso:
      'Cuando se habla de sistema moda, se concluye que la moda y las tendencias permean áreas en las que todo ser humano se desenvuelve y representan el estilo de vida de un individuo y una comunidad.<br><br>La industria de la moda mueve un gran sector de la economía a nivel mundial y por ello, supone importante conocer su trascendencia y el manejo de su mercado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción al sistema moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos del diseño',
            hash: 'fundamentos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diseño dirigido al sector vestuario y moda',
            hash: 'diseno',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Esquemas de color',
            hash: 'esquemas',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Categorías de moda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Canales de distribución en el sistema moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de canales de distribución',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Retail',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos de retail',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Omnicanabilidad',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Cultura de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '¿Qué es cultura?',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Sociología de la moda',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tendencias de moda y consumo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tendencias de moda',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Observatorio de tendencias',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Mercados y usuarios de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Cliente o consumidor',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Perfiles de consumidor',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Personalidades de compra',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Universos de vestuario',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7 ',
        titulo: 'Eventos de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Historia de los eventos de moda',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Tipos de eventos de moda',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Fundamentos de mercadeo de moda',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Aniversario París. (2021). Aniversario País: Sensación Visual [Imagen 9].',
      link:
        'https://aniversario.elpais.com/las-marcas-espanolas-que-visten-al-mundo/ ',
    },
    {
      referencia: 'Bulevar. (2021). Bulevar: Súper Amplia [Imagen 4].',
      link:
        'https://bulevarst.com/18308-2/hbz-gigi-hadid-style-gallery-062019-gettyimages-1157253406/ ',
    },
    {
      referencia:
        'E M E de Mujer. (2021). E M E de Mujer: Diferencias entre Estilo y Moda [Imagen 19].',
      link: 'https://co.emedemujer.com/moda/estilo-moda-conceptos-colombia/',
    },
    {
      referencia:
        'Emprende A Conciencia. (2021). Curva de adopción de la innovación.',
      link: 'https://www.emprendeaconciencia.com/curva-adopcion-innovacion',
    },
    {
      referencia: 'Divi. (2019) Divi: La forma. [Imagen 7].',
      link: 'https://anallasa.com/arte/iris-van-herpen-disenadora-futurista/ ',
    },
    {
      referencia:
        'Dreamstime. (2015). Dreamstime: Colores Complejos [Imagen 14].',
      link:
        'https://es.dreamstime.com/stock-de-ilustraci%C3%B3n-colores-complejos-image58431200',
    },
    {
      referencia: 'E. (2018). E: Amplia. [Imagen 5].',
      link:
        'https://www.eonline.com/ar/photos/20231/el-street-style-de-gigi-hadid ',
    },
    {
      referencia: 'E. (2021). E: Ajustada [Imagen 6].',
      link: 'https://www.pinterest.com/pin/113434484346935253/',
    },
    {
      referencia:
        'Estanyol, E. Los eventos de moda en tiempos de COVID-19. COMeIN [en línea], octubre 2020, no. 103. ISSN: 1696-3296. DOI:',
      link: 'https://doi.org/10.7238/c.n103.2071 ',
    },
    {
      referencia:
        'Fashion Snoops. (s.f.). Fashion Snoops: Concepto de Moda-Biblioteca SENA.',
      link:
        'https://www.flaticon.es/icono-premium/documento_2842065?term=documento&page=1&position=16&page=1&position=16&related_id=2842065&origin=search',
    },

    {
      referencia:
        'Fashion Snoops. (s.f.). Fashion Snoops: Tendencias Moda-Sistema de Bibliotecas SENA.',
      link: 'https://www-fashionsnoops-com.bdigital.sena.edu.co/Default.aspx',
    },

    {
      referencia:
        'Fashion Snoops. (s.f.). Fashion Snoops: Universos del Vestuario-Sistema de Bibliotecas SENA.',
      link: 'https://www-fashionsnoops-com.bdigital.sena.edu.co/Default.aspx',
    },

    {
      referencia:
        'Fashion Snoops. (s.f.). Fashion Snoops: Perfil Consumidor-Sistema de Bibliotecas SENA.',
      link: 'https://www-fashionsnoops-com.bdigital.sena.edu.co/Default.aspx',
    },

    {
      referencia:
        'Fashion, Luxury &Retail. (s.f.). Fashion, Luxury &Retail La apropiación Cultural en el Ámbito de la Moda  [Imagen 18].',
      link:
        '(https://enriqueortegaburgos.com/la-apropiacion-cultural-en-el-ambito-de-la-moda/)',
    },

    {
      referencia: 'Freepik. (2021). Esquema general del color [Imagen 12].',
      link:
        'https://www.freepik.es/vector-gratis/esquema-mezcla-colores-infografia_6203153.htm',
    },

    {
      referencia: 'Frogx3. (s.f.). Frogx3: Pantone Food [Imagen 3].',
      link: 'https://www.frogx3.com/2017/07/11/pantone-food-arte/',
    },

    {
      referencia:
        'Gisella García Vierci. (2017). 10 cosas que hay que saber sobre el marketing de moda.',
      link:
        'https://medium.com/@gisegv/10-cosas-que-hay-que-saber-sobre-el-marketing-de-moda-512685f06405#:~:text=%E2%80%9CEl%20Marketing%20de%20moda%20%2Do,negocios%2C%20as%C3%AD%20mismo%20busca%20el',
    },

    {
      referencia:
        'Harriet Posner. (2011). Marketing Fashion. Barcelona: Gustavo Gili, SL.',
      link: 'https://issuu.com/librospdfgratis/docs/marketing_de_moda_-_225',
    },

    {
      referencia:
        'Iniciativa Textil. (2021). Iniciativa Textil: Natural o superpuesta [Imagen 8].',
      link: 'https://iniciativatextil.com/primavera-epoca-tela-lino/',
    },

    {
      referencia:
        'Justin, G.; Longenecker, Carlos W.; Moore, J.; William, P. y Leslie, P. (2010). Administración de pequeñas empresas. Lanzamiento y crecimiento de iniciativas emprendedoras, 14a. ed. México DF: Cengage Learning Editores.',
    },

    {
      referencia: 'Koumbis, D. (2016). Moda y retail. Editorial Gustavo Gili.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45596?page=8',
    },

    {
      referencia:
        'Kotler, P. y Armstrong, G. (2017). <i>Fundamentos de marketing</i>. Pearson Educación.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393',
    },

    {
      referencia:
        'Lafayette Fashion. (2021). Lafayette Fashion: Discordancia y Disonancia [Imagen 15]. Lafayette Fashion.',
      link:
        'https://www.lafayettefashion.com.co/blog-moda/el-amor-y-las-rayas-en-su-maxima-expresion/',
    },

    {
      referencia:
        'Mujer. (2020). Mujer: Cómo adaptar la moda de las pasarelas a la decoración de espacios [Imagen 2].',
      link:
        'http://www.mujer.com.pa/deco-hogar/como-adaptar-la-moda-de-las-pasarelas-la-decoracion-de-espacios',
    },

    {
      referencia:
        'Miquel Peris, S y Parra, F. (2008). Distribución comercial. ESIC Editorial.',
    },

    {
      referencia:
        'Nannini, V. (2016) Moda, Comunicación y Poder: ¿Qué vestimos, por qué y qué queremos decir con eso?',
      lin:
        'https://rephip.unr.edu.ar/bitstream/handle/2133/6618/TesinaNanniniModa.pdf?sequence=3',
    },

    {
      referencia: 'Pinterest. (2016). Pinterest: Color Neutral [Imagen 13].',
      link: 'https://co.pinterest.com/pin/148689225169472098/',
    },

    {
      referencia:
        'Pinterest. (2021). Pinterest: Colores fríos y cálidos [Imagen 16].',
      link: 'https://co.pinterest.com/pin/225180050104682819/',
    },

    {
      referencia: 'Pinterest. (2021). Pinterest: Temperatura [Imagen 17].',
      link: 'https://www.pinterest.es/pin/123919427233222822/',
    },

    {
      referencia:
        'Pinterest. (2021). Pinterest: Sensación Táctil. [Imagen 10].',
      link: 'https://www.pinterest.com/pin/286893438751676463/ ',
    },

    {
      referencia:
        'Puro Marketing. (2015). Puro Marketing: 4 tipos de consumidores con personalidades diferentes y cómo venderles.',
      link:
        'https://www.puromarketing.com/13/24479/tipos-consumidores-personalidades-diferentes-como-venderle.html',
    },

    {
      referencia:
        'PlayBoy. (2020). PlayBoy: Moda Inspirado en Arte: Van Gogh, Mondrian y más [Imagen 1].',
      link:
        'https://www.playboy.com.mx/guia-playboy/moda-inspirada-en-obras-de-arte/',
    },

    {
      referencia:
        'Quintero Arango, L. (2015). El sector retail, los puntos de venta y el comportamiento de compra de los consumidores de la base de la pirámide en la comuna 10 de la ciudad de Medellín. Revista Ciencias Estratégicas, 23(33),109-118. [fecha de Consulta 30 de Abril de 2021]. ISSN: 1794-8347.',
      link: 'https://www.redalyc.org/articulo.oa?id=151345259009',
    },

    {
      referencia:
        'Renata, C. y Frédéric, G. Sociología de la moda. Revista Mexicana de Sociología, [S.l.], v. 76, n. 2, feb. 2015. ISSN 2594-0651. Disponible en:',
      link:
        'http://revistamexicanadesociologia.unam.mx/index.php/rms/article/view/46440>. Fecha de acceso: 14 mayo 2021 doi: http://dx.doi.org/10.22201/iis.01882503p.2014.2.46440.',
    },

    {
      referencia:
        'Ruiz, N. (2018). Tipos de eventos de moda. Blog Dsigno Sitio web:',
      link:
        'https://www.dsigno.es/blog/diseno-de-moda/tipos-de-eventos-de-moda',
    },

    {
      referencia: 'Tendencias de Moda. (2020). Trendencias',
      link:
        '(https://www.trendencias.com/tendencias/15-tendencias-moda-esta-temporada-primavera-verano-2020-pasarelas)',
    },

    {
      referencia:
        'Trendencias. (2020). Trendencias: Tendencias de Moda [Imagen 20].',
      link:
        'https://www.trendencias.com/tendencias/15-tendencias-moda-esta-temporada-primavera-verano-2020-pasarelas)',
    },

    {
      referencia:
        'Villalba, D. (2021). Omnicanalidad o Multicanalidad: diferencias y beneficios.',
      link:
        'https://www.pragma.com.co/blog/omnicanalidad-vs-multicanalidad-cual-es-la-mejor-opcion-para-mi-empresa#:~:text=La%20omnicanalidad%20y%20la%20multicanalidad,cada%20vez%20m%C3%A1s%20precisa%20y ',
    },

    {
      referencia:
        'Viste la Calle. (2015). Viste la Calle: Sensación Táctil [Imagen 11].',
      link:
        'https://vistelacalle.com/136914/peru-moda-2015-diseno-andino-de-vanguardia/ ',
    },
  ],
  glosario: [
    {
      termino: 'Alta costura',
      significado:
        'Vestuario hecho sobre medida creado por los diseñadores líderes que, usualmente forma parte de una colección para una estación específica, la cual es determinante en la moda en general. La alta costura fue fundada por Charles Frederick Worth en París en la segunda mitad del siglo XIX; a principios del siglo XX fue dominada por Paul Poiret y después por Coco Chanel durante y después de la primera guerra mundial.',
    },
    {
      termino: 'Atelier',
      significado: 'Taller de creación de moda.',
    },
    {
      termino: 'Bidimensional',
      significado:
        'Que se representa según su altura y su anchura, y no su profundidad.',
    },
    {
      termino: 'Coolhunter',
      significado:
        'Persona que se dedica a la recolección de información sobre tendencias de moda.',
    },
    {
      termino: 'Corsé',
      significado:
        'Prenda femenina que ciñe el cuerpo desde el pecho hasta las caderas mediante una estructura que se ata fuertemente a la espalda.',
    },
    {
      termino: 'Diseño',
      significado:
        'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
    },
    {
      termino: 'Estilo',
      significado:
        'Manifestación personal de cada individuo según las características propias y su comunicación a través de su actitud y su vestuario. En el estilo se manifiesta la identidad de la persona que está fundamentada en la unidad que se refleja a partir de la relación existente entre el ser y su aspecto exterior o la apariencia.',
    },
    {
      termino: 'Moda',
      significado:
        'Hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer.',
    },
    {
      termino: 'Outfit',
      significado:
        'Conjunto de prendas combinadas de una manera determinada. Designa un atuendo concreto, pero su uso se ha popularizado hasta el punto de emplearse como sinónimo del término genérico conjunto.',
    },
  ],
  complementario: [
    {
      texto:
        'Nannini, V. (2016) Moda, Comunicación y Poder: ¿Qué vestimos, por qué y qué queremos decir con eso?',
      tipo: 'PDF',
      link: '/downloads/TesinaNanniniModa.pdf',
    },
    {
      texto:
        'Kotler, P y Armstrong, G. (2017). Fundamentos de marketing. Pearson Educación.',
      tipo: 'Artículo',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393',
    },
    {
      texto:
        'Harriet, P. (2011). Marketing Fashion. Barcelona: Gustavo Gili, SL. ',
      tipo: 'Libro',
      link: 'https://issuu.com/librospdfgratis/docs/marketing_de_moda_-_225',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
