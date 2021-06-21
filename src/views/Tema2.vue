<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Categorías de moda

    p.mb-5 Así como el sistema moda contempla áreas, ésta también se clasifica de acuerdo con gamas o líneas de mercado dentro del sector de la moda. Observe el siguiente gráfico para que usted tenga información que le ayude clasificar el sistema de la moda en el mundo:

    figure
      img.img-a.mb-5(src='@/assets/curso/tema_2/img_1.svg', alt='Massprestige Colaboraciones')

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
