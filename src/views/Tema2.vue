<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Categorías de moda

    p.mb-5 Así como el sistema moda contempla áreas, ésta también se clasifica de acuerdo con gamas o líneas de mercado dentro del sector de la moda. Observe el siguiente gráfico para que usted tenga información que le ayude clasificar el sistema de la moda en el mundo:

    ImagenInfografica.color-primario.mb-5

      template(v-slot:imagen)
        figure
          img.img-a(src='@/assets/curso/tema_2/img_1.svg', alt='Massprestige Colaboraciones')

      .tarjeta.color-secundario.p-3(x="56%" y="7%")
        p.mb-0 Son prendas exclusivas a la medida del cliente y con un estricto proceso de calidad. 
        p La alta costura tiene su propio centro llamada cámara sindical de alta costura. Este gremio fue creado inicialmente por el ya mencionado Alfred Frederick Worth.


      .tarjeta.color-secundario.p-3(x="56%" y="23%")
        p Son prendas producidas en serie con patrones que se repiten, estas siguen las tendencias y elementos que se dan en la alta costura. Las colecciones son presentadas por diferentes casas de moda en: semanas de la moda.

      .tarjeta.color-secundario.p-3(x="56%" y="54%")
        p Esta línea se maneja dentro de lo que ahora se llama #[i midi couture], que permite generar prendas no tan costosas empleando textiles con bordados generados industrialmente, esto hace que sea menos costoso


      .tarjeta.color-secundario.p-3(x="56%" y="69%")
        p Es una gama que se produce para las masas a precios muy bajos. Utiliza materiales de baja calidad dado que necesitan producir a una escala gigante, para circular sus productos, en este modelo se contempla la producción de series cortas basados en tendencias del momento.

      .tarjeta.color-secundario.p-3(x="27%" y="66%")
        p Actualmente esta línea ha hecho impulsar fenómenos como el slow fashion y como la sostenibilidad juega un rol importante en la generación de productos, debido a las grandes cantidades de desecho textiles, lo que en ultimas genera un impacto medioambiental altísimo en contra del planeta.




    p.mb-5 Dentro de las gamas de mercado se hace necesario diferenciar las tipologías de productos y características que ofrecen dentro de cada línea, por ejemplo, aunque se hable de una camisa, esta camisa será diferente en cada una de estas líneas, esto porque su costo será diferencial en la medida en la que factores como la calidad, materia prima, acabados influyan en el precio final, respondiendo a un público objetivo. En el siguiente gráfico se podrá apreciar la categoría de producto, en cuanto al tipo, nivel y ubicación en el mercado:

    figure
      img.img-a(src='@/assets/curso/tema_2/img_2.svg', alt='nivel y ubicación en el mercado')


    
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
