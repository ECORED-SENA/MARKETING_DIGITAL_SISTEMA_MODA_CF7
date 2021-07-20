<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Introducción al sistema moda

    .row.align-items-center.d-flex.p-2.mb-3
      .col-lg-6
        .cajon--morado_1.p-5
          p La moda y las tendencias permean áreas en las que todo ser humano se desenvuelve, áreas que representan el estilo de vida de un individuo, comunidad o sociedad y que dentro de estas áreas se encuentran: 
            strong gastronomía, música, política, conciencia ambiental, tecnología, estructuras familiares, entre otras como el arte, la cosmética, el cine.
        
      .col-lg-6.d-flex.p-4
        img.img-a(src='@/assets/curso/tema_1/img_1.png')

    p.mb-5 Es de suma importancia leer la moda de una manera integral y no aislada en el vestuario, relacionándola directamente con la cultura, dado que cuando hablamos de grupos, comunidades y sociedades está en todo el contexto. Se puede entender como cultura un concepto amplio que abarca manifestaciones del ser humano y un sistema de creencias, costumbres desarrolladas por un grupo, comunidad y sociedad. La cultura integra símbolos y significados que hacen que una persona sienta que forma parte de un grupo (ciudad, región, país)

    p.mb-5 Observa el siguiente recurso educativo para identificar una visión integrada de la moda, tendencias en escenarios del sistema moda, situando la moda en el arte   
      strong ¿dónde has visto estas manifestaciones culturales?

    
    SlyderBTitulo.mb-5(:datos="datosSlyder")

    .cajon--amarillo.p-4.mb-5
      .row
        .col-lg-4.mb-3
          img.img-a(src='@/assets/curso/tema_1/img_5.png')
        .col-lg-7
          p Luego del ejercicio de observación generado por el recurso de aprendizaje anterior usted percibió cómo en el sistema moda confluyen y se retoman las manifestaciones del ser humano para configurar formas, colores y texturas que se componen a través de la vestimenta. Reconocemos que la intención es que usted identifique características de la moda para entender esta como producto en el mundo del #[i marketing ]digital, sin embargo, hemos seleccionado un recurso que le provee información relacionada con la evolución de la moda, la historia del vestuario y demás. Adelante con su exploración. 

    .row.justify-content-center.mb-5
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/Texto_Concepto_Moda.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            strong Anexo 1.
            p Conceptos de moda. Diseño y moda.

    #fundamentos.titulo-segundo
      h2 1.1 Fundamentos del diseño

    p.mb-5 La definición del diseño nace del italiano #[strong disegno], la palabra diseño se refiere a un boceto, bosquejo o esquema que se realiza, ya sea mentalmente o en un soporte material, antes de concretar la producción de algo. El término también se emplea para referirse a la apariencia de ciertos productos en cuanto a sus líneas, forma y funcionalidades. Etimológicamente se deriva del término italiano #[strong disegno] dibujo, designio, signare, signado «lo por venir», es decir que se acerca a la representación gráfica del futuro de un hecho. Lo hecho es la obra, lo por hacer es el proyecto, el acto de diseñar como prefiguración. Es el proceso previo en la búsqueda de una solución. Plasmar el pensamiento de la solución o las alternativas mediante esbozos, dibujos, bocetos o esquemas trazados en cualquiera de los soportes, durante o posteriores a un proceso de observación de alternativas o investigación.

    p.mb-5 Normalmente, por diseño se conoce el arte de proyectar el aspecto, la función y la producción de un objeto funcional por medio de signos gráficos, sea que se trate de un objeto bidimensional (moldes, bocetos, gráficos, diseño plano, etc.) o tridimensional (prendas de vestir, calzado, bolsos, entre otros) La persona que practica el oficio del diseño recibe el nombre de diseñador.

    p.mb-5 El diseñador ha de tomar en cuenta los aspectos estéticos y funcionales del objeto. Para ello debe considerar las siguientes etapas:

    .row.d-flex
      .col-lg-3.mb-5.d-flex
        .tarjeta.color_tar.p-4
          img.mb-3.img-b(src='@/assets/curso/tema_1/img_7.png')
          img.mb-3.img-b(src='@/assets/curso/tema_1/img_6.png')
          h2 Etapa 1
          p.mb-0 Observar y analizar el medio en el cual se desenvuelve el individuo.

      .col-lg-3.mb-5.d-flex
        .tarjeta.color-secundario.p-4
          img.mb-3.img-b(src='@/assets/curso/tema_1/img_8.png')
          img.mb-3.img-b(src='@/assets/curso/tema_1/img_6.png')
          h2 Etapa 2
          p.mb-0 Evaluar las necesidades del individuo que hará uso del objeto.

      .col-lg-3.mb-5.d-flex
        .tarjeta.color_tar.p-4
          img.mb-3.img-b(src='@/assets/curso/tema_1/img_9.png')
          img.mb-3.img-b(src='@/assets/curso/tema_1/img_6.png')
          h2 Etapa 3
          p.mb-0 Planear y proyectar a través de estudios, planos y/o maquetas la forma de dar solución a las necesidades identificadas.

      .col-lg-3.mb-5.d-flex
        .tarjeta.color-secundario.p-4
          img.mb-3.img-b(src='@/assets/curso/tema_1/img_10.png')
          img.mb-3.img-b(src='@/assets/curso/tema_1/img_6.png')
          h2 Etapa 4
          p.mb-0 Ejecutar el proyecto.

    p.mb-5 El diseño de moda es el arte dedicado a la creación de vestuario, complementos y accesorios dentro de las influencias culturales y sociales en un período de tiempo específico, su finalidad creativa está orientada a soluciones idóneas de ciertas problemáticas del cuerpo, incursión social, estatus, físicas, entre otras. En el área del diseño, el abordaje de los fundamentos del diseño, son estudiados por carreras cercanas como son arquitectura, diseño industrial, diseño gráfico, entre otros y se dividen en 4 grandes grupos. Veamos a continuación:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Conceptuales" )
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a(src='@/assets/curso/tema_1/img_12.svg', alt='Texto que describa la imagen')        
          .col-md-6
            p Punto, línea, plano y volumen. Son los que no se ven, si no que parecen estar presentes, envuelven un volumen ocupando un espacio, los puntos, las líneas, los planos, los volúmenes, no están realmente ahí. Los elementos conceptuales no son visibles, no existen de hecho, sino que parecen estar presentes.
      .py-4.py-md-5(titulo="Visuales")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a(src='@/assets/curso/tema_1/img_13.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Forma, medida, color y textura. Es la línea visible del dibujo, tiene largo y ancho. Su color y textura quedan determinados por los materiales usados y como se usan. Tienen forma, color, medida y textura. Cuando dibujamos un objeto en un papel, empleamos una línea visible para representar una línea conceptual. La línea visible tiene no sólo largo, sino también ancho. Su color y su textura quedan determinados por los materiales que usamos y por la forma en que los usamos. Así, cuando los elementos conceptuales se hacen visibles, tienen forma, medida, color y textura. Los elementos visuales forman la parte más prominente de un diseño, porque son lo que realmente vemos.
        
      .py-4.py-md-5(titulo="De relación")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a(src='@/assets/curso/tema_1/img_11.svg', alt='Texto que describa la imagen')        
          .col-md-6
            p Dirección, posición, espacio y gravedad. Estos elementos se emplean para definir las interacciones entre las distintas formas que constituyen a un diseño. La relación de diseño permite evaluar la ubicación de todos los objetos que forman la imagen, su interrelación entre sí y el impacto visual que inducen en la persona que aprecia el diseño.

      .py-4.py-md-5(titulo="Prácticos")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a(src='@/assets/curso/tema_1/img_14.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Representación, significado y función. Los elementos prácticos son aquellos que tienen una interpretación subjetiva y a los que podemos dotar de un significado.

    p.mb-5 En el proceso de ejecución de un diseñador o marca de moda, la investigación se lleva a cabo a través de un conjunto de elementos o componentes que son necesarios en la creación del producto. Estos componentes son: la forma y la estructura, la textura y el color, y todo lo relacionado al estudio de referentes históricos y culturales. Dichos componentes se verán reflejados en la transformación de las ideas plasmadas en formas y estructuras de construcción de las prendas, detalles de confección y grafías, están presentes en el tipo de tejido, el uso del color y en la inspiración creativa que conlleva a la elaboración de una colección de moda. Existe un proceso en el diseño para definir dichos elementos.

    #diseno.titulo-segundo
      h2 1.2 Diseño dirigido al sector vestuario y moda

    p.mb-5 Entre los elementos de diseño dirigidos al sector vestuario y moda se encuentran: #[strong 1. Silueta, 2. Volumen, 3. La forma, 4. La Textura y 5. El color]. Para más información se ha diseñado un recurso educativo para ver la caracterización de dichos elementos. Adelante. 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tajeta--gris")
      .row.justify-content-center(titulo="La silueta")
        .col-lg-11
          p.mb-5 Su función principal es modelar el cuerpo, rehacer líneas anatómicas y generar una sensación de cambio de las proporciones entre las partes del cuerpo.

          h3.text-center.mb-5 Tipos de cuerpo según la silueta 

          figure.mb-5
            img.img-a(src='@/assets/curso/tema_1/img_15.svg')

          figure
            img.img-a(src='@/assets/curso/tema_1/img_16.svg')

           

      div(titulo="El volumen")
        .row.justify-content-center
          .col-lg-11
            p.mb-5 Está totalmente asociado con la silueta. El exceso o la carencia de él, se aprecian de inmediato en el estilo de la prenda y en su silueta. También, la prenda puede presentar características de ligereza o peso a través del uso de tejidos acolchados, gruesos o transparentes, que a su vez influirán en la silueta resultante. 

            p.mb-5 Debido al volumen de una prenda se puede generar la sensación de diferentes siluetas en un mismo cuerpo, en el ejemplo expuesto la modelo Gigi Hadid tiene usa 3 outfits diferentes donde se evidencia lo anterior mencionado.

            .row
              .col-lg-4
                p.BorTit Figura 4. Super amplia
                figure
                  img(src='@/assets/curso/tema_1/img_16.png', alt='')
                  figcaption Nota. Bulevar (2021) Bulevar: Super Amplia  
              .col-lg-4
                p.BorTit Figura 5. Amplia
                figure
                  img(src='@/assets/curso/tema_1/img_35.png', alt='')
                  figcaption Nota. E  (2018). E: Amplia.

              .col-lg-4
                p.BorTit Figura 6. Ajustada
                figure
                  img(src='@/assets/curso/tema_1/img_36.png', alt='')
                  figcaption Nota. E (2021) E: Ajustada

      div(titulo="La forma")
        .row.justify-content-center
          .col-lg-11
            p.mb-0 Este elemento dialoga a como se percibe de manera externa las cosas:
            .row.justify-content-center
              .col-lg-11
                p.mb-0 
                  strong Apariencia 
                p
                  strong Estructura

            p.mb-5 La inspiración de las colecciones se refleja con fuerza en este elemento del diseño. En la siguiente imagen de Iris Van Herpen se observa esto. 

            .row.justify-content-center
              .col-lg-10
                p.BorTit Figura 7. La forma
                figure
                  img(src='@/assets/curso/tema_1/img_17.png', alt='')
                  figcaption Nota. Divi (2019) Divi: La forma. 


      .row.justify-content-center(titulo="La textura")
        .col-lg-11
          p.mb-5 Hace relación al material de una superficie. Existen dos tipos de textura en la moda, la primera se conoce como natural o superpuesta y la segunda como textura con sensación táctil y visual. 

          .row.justify-content-center
            .col-lg-10
              p.BorTit Figura 8. Textura natural o superpuesta
              figure.mb-5
                img(src='@/assets/curso/tema_1/img_18.png', alt='')
                figcaption Nota. Iniciativa Textil (2021)  Iniciativa Textil: Natural o superpuesta

              .row
                .col-lg-6
                  p.BorTit Figura 9. Textura con sensación visual
                  figure
                    img(src='@/assets/curso/tema_1/img_37.png', alt='')
                    figcaption Nota Aniversario París (2021) Aniversario 
                      | País: Sensación Visual [Imagen 9]. 
                .col-lg-6
                  p.BorTit Figura 10. Textura de sensación táctil
                  figure
                    img(src='@/assets/curso/tema_1/img_38.png', alt='')
                    figcaption Nota. Pinterest (2021) Pinterest: Sensación Táctil. [Imagen 10]

      .row.justify-content-center(titulo="El color")
        .col-lg-11
          p Es uno de los elementos que se perciben con mayor rapidez en el instante de ver por primera vez un diseño. El color tiene una gran influencia en la intención de una colección ya que se encuentra relacionado a generar sensaciones. Por lo tanto, es vital poseer un conocimiento básico de la teoría del color y de cómo se crean y se combinan los colores. 

          ol.lista-ol.mb-5
            li 
              span.text-bold 1. 
              strong El matiz
            li 
              span.text-bold 2. 
              strong La luminosidad
            li 
              span.text-bold 3. 
              strong La cantidad de luz

          .row.justify-content-center
            .col-lg-10
              p.BorTit Figura 11. Sensación táctil
              figure
                img(src='@/assets/curso/tema_1/img_19.png', alt='')
                figcaption Nota. Viste la Calle (2015) Viste la Calle: Sensación Táctil [Imagen 11].

    #esquemas.titulo-segundo
      h2 1.3 Esquemas de color

    p.mb-5 Los esquemas de color es un término y concepto incluido dentro de la teoría de color y hace referencia a las gamas y paletas que se establecen en el color, a partir de análisis de círculos cromáticos, en este apartado se abordarán las paletas y técnicas para sacar la combinación ideal ligado al vestuario. Cuando se habla de color en términos generales es aplicable a cualquier área, dado que es universal, dependerá del aprendiz su uso y aplicabilidad de acuerdo con la propuesta y producto esperado. Por lo anterior, se plasmarán cuáles son aquellos esquemas básicos de color ¿sabes cuáles son? Observa y diferencia uno del otro.

    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_20.png')
      .col-lg-10
        .h5 Esquemas básicos
        p Los esquemas básicos son vistos dentro de la clasificación de color de acuerdo con su luz y la perspectiva de la persona que mira el color, son diez esquemas básicos: Acromáticos, análogos, de choque, complementarios, monocromáticos, neutrales y complementarios divididos, también los esquemas primarios, secundarios y terciarios (Salinas, 1994).
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_21.png')
      .col-lg-10
        .h5 Esquema acromáticos
        p Es aquel esquema sin color, en el que solo se encuentra el negro, el blanco y escala de grises.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_22.png')
      .col-lg-10
        .h5 Esquema análogo
        p Utiliza cualquiera de los tres tonos consecutivos o cualquiera de sus tintes y matices del círculo cromático.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_23.png')
      .col-lg-10
        .h5 Esquema de choque
        p Combina un color con el tono que está a la derecha o a la izquierda de su complemento en el círculo cromático.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_24.png')
      .col-lg-10
        .h5 Esquema complementario
        p Son los opuestos directos del círculo complementario.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_25.png')
      .col-lg-10
        .h5 Esquema monocromático
        p Utiliza un tono en combinación con cualquiera de sus tintes y matices o con todos los presentes.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_26.png')
      .col-lg-10
        .h5 Esquema neutral
        p Utiliza un tono que se ha disminuido o neutralizado con el agregado de su complemento o del negro, es decir de claros a oscuros de una misma gama.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_27.png')
      .col-lg-10
        .h5 Esquema complementario dividido
        p Consta de un tono y los dos tonos a ambos lados de su complemento dentro del círculo cromático.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_28.png')
      .col-lg-10
        .h5 Esquema primario
        p Son todos los tonos puros del rojo, amarillo y azul.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_29.png')
      .col-lg-10
        .h5 Esquema secundario
        p Surge de la combinación de los tonos primarios para obtenerse el verde, violeta y naranja.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_34.png')
      .col-lg-10
        .h5 Esquema triada terciario
        p Surge de una de dos combinaciones: naranja rojizo, verde amarillento y violeta azulado o verde azulado, naranja amarillento y violeta rojizo; todos los equidistantes uno del otro en el círculo cromático.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_30.png')
      .col-lg-10
        .h5 Tétradas
        p Están formados por dos pares de colores complementarios para que en total sea una combinación de cuatro colores, con esta combinación se logran resultados muy llamativos.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_31.png')
      .col-lg-10
        .h5 Colores complejos
        p Son aquellos colores que combinados representan cambio de textura o matiz, entre ellos se encuentran los metalizados o color fluorescentes.
    hr.hr
    .row.justify-content-center.align-items-center
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_32.png')
      .col-lg-10
        .h5 Discordancia y disonancia
        p En este punto es el que se puede jugar con las combinaciones en las que no necesariamente esté guiada según la regla de combinación, en el sector de la moda suele verse mucho para generar una estructura visual que se integre en el vestuario y genere una unidad visual llamativa.
    hr.hr
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        img.img-a(src='@/assets/curso/tema_1/img_33.png')
      .col-lg-10
        .h5 Paletas según temperatura de color
        p Dentro de las paletas según la temperatura se encuentran los fríos y los cálidos. Temperatura de color de claro a oscuro, clasificados entre fríos y cálidos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .cajon--morado_1.p-4.mb-5.d-flex
          p Observado las variaciones y conjugaciones de los esquemas de valor. Ahora es importante reconocer aspectos relacionados con 
            strong la categoría de moda. 
  
</template>

<script>
import SlyderBTitulo from '../components/SlyderBTitulo'
export default {
  name: 'Tema1',
  components: {
    SlyderBTitulo,
  },
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Moda Inspirado en Arte: Van Gogh, Mondrian y más.',
        tituloImg: 'Figura 1, Moda Inspirado en Arte: Van Gogh, Mondrian y más',
        texto:
          'En la presente imagen se observa un ejemplo de como el arte se ha desplazado al escenario de las tendencias de la moda. Cada vez es más común ver prendas, accesorios y otros inspiradas en pinturas.',
        imagen: require('@/assets/curso/tema_1/img_2.png'),
        leyendaImagen:
          'Nota. PlayBoy (2020) PlayBoy : Moda Inspirado en Arte: Van Gogh, Mondrian y más ',
      },
      {
        titulo:
          'Cómo adaptar la moda de las pasarelas a la decoración de espacios',
        tituloImg:
          'Figura 2 Cómo adaptar la moda de las pasarelas a la decoración de espacios',
        texto:
          'En la imagen se observa como el contexto de la moda y la decoración cada vez comparten relaciones en cuanto al uso de colores, texturas y estampados. Es una opción para la diversificación de los modelos de negocio.',
        imagen: require('@/assets/curso/tema_1/img_3.png'),
        leyendaImagen:
          'Nota. Mujer (2020) Mujer: Cómo adaptar la moda de las pasarelas a la decoración de espacios',
      },
      {
        titulo: 'Pantone Food',
        tituloImg: 'Figura 3 Pantone Food',
        texto:
          '¿Qué observas en la imagen?, si una de sus respuestas es el color se conecto con esta descripción porque en la presente imagen se percibe como la naturaleza, la gastronomía inspira la paleta de colores del sistema de moda. ',
        imagen: require('@/assets/curso/tema_1/img_4.png'),
        leyendaImagen: 'Nota. Frogx3 (s.f.) Frogx3: Pantone Food',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
