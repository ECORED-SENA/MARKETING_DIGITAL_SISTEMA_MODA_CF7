<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Ante la necesidad de reconocer las características del sistema moda, conforme a la estrategia de mercadeo de la empresa, surge el presente componente formación que lo llevará a una aproximación conceptual de la moda y su difusión en el mercado. En este sentido se ha diseñado el siguiente recurso educativo para que usted identifique aspectos necesarios para abordar el presente ambiente de aprendizaje. Bienvenido.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 La necesidad de mitigar la pandemia por COVID-19 ha obligado a la comunidad científica internacional, a desarrollar una serie de investigaciones y desarrollos tendientes a presentar una vacuna para hacerle frente a esta enfermedad que aumenta día a día su morbi mortalidad en Colombia. Es así, como en diciembre de 2020, la comunidad científica presenta los resultados de varios desarrollos de vacunas, que ofrecen eficacia y seguridad, respaldados por estudios clínicos rigurosos.

    .cajon--amarillo.p-4
      p Esperamos haber inspirado esta oportunidad de formación a través del recurso educativo observado. Es momento de pensar en el presente y construir condiciones para que consolide un proyecto personal y laboral que debe continuar a lo largo de la vida, porque el aprendizaje no termina aquí. Adelante. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
