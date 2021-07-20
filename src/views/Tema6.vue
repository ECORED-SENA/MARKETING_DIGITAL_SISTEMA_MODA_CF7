<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Mercados y usuarios de moda

    p.mb-5 Se ha mencionado como la moda se contempla como sistema y a su vez como la cultura está intrínsecamente relacionada, a su vez como en las diferentes gamas de mercado hacen surgir otras, todas siempre marcadas por el consumidor, teniendo en cuenta esto, aquellos factores que posibilitan todo este evolucionar en la moda son los siguientes. Los siguientes factores permiten dar respuesta a la pregunta 
      strong ¿Por qué nos vestimos? 

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_6/img_1.svg', alt='')
      
    #t_6_1.titulo-segundo
      h2 6.1 Cliente o consumidor

    p.mb-5 Se entiende por cliente, aquella persona o entidad que compra bienes y servicios que son requeridos a partir de necesidades específicas, es llamado cliente porque el producto generado en un espacio de compra y venta puede ser para él en particular o para otras personas. Un cliente puede ser también una empresa. Por consumidor se entiende entonces que es una persona que compra productos para su consumo personal y depende el tipo de necesidad que manifieste, este se consumirá siempre en su beneficio. Generalmente suelen utilizarse ambos conceptos en el léxico común, pero en la moda la palabra utilizada para referirse a las personas es consumidor. Este consumidor se encuentra determinado por valores, conceptos y experiencias de este con el producto ofrecido, los cuales deben responder a los perfiles y estilos del consumidor que hoy predominan, para construir propuestas a partir de este reconocimiento.

    #t_6_2.titulo-segundo
      h2 6.2 Perfiles de consumidor

    p.mb-5 Un perfil no se determina por la edad ni por el segmento socioeconómico. Todos los perfiles se encuentran en las diferentes edades y segmentos socioeconómicos, estos #[strong están ligados hacia los estilos de vida, preferencias, gustos, actitudes, relaciones, experiencias y espacios entre otros]. Dentro de los perfiles de consumidor que se encuentran como una lectura del conjunto de personas o público objetivo en el sector de la moda están: 

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Tradicional")
        .row.align-items-center
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h2 Consumidor tradicional
            p Participa en un ambiente social exigente en el que busca reconocimiento, aceptación y afirmación de los demás, al invertir grandes cantidades de dinero, tiempo y energía. Es muy conservador con las normas de etiqueta y vestuario, no acepta tendencias de moda actuales, pero está pendiente a las novedades en su estilo.  
        
          
      .py-3.py-md-4(titulo="Neotradicional")
        .row.align-items-center
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_6/img_3.png', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h2 Consumidor neotradicional
            p Es el nuevo tradicional, acepta algunos cambios en su vestuario, sin embargo, conserva la etiqueta y las normas de acuerdo con los protocolos de los eventos, es formal y tradicionalista. Es fiel a marcas que representan su estilo, pero aprecia los referentes actuales para integrarlos sutilmente.
        
      .py-3.py-md-4(titulo="Contemporáneo")
        .row.align-items-center
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_6/img_4.png', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h2 Consumidor contemporáneo
            p Surge de avances y cambios a nivel social y cultural, son personas dinámicas, apasionadas por conocer cosas nuevas, viajar y estar a la vanguardia de todos los sucesos a nivel nacional y mundial. Se consideran exploradores, se adaptan a los cambios según las nuevas tendencias y gran interés por actividades profesionales y culturales. 

      .py-3.py-md-4(titulo="Vanguardista")
        .row.align-items-center
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_6/img_5.png', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h2 Consumidor vanguardista
            p Destacado grupo social, inconformista, vanguardista y amante de la originalidad y autenticidad del ser. Genera cambios y origina nuevos conceptos, innovador, rompe esquemas y paradigmas en su entorno influyendo en la creación de nuevas tendencias. Por lo general tiene gran capacidad adquisitiva, con interés de exploración e investigación del mercado. 
        
      
      .py-3.py-md-4(titulo="Exhibicionista")
        .row.align-items-center
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_6/img_6.png', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h2 Consumidor exhibicionista
            p Persona con gran necesidad de destacarse para verse original y distinto a los demás, con gran sensibilidad hacia nuevos conceptos de moda, posee un estilo ecléctico, es decir no se identifica con uno en particular. 

    .row.justify-content-center.mb-5
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/Texto_Perfil_Consumidor.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Perfil de consumidor
      
    #t_6_3.titulo-segundo
      h2 6.3 Personalidades de compra

    .row.mb-5
      .col-lg-7
        p Identificar los tipos de personalidades de compra mejora la atención que se brinda, dado que no todos se comportan igual, ni tienen la misma velocidad en la decisión para realizarla y esto si no se logra abordar estratégicamente, puede afectar la venta de un producto, es por ello por lo que primero se inicia por tener claro cómo entender al comprador. 

        p Todos somos compradores y consumidores en muchos momentos de nuestras vidas, y casi nunca nos damos cuenta de la dualidad que esto significa. Como compradores pensamos en hacer la mejor “cacería o recolección” y como consumidores buscamos la mejor forma de satisfacer nuestras necesidades, pese a que en muchos casos actuamos de manera inconsistente entre estas dos personalidades: queremos lo mejor al menor precio posible, y eso en la mayoría de los casos simplemente no es posible.
      .col-lg-5.d-flex.p-1
        figure
          img(src='@/assets/curso/tema_6/img_7.png', alt='Texto que describa la imagen')

    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0 Nuestro rol como compradores, es el de cazadores y recolectores, y tiene como función encontrar el mejor producto para satisfacer una necesidad específica.
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Históricamente las mujeres son mucho mejores en este proceso que los hombres, porque se han formado como recolectoras, donde han desarrollado capacidades para seleccionar entre diversas opciones la óptima de todas; por el contrario, el hombre, se ha formado como cazador y por esto compra de manera eficaz, encontrando un producto que satisfaga la necesidad, pero quizá no era la mejor opción de compra.

    p.mb-5 En cada categoría actuaremos diferente, porque simplemente no somos un único tipo de comprador, ya que cambiamos según nuestras necesidades y gustos en cada grupo de productos.

    .row.justify-content-center.mb-5
      .col-lg-10
        a.anexo(href=('https://www.puromarketing.com/13/24479/tipos-consumidores-personalidades-diferentes-como-venderle.html') target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 #[strong Enlace web]. Para que las marcas lleguen a sus consumidores es importante identificar sus necesidades e intereses. 
            p Le sugerimos apropiarse de la información de la página web #[strong Puro Marketing] para que usted clasifique sus tipos de consumidores. 

    #t_6_4.titulo-segundo
      h2 6.4 Universos de vestuario

    p Son conceptos que responden a la necesidad de establecer categorías para agrupar productos de acuerdo con parámetros de afinidad y correlación. Constituidos por conjuntos de prendas de vestir y accesorios con características similares, bajo conceptos de moda y articulados a las necesidades específicas del consumidor o público objetivo. Agrupar las prendas por universos permite una categorización del producto.

    p #[strong Clasificación de universos de vestuario]: dentro de la clasificación de los universos de vestuario se pueden encontrar 4 grupos distribuidos en subgrupos de la siguiente mantera:

    .row.justify-content-center.mb-5
      .col-lg-9
        .jumbo_2.p-4
          .h2.mb-3 Grupo uno
          img.mb-5.img-b(src='@/assets/curso/tema_1/img_6.png')
          .row.mb-5
            .col-lg-4.d-flex.p-2
              img(src='@/assets/curso/tema_6/img_8.png')
            .col-lg-8
              .h5.mb-0 Gala
              p Ligados a tradiciones culturales y monárquicas para eventos y celebraciones protocolarios en los altos rangos sociales. Esto se debe porque el vestuario y su significado no es lo mismo para todo el mundo, depende el país, la región y ciudad, así como las costumbres y el simbolismo presente en el vestuario, lo que si debe generar es distinción a partir de estos elementos diferenciadores de lo que se usaría en el diario vivir. Las características de este universo son: jerárquico, distintivo y diferenciador.
          .row
            .col-lg-4.d-flex.p-2
              img(src='@/assets/curso/tema_6/img_9.png')
            .col-lg-8
              .h5.mb-0 Formal
              p Surge una vez se establecen las gamas de mercado como la alta costura y la necesidad de diferenciar rangos sociales y laborales. Aplica en eventos como ceremonias, actividad laboral y eventos sociales. Actualmente este universo se ha visto transformado en el que no necesariamente, el no portar una prenda característica del universo deje de considerarse formal. Las características de este universo son: autocrático, jerárquico, distintivo y diferenciador. Como se puede observar es muy similar al universo de gala.

    .row.justify-content-center.mb-5
      .col-lg-9
        .jumbo_1.p-4
          .h2.mb-3 Grupo dos
          img.mb-5.img-b(src='@/assets/curso/tema_1/img_6.png')
          .row.mb-5
            .col-lg-4.d-flex.p-2
              img(src='@/assets/curso/tema_6/img_10.png')
            .col-lg-8
              .h5.mb-0 Casual
              p En este universo se puede encontrar un concepto mucho más democrático sobre la moda y su categorización de prendas, nace en los 60, como producto de una búsqueda de mayor igualdad y libertad de expresión. Permitió flexibilizar el vestuario en diferentes entornos, a tal punto que el concepto de formalidad puede llegar a incluirse en este universo al ser “democrático”, está presente en el diario vivir de la gran mayoría de personas y se delimita según su ocasión de uso. Las características de este universo son: democrático, versátil, flexible, interactivo y citadino.


    .row.justify-content-center.mb-5
      .col-lg-9
        .jumbo_2.p-4
          .h2.mb-3 Grupo tres
          img.mb-5.img-b(src='@/assets/curso/tema_1/img_6.png')
          .row.mb-5
            .col-lg-4.d-flex.p-2
              img(src='@/assets/curso/tema_6/img_11.png')
            .col-lg-8
              .h5.mb-0 Kakiwear
              p Nace en los 80, por el fenómeno YUPI que consistía en asistir al trabajo de manera más informal por lo general se empezó a implementar los viernes, cuando finalizaban en la semana su jornada laboral. Se caracteriza principalmente por los textiles empleados y la gama de color que contempla los tonos tierra y textil en drill y siluetas más holgadas las cuales facilitan mejor el movimiento. Actualmente se emplea en diferentes actividades del diario vivir de una persona. Las características de este universo son: dinámico, versátil, funcional, socio flexible y socio confortable.
          .row.mb-5
            .col-lg-4.d-flex.p-2
              img(src='@/assets/curso/tema_6/img_12.png')
            .col-lg-8
              .h5.mb-0 Jeanswear
              p Nace a partir de la popularización de la base textil en denim, el cual inicialmente se usaba solo para trabajos de minería en overoles y pantalones. Este fenómeno es originario de Estados Unidos en la década de los 50 y en los 80 logró convertirse en una base para pantalones, camisas y otros productos usados tanto por hombres y mujeres. Las características de este universo al igual que el kakiwear al centrarse en una base textil y gama de color son: dinámico, versátil, funcional, socio flexible y socio confortable.

          .row.mb-5
            .col-lg-4.d-flex.p-2
              img(src='@/assets/curso/tema_6/img_13.png')
            .col-lg-8
              .h5.mb-0 Sportswear
              p Universo dedicado a las prendas que usan en prácticas deportivas, se populariza en los 70 influenciado por los juegos olímpicos y la creciente práctica de los deportes. Las características de este universo son: tecnológico, multi funcional, confortable y apariencia deportiva.

          .row.mb-5
            .col-lg-4.d-flex.p-2
              img(src='@/assets/curso/tema_6/img_14.png')
            .col-lg-8
              .h5.mb-0 Activewear
              p Universo enfocado en prendas para realizar ejercicio en el que no necesariamente la persona que lo realiza sea un deportista profesional. Actualmente ha cobrado mucha fuerza dada la necesidad de practicar ejercicio por motivos de salud o porque hace parte del diario vivir de alguien convirtiéndolo en un estilo de vida. Las características de este universo son: tecnológico, confortable y segunda piel (facilitan el movimiento). 

          .row.align-items-center
            .col-lg-4.d-flex.p-2
              img(src='@/assets/curso/tema_6/img_15.png')
            .col-lg-8
              .h5.mb-0 Leisurewear
              p Surge hacia los 2000 como parte de un estilo informal freelance, incluye ropa para dormir e incluso bajo este mismo concepto, ropa para estar en casa. Las características de este universo son: relajado, confortable, cómodo y descanso.

    .row.justify-content-center.mb-5
      .col-lg-9
        .jumbo_1.p-4
          .h2.mb-3 Grupo cuatro
          img.mb-5.img-b(src='@/assets/curso/tema_1/img_6.png')
          .row.mb-5
            .col-lg-4.d-flex.p-2
              img(src='@/assets/curso/tema_6/img_16.png')
            .col-lg-8
              .h5.mb-0 Swimwear/Beachwear
              p Unida a la ocasión de uso para la cual está pensada sus productos, ropa para nadar, actualmente es un universo porque vestuario para la playa o para nadar no necesariamente implica que se desarrolle bajo esta actividad, están también las salidas de baño, faldas, camisas y accesorios. Las características de este universo son: aire libre, playa, deportes y recreación.
          .row.mb-5.align-items-center
            .col-lg-4
              img.img-a(src='@/assets/curso/tema_6/img_17.png')
            .col-lg-8
              .h5.mb-0 Sleepwear
              p Ropa exclusivamente para las horas de descanso, para dormir. Las características de este universo son: comodidad y descanso.

          .row.mb-5.align-items-center
            .col-lg-4
              img.img-a(src='@/assets/curso/tema_6/img_18.png')
            .col-lg-8
              .h5.mb-0 Underwear
              p Universo dedicado solo a ropa interior, también puede encontrarse con el nombre lingerie, pero depende más de la intención en su uso. Las características de este universo es la comodidad.

    .row.justify-content-center.mb-5
      .col-lg-8
        a.anexo(href=('https://login.bdigital.sena.edu.co/login?url=https://www.fashionsnoops.com/Default.aspx') target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 #[strong Enlace web]. Para conocer aspectos que complementan el tema de Universo del Vestuario revisa el documento de Fashion Snoops ¿qué esperas encontrar? Adelante con su exploración.  
            

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
