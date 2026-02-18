<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Dentro de las propiedades se destacan las propiedades farmacológicas, relacionadas con efectos antimicrobianos, antiinflamatorios, antioxidantes y calmantes; la caracterización, que permite identificar su composición, origen y calidad; y la evaluación olfativa, fundamental para analizar la intensidad, pureza y perfil aromático de cada aceite.
    p Por otro lado, los usos farmacológicos abarcan múltiples sectores. En odontología, se emplean por sus efectos antisépticos y analgésicos; en la industria cosmética y de la perfumería, por su aroma y acción terapéutica; en la industria del jabón y los ambientadores, por sus propiedades desinfectantes y aromáticas; en la industria alimentaria y de licores, como saborizantes naturales; en la industria veterinaria, para mejorar la salud y productividad animal; y en la agricultura, como alternativas naturales para el control de plagas y enfermedades.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas, dividido en dos ejes principales: propiedades (farmacológicas, caracterización y evaluación olfativa) y usos farmacológicos, que incluyen aplicaciones en odontología, cosmética y perfumería, industria del jabón y ambientadores, industria alimentaria y de licores, veterinaria y agricultura.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
