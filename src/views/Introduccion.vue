<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los aceites esenciales de plantas aromáticas han despertado un creciente interés en los ámbitos científico, industrial y terapéutico debido a sus múltiples propiedades biológicas, su compleja composición química y su valor sensorial. Estas sustancias volátiles, obtenidas a partir de diferentes partes de las plantas, concentran compuestos activos responsables de efectos farmacológicos, aromáticos y funcionales que permiten su aplicación en diversos sectores. El presente documento aborda de manera integral las propiedades de los aceites esenciales, su caracterización y evaluación olfativa, así como sus principales usos y aplicaciones en campos como la odontología, la cosmética, la perfumería, la industria alimentaria, veterinaria y agrícola. A través de este recorrido, se busca brindar una comprensión clara y estructurada sobre el potencial de los aceites esenciales, destacando tanto su importancia científica como su aprovechamiento práctico.
          br
          br
       


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
