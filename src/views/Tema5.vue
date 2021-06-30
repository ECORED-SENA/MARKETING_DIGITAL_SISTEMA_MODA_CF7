<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Tendencias de moda y consumo

    p.mb-5 Una tendencia hace referencia a una inclinación o disposición que tiene un grupo, comunidad o sociedad hacia un elemento o grupos de elementos, puede ser tangible e intangible, siendo así una tendencia puede generar gustos por elementos de diferentes áreas, incluso que generen coincidencia o adaptación de ideas y hasta corrientes que surgen de una sociedad. 

    .row.justify-content-center.mb-5
      .col-lg-11
        p.BorTit Figura 13. Quince Tendencias de Moda.
        figure
          img.img-a(src='@/assets/curso/tema_5/img_1.png', alt='')
          figcaption Nota. Tendencias de moda (2020). 
      
    #t_5_1.titulo-segundo
      h2 5.1 Tendencias de moda

    p.mb-5 Como se ha mencionado anteriormente, las tendencias tienden a nacer de múltiples factores, que se representan en el sistema moda, funcionando a su vez como respuesta a un fenómeno que cargado de simbolismos en el vestuario produce que se masifique dicha tendencia.
    
    .tarjeta.color-tarje.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img.img-a(src="@/assets/curso/tema_5/img_2.png")

        .col-md.col-lg-6
          .titulo-segundo
            h2 ¿De dónde nacen las tendencias de moda?
          p.mb-4 Apreciado aprendiz, con la intención de acercarlo a la conceptualización de las tendencias del sector moda, lo invitamos a explorar el siguiente recurso educativo  ya que esto permitirá su aplicabilidad en el sector laboral ¿estás listo?
          
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/Infografia_CF7_5.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    p.mb-5 Las teorías se logran comprender a partir de las siguientes teorías, las cuales establecen una difusión de tendencias:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.color-tab.p-4(titulo="TRICKLE DOWN")
        h4 Trickle down o transmisión vertical hacia abajo
        p Fue propuesta por George Simmel en 1905, enfocada en que esto es impuesto por las clases altas en un afán de distinción y muestra a toda la sociedad esto incluye clases sociales bajas, como bien se ha dicho la moda se impone bajo un modelo de imitación, es aquí donde las clases bajas toman estos referentes y los apropian.
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="TRICKLE ACROSS")
        h4 Trickle across o transmisión horizontal 
        p Fue propuesta por Charles W. King en 1963, en los que influyen factores sociales y culturales como ambientes sociales en constante evolución, impacto que los medios de comunicación ejercen en todo el público, incluyen todas las clases sociales, mercadotecnia, está enfocada en las diversas estrategias para su distribución, no necesita validación externa y surge de las clases sociales altas.
        
      .tarjeta.color-acento-contenido--borde.p-4(titulo="TRICKLE UP")
        h4 Trickle up o transmisión vertical hacia arriba
        p Fue propuesta por George A. Fiel en 1970, similar a la primera, afirma que no necesariamente la clase alta impone o difunde las tendencias, sino que también funciona desde las clases inferiores hacia arriba, esto es generado por fenómenos como la apropiación de culturas, estilos y estéticas.

    .row.justify-content-center
      .col-lg-8
        .cajon--morado_1.p-4.mb-5
          p Fenómenos como la globalización ha generado que sociedades y culturas establecidas se apropien de otras en cuanto a estilos, esto para muchos diseñadores ha servido como fuente de inspiración para la creación de colecciones.

    .row.justify-content-center
      .col-lg-7
        a.anexo.mb-4(:href="obtenerLink('/downloads/Texto_Concepto_Moda.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo 2.] En este sentido para darle más sentido a lo expresado hasta aquí le sugerimos valorar otros aspectos sobre las Tendencias de la Moda revisando el siguiente texto seleccionado del Sistema de Bibliotecas del SENA.


    #t_5_2.titulo-segundo
      h2 5.2 Observatorio de tendencias

    p.mb-5 Dentro de las tendencias como se pudo observar anteriormente, son diferentes actores los que generan la masificación de las tendencias, para entender cómo nace una y cómo llega a implementarse, es importante mencionar y categorizar a quienes hacen posible este fenómeno. Para ello se utilizará #[strong la curva de adopción de la innovación propuesta por Everett Rogers en 1962] (Emprende A Conciencia, 2021) explicada a continuación:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
