<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Propiedades
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p Gracias a la diversidad de propiedades que presentan los aceites esenciales, su uso en la industria es amplio y versátil. Estos compuestos se emplean en la elaboración de numerosos productos, tales como aromatizantes, ambientadores, perfumes, licores, alimentos y artículos de limpieza y cuidado personal, entre los que se incluyen jabones, champús, cremas y desodorantes.
          p En consecuencia, los aceites esenciales presentan una alta demanda en distintos sectores industriales, debido a su amplia gama de aplicaciones y a las múltiples propiedades que poseen, entre las que se destacan las siguientes:
        .col-lg-5
          img(src='@/assets/curso/Tema1/img01.png', alt='')
      
      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1 Propiedades farmacológicas

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12.mb-4
          img(src='@/assets/curso/Tema1/img02.png', alt='')
        .col-lg-12 
          p El aprovechamiento de las propiedades farmacológicas de los aceites esenciales se conoce como aromaterapia. Estos compuestos pueden aplicarse mediante masajes, previamente diluidos en aceites vehiculares o de base, así como por inhalación, al ser diluidos en agua caliente y vaporizados. Estas técnicas se utilizan como terapias complementarias, ya que pueden contribuir al bienestar físico y emocional cuando se emplean de manera adecuada y controlada.

      .fondot1.p-3.mb-5(data-aos="fade-left") 
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-md-10
            p.text-white Diversos estudios científicos han evidenciado que los aceites esenciales poseen efectos biológicos y terapéuticos relevantes, asociados principalmente a sus propiedades relajantes, sedantes, estimulantes, antioxidantes, antiinflamatorias y antimicrobianas. Asimismo, se ha observado que algunos aceites esenciales pueden influir positivamente en funciones cognitivas y estados emocionales, como el estrés y la ansiedad, debido a la interacción de sus compuestos bioactivos con distintos sistemas fisiológicos del organismo.
            p.text-white No obstante, la actividad farmacológica de los aceites esenciales implica también posibles riesgos para la salud cuando su uso no se realiza bajo criterios profesionales adecuados, especialmente en relación con la vía de administración, la dosificación y la duración del tratamiento. Por ello, su aplicación debe considerarse complementaria y fundamentarse en el conocimiento de su composición química y mecanismos de acción.
          .col-lg-4.col-md-7
            img(src='@/assets/curso/Tema1/img03.png', alt='')


      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          .row
            .col-lg-1
              img(src='@/assets/curso/Tema1/ico1.svg', alt='')
            .col-lg-11
              p Desde el punto de vista bioquímico, los aceites esenciales están constituidos por una mezcla compleja de metabolitos secundarios, entre los que destacan los terpenos y fenilpropanoides, compuestos responsables de gran parte de sus efectos farmacológicos. Estas sustancias pueden interactuar con diversos sistemas del cuerpo humano, lo que explica su potencial terapéutico y la necesidad de un uso responsable y fundamentado en la evidencia científica.
          p Los aceites esenciales están constituidos principalmente por compuestos orgánicos volátiles de bajo peso molecular, sintetizados por las plantas como parte de su metabolismo secundario. Estos compuestos son los responsables de sus propiedades farmacológicas y se agrupan, principalmente, en las siguientes clases químicas:

      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left") 
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1.
            span Los constituyentes de los aceites esenciales con propiedades farmacológicas
        .tabla-a.color-acento-botones.mb-4(data-aos="fade-left")
          table
            thead
              tr
                th.bg3.negro Clase química
                th.bg3.negro Descripción genera
                th.bg3.negro Ejemplos de compuesto
                th.bg3.negro Principales propiedades farmacológicas
            tbody
              tr.bg2
                th.h4 Monoterpenos
                td.text-left Hidrocarburos volátiles derivados del isopreno; constituyen una fracción importante de muchos aceites esenciales.
                td.text-left Limoneno, α-pineno, β-pineno, mirceno.
                td.text-left Antiinflamatorias, antimicrobianas, analgésicas.
              tr
                th.h4 Monoterpenos oxigenados (terpenoides)
                td.text-left Monoterpenos que contienen oxígeno, lo que incrementa su actividad biológica.
                td.text-left Linalol, mentol, cineol (eucaliptol), borneol.
                td.text-left Antisépticas, relajantes, expectorantes, neuroprotectoras.
              tr.bg2
                th.h4 Sesquiterpenos
                td.text-left Compuestos de mayor peso molecular, menos volátiles y más estables.
                td.text-left β-cariofileno, humuleno, farneseno.
                td.text-left Antiinflamatorias, sedantes, cicatrizantes.
              tr
                th.h4 Sesquiterpenos oxigenados
                td.text-left Sesquiterpenos con grupos funcionales oxigenados.
                td.text-left Bisabolol, nerolidol.
                td.text-left Calmantes, antiinflamatorias, regeneradoras tisulares.
              tr.bg2
                th.h4 Fenilpropanoides
                td.text-left Compuestos aromáticos derivados de la fenilalanina, con alta actividad biológica.
                td.text-left Eugenol, anetol, cinamaldehído, safrol.
                td.text-left Antimicrobianas, antioxidantes, analgésicas.
              tr
                th.h4 Alcoholes
                td.text-left Generalmente bien tolerados, con acción suave pero eficaz.
                td.text-left Linalol, geraniol, terpineol.
                td.text-left Antisépticas, relajantes, ansiolíticas.
              tr.bg2
                th.h4 Aldehídos
                td.text-left Compuestos altamente reactivos, responsables de aromas intensos.
                td.text-left Citral, citronelal, cinamaldehído.
                td.text-left Antibacterianas, antifúngicas, antiinflamatorias.
              tr
                th.h4 Cetonas
                td.text-left Sustancias con efectos potentes que requieren control en su uso.
                td.text-left Alcanfor, tuyona, verbenona.
                td.text-left Expectorantes, cicatrizantes, estimulantes.
              tr.bg2
                th.h4 Ésteres
                td.text-left Compuestos aromáticos suaves y generalmente seguros.
                td.text-left Acetato de linalilo, acetato de geranilo.
                td.text-left Sedantes, antiespasmódicas, relajantes musculares.

      p.mb-4 Entre las principales propiedades atribuidas a los aceites esenciales se incluyen acciones antisépticas, cicatrizantes, antiinflamatorias, antioxidantes, antiparasitarias, así como efectos antirreumatológicos, antineurálgicos y antiespasmódicos. La combinación de estos efectos permite su aplicación en el manejo de diversas afecciones, siempre que su uso se realice de manera responsable y bajo criterios técnicos y de seguridad. A continuación, se presentan las principales propiedades:

      .tarjeta.bg4.p-4(data-aos="fade-left") 
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7.mb-0.mb-md-0.col-md-12
              h4.text-white Propiedades antisépticas
              p.text-white El marcado poder antiséptico de numerosas esencias convierte a los aceites esenciales en compuestos de alto valor terapéutico, ya que su actividad no se ve significativamente disminuida con el paso del tiempo y varía según su composición química. Esta propiedad se manifiesta principalmente en aceites esenciales ricos en compuestos fenólicos, los cuales presentan elevada capacidad antimicrobiana. La acción antiséptica puede ejercerse tanto en fase vapor como por contacto directo; sin embargo, en este último caso, es indispensable su dilución previa para evitar efectos irritantes sobre la piel y las mucosas.
              ul.lista-ul
                li
                  p.text-white.mb-0 •	Limón. 
                li
                  p.text-white.mb-0 •	Tomillo.
                li
                  p.text-white.mb-0 •	Naranja.  
                li
                  p.text-white.mb-0 •	Bergamota.
                li
                  p.text-white.mb-0 •	 Enebro.

            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/sli1.png', alt='')

          .row.justify-content-center.align-items-center.p-4
            .col-lg-7.mb-0.mb-md-0.col-md-12
              h4.text-white Propiedades cicatrizantes
              p.text-white En general, los aceites esenciales con propiedades antisépticas también favorecen la cicatrización, ya que previenen infecciones y crean condiciones adecuadas para la reparación tisular. Algunos aceites esenciales presentan una acción cicatrizante más específica, especialmente aquellos obtenidos de plantas de la familia Lamiaceae, los cuales estimulan los procesos de regeneración y reparación de los tejidos, favoreciendo la cicatrización de úlceras, heridas y llagas cutáneas.
              ul.lista-ul
                li
                  p.text-white.mb-0 • Lavanda. 
                li
                  p.text-white.mb-0 • Salvia.
                li
                  p.text-white.mb-0 • Romero.  
                li
                  p.text-white.mb-0 • Tomillo.

            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/sli2.png', alt='')

          .row.justify-content-center.align-items-center.p-4
            .col-lg-7.mb-0.mb-md-0.col-md-12
              h4.text-white Propiedades antirreumatológicas, antineurálgicas y antiespasmódicas
              p.text-white Diversos aceites esenciales presentan estas propiedades debido a la acción de sus compuestos bioactivos sobre los mediadores de la inflamación. Sustancias como el eugenol, la verbenona y el timol han mostrado efectos antiartríticos y antirreumáticos asociados a la modulación de la síntesis de prostaglandinas, compuestos lipídicos con funciones similares a las hormonas. Estas propiedades permiten su uso complementario en el manejo del dolor articular, muscular y nervioso.
              ul.lista-ul
                li
                  p.text-white.mb-0 • Clavo. 
                li
                  p.text-white.mb-0 • Canela.
                li
                  p.text-white.mb-0 • Tomillo.  
                li
                  p.text-white.mb-0 • Romero.
                li
                  p.text-white.mb-0 • Manzanilla.

            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/sli3.png', alt='')

          .row.justify-content-center.align-items-center.p-4
            .col-lg-7.mb-0.mb-md-0.col-md-12
              h4.text-white Propiedades antiparasitarias
              p.text-white Las propiedades antiparasitarias se manifiestan tanto en la capacidad de repeler insectos como en la acción contra parásitos internos. Algunas esencias actúan como repelentes naturales, mientras que otras poseen actividad antihelmíntica, es decir, actúan frente a parásitos intestinales. No obstante, debido a que la dosis terapéutica puede ser cercana a la dosis tóxica, su uso debe realizarse bajo supervisión profesional.
              ul.lista-ul
                li
                  p.text-white.mb-0 • Tomillo. 
                li
                  p.text-white.mb-0 • Geranio.
                li
                  p.text-white.mb-0 • Laurel.  
                li
                  p.text-white.mb-0 • Paico.
                li
                  p.text-white.mb-0 • Boldo.
                li
                  p.text-white.mb-0 • Ajenjo.
                li
                  p.text-white.mb-0 • Eucalipto.

            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/sli4.png', alt='')

          .row.justify-content-center.align-items-center.p-4
            .col-lg-7.mb-0.mb-md-0.col-md-12
              h4.text-white Propiedades antiinflamatorias
              p.text-white Diversos aceites esenciales poseen propiedades antiinflamatorias, lo que los hace adecuados para su uso en productos tópicos destinados al alivio de procesos inflamatorios. Son ampliamente utilizados en cremas, talcos y pomadas, destacándose por su eficacia y baja toxicidad cuando se emplean adecuadamente, lo que permite su uso incluso en formulaciones pediátricas.
              ul.lista-ul
                li
                  p.text-white.mb-0 • Manzanilla. 
                li
                  p.text-white.mb-0 • Cidrón.
                li
                  p.text-white.mb-0 • Jazmín.

            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/sli5.png', alt='')

          .row.justify-content-center.align-items-center.p-4
            .col-lg-7.mb-0.mb-md-0.col-md-12
              h4.text-white Propiedades antioxidantes
              p.text-white La actividad antioxidante de algunos aceites esenciales contribuye a la neutralización de radicales libres y a la protección frente al daño oxidativo. Esta propiedad resulta de gran interés tanto en aplicaciones terapéuticas como en la industria alimentaria y cosmética, ya que ayuda a prevenir procesos de oxidación y deterioro celular.
              ul.lista-ul
                li
                  p.text-white.mb-0 • Romero. 
                li
                  p.text-white.mb-0 • Salvia.
                li
                  p.text-white.mb-0 • Tomillo.
                li
                  p.text-white.mb-0 • Orégano.

            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/sli6.png', alt='')


      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2 Caracterización

      p.mb-4 La obtención de aceites esenciales con calidad terapéutica constituye un proceso delicado y riguroso, ya que estas sustancias deben cumplir con estrictos criterios de calidad para garantizar su eficacia y seguridad. Para ello, es fundamental que los aceites esenciales se encuentren adecuadamente caracterizados, considerando y relacionando diversos factores que influyen directamente en su composición, pureza y actividad biológica, entre los cuales se encuentran los siguientes:
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1. 
            span Criterios de calidad
          img(src='@/assets/curso/Tema1/fig1.svg', alt='La caracterización de los aceites esenciales de calidad terapéutica depende de diversos factores determinantes que influyen directamente en su composición química y eficacia. Entre estos se incluyen la certificación botánica de la especie vegetal, el origen geográfico, el modo de cultivo, el momento de la recolección, el órgano destilado, el método de extracción empleado y el quimiotipo, los cuales permiten garantizar la autenticidad, pureza y calidad del aceite esencial obtenido.')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/gota.svg")
            h3.bg5.py-2.w-card-text.text-white La certificación botánica

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5.mb-3
          img(src="@/assets/curso/Tema1/img04.png")
        .col-lg-7
          p El primer paso en la caracterización de un aceite esencial consiste en la correcta identificación de la fuente vegetal de la cual se obtiene, incluyendo tanto la especie botánica como el órgano de la planta utilizado. Para ello, es indispensable establecer el nombre común o vulgar de la planta (el cual puede variar según la región geográfica) y, de manera fundamental, su nombre botánico o identificación taxonómica, que es universal y no presenta variaciones entre idiomas o localidades.
          p La identificación taxonómica está conformada por el nombre del género y de la especie, y puede complementarse, cuando corresponde, con la subespecie y la variedad. Por ejemplo, mandarina es el nombre común, mientras que su identificación taxonómica es Citrus reticulata. Este tipo de clasificación permite evitar confusiones derivadas del uso de nombres comunes, ya que existen plantas diferentes que comparten una misma denominación vulgar, así como una misma especie que puede recibir distintos nombres comunes en diversas regiones.
        .col-lg-12
          p La certificación botánica, por tanto, garantiza la autenticidad del material vegetal empleado y constituye un requisito esencial para asegurar la calidad, seguridad y reproducibilidad de los aceites esenciales obtenidos.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/gota.svg")
            h3.bg5.py-2.w-card-text.text-white El origen geográfico 

      p.mb-3 Constituye un criterio fundamental en la caracterización de los aceites esenciales, ya que el nombre de un país o de una región aporta información relevante sobre el biotipo o entorno en el que se desarrolla la planta aromática.






  </template>

<script>
export default {
  name: 'Tema1',
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
