<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Eventos de moda

    p.mb-5 Los eventos de moda se catalogan a todo tipo de espacios donde se da a conocer al público un determinado hecho relacionado con la moda, como desfiles o presentación de colecciones de diseñadores. El monitoreo de dichos eventos está enfocado en la necesidad de conocer las tendencias que se están manejando, las inspiraciones de las colecciones y las nuevas formas de comercializar los productos de moda, haciendo uso de los medios de comunicación y herramientas digitales tan importantes como el internet y las redes sociales. 

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_7/img_1.png', alt='')
      
    #t_7_1.titulo-segundo
      h2 7.1 Historia de los eventos de moda

    p.mb-5 Los eventos de moda se catalogan a todo tipo de espacios donde se da a conocer al público un determinado hecho relacionado con la moda, como desfiles o presentación de colecciones de diseñadores. El monitoreo de dichos eventos está enfocado en la necesidad de conocer las tendencias que se están manejando, las inspiraciones de las colecciones y las nuevas formas de comercializar los productos de moda, haciendo uso de los medios de comunicación y herramientas digitales tan importantes como el internet y las redes sociales. 

    p.mb-5 A grandes rasgos, según Estanyol (2020):

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-f.color-secundario.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-regular.bloque-texto-f__texto.text-center La historia de los eventos de moda registra que se llevaron a cabo desde finales del siglo XIX, donde diversos diseñadores de moda pensaron que la mejor forma de mostrar sus colecciones era presentarlas en movimiento, con ello surgen los desfiles de moda. Pasados unos años en París entre las décadas de los veinte y treinta, diseñadores como la famosa Coco Chanel, desarrollaban sus eventos privados con invitados exclusivos, había pocas modelos y se prohibía la entrada a fotógrafos. 
          .bloque-texto-f__autor.mb-3
            p.mb-0 #[strong Estanyol. ] (2020)
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/tema_7/img_2.png', alt='Texto que describa la imagen')

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-primario
        .row.justify-content-center(titulo="    ")
          .col-lg-11
            p Con el estallido de la Segunda Guerra Mundial, Nueva York encontró su oportunidad de ser el centro del foco de la moda ante el público internacional y Eleanor Lambert, fundadora del New York Dress Institute organizó el primer gran evento en la ciudad, denominado Press Week, que hasta ahora se conoce como Semana de la Moda de Nueva York, el cual, a diferencia de París, se pensó como una estrategia de relaciones públicas, identificando la importancia de los medios de comunicación. Paralelo a esto, se llevó a cabo la Met Gala, con la finalidad de recaudar fondos para el Instituto de Vestuario del Metropolitan Museum.

        .row.justify-content-center(titulo="    ")
          .col-lg-11
            p Al finalizar la Segunda Guerra Mundial, París quiere retomar los eventos de moda, con lo que Fédération de la Haute Couture et de la Mode decide que cada firma de moda debe presentar treinta piezas cada temporada, en estos actos ya se invitó a la prensa con la finalidad de la difusión de las firmas. De esta manera, aparece la Semana de la Moda en París en 1973, además de la Settimana della Moda di Milano instaurada por la Cámara de Comercio italiana. 
        


        .row.justify-content-center(titulo="    ")
          .col-lg-11
            p Con el paso del tiempo los tradicionales desfiles se presentaron en diversos eventos como fiestas, showrooms y encuentros entre diseñadores, proveedores, consumidores, modelos, medios de comunicación, etc. Con ello, se fueron multiplicando los eventos de moda alrededor del mundo, exponiendo nuevas técnicas, tendencias, colecciones en distintas estaciones del año y a su vez, las tecnologías igualmente fueron evolucionando para llevar las pasarelas a entornos digitales, lo que ha significado una gran ayuda para todas las empresas de moda que buscan innovar en sus procesos, viralizar sus productos y en el constante desarrollo de prendas para la satisfacción de los distintos mercados. 
            

    #t_7_2.titulo-segundo
      h2 7.2 Tipos de eventos de moda

    .row.align-items-center.mb-5.dflex.p-4
      .col-lg-6
        p Según Ruin (2018): 
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-0
            i.fas.fa-quote-left
            h3.text-regular Las empresas de moda se mantienen en una constante búsqueda de nuevas tendencias en cuanto a sus prendas, materiales, tecnologías para producción, medios de comunicación, etc. Esto tiene como finalidad la actualización y mejora en los procesos, formas de exponer productos además de afianzar la imagen corporativa de cada marca. Los eventos tienen diversas finalidades, pero todas se concentran en dar a conocer determinados productos desarrollados por una firma de moda.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Ruin  
            p.mb-0 2018

      .col-lg-6
        figure
          img(src='@/assets/curso/tema_7/img_3.png', alt='')

    p.mb-5 Para ello se dará a conocer los distintos formatos de acuerdo a lo indicado por el autor:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.color-tab.p-4(titulo="LOS DESFILES")
        .row
          .col-lg-6
            figure
              img.img-a(src='@/assets/curso/tema_7/img_4.png', alt='')
          .col-lg-4
            h2 Los desfiles
            p Se dividen en tres, desfiles prêt-à-porter o ropa usada solicitada por la masa; desfiles de alta costura que relatan creaciones artísticas y los desfiles de temporada o resort, que exponen prendas de las colecciones primavera-verano, otoño-invierno y crucero.
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="SHOWROOM")
        .row
          .col-lg-6
            figure
              img.img-a(src='@/assets/curso/tema_7/img_5.png', alt='')
          .col-lg-4
            h2 Showroom
            p Espacios más íntimos para mostrar las prendas y se dirigen a clientes exclusivos.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="EVENTOS ESPONSORIZADOS")
        .row
          .col-lg-6
            figure
              img.img-a(src='@/assets/curso/tema_7/img_6.png', alt='')
          .col-lg-4
            h2 Eventos esponsorizados
            p En este tipo de eventos, las marcas hacen uso de influenciadores o líderes de opinión para marcar tendencias entre el público.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="STREET EVENTS")
        .row
          .col-lg-6
            figure
              img.img-a(src='@/assets/curso/tema_7/img_7.png', alt='')
          .col-lg-4
            h2 Street events
            p Como su nombre lo indica, son eventos desarrollados en la calle.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="EVENTOS CON BLOGUEROS")
        .row
          .col-lg-6
            figure
              img.img-a(src='@/assets/curso/tema_7/img_8.png', alt='')
          .col-lg-4
            h2 Eventos con blogueros
            p Sobre todo en la apertura de tiendas se invita a blogueros e influenciadores para dar su punto de vista a través de redes sociales y generar una mayor difusión de la información.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="FASHION EXPERIENCE")
        .row
          .col-lg-6
            figure
              img.img-a(src='@/assets/curso/tema_7/img_9.png', alt='')
          .col-lg-4
            h2 Fashion experience
            p Eventos enfocados en la experiencia de los clientes al unir varios factores como el arte, las tecnologías y el #[i marketing] en espacios creativos.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="POP-UP STORES")
        .row
          .col-lg-6
            figure
              img.img-a(src='@/assets/curso/tema_7/img_10.png', alt='')
          .col-lg-4
            h2 Pop-up stores
            p Locales temporales donde se comercializan productos de una marca ya sea de la temporada actual o pasadas.

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
