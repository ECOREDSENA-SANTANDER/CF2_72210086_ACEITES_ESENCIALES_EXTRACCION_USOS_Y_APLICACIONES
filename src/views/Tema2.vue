<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Usos farmacológicos 

    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los aceites esenciales están compuestos por una amplia variedad de sustancias químicas que determinan sus propiedades aromáticas y farmacológicas. Entre estos compuestos se destacan los terpenos, alcoholes, aldehídos, cetonas y ésteres, los cuales influyen directamente en la actividad biológica de cada aceite esencial. El conocimiento de estos componentes permite comprender sus efectos terapéuticos, aplicaciones en aromaterapia y posibles contraindicaciones. A continuación, los principales grupos químicos presentes en los aceites esenciales y sus características más relevantes.
          br
          br
    
    .fondot2.p-5.mb-4
      .tarjeta.tarjeta--gris.p-4
        PasosB.color-primario
          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img02.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Terpenos hidrocarbonados
              p Estas sustancias están presentes principalmente en los aceites esenciales de la cáscara de cítricos, pino y anís, los cuales poseen propiedades antisépticas, energizantes y tonificantes. El aceite de limón se utiliza farmacológicamente para la elaboración de productos destinados a combatir infecciones, mientras que el aceite esencial de pino actúa como un potente desinfectante, activador de la circulación, antigripal y tónico, con efectos suavizantes y calmantes para la piel.
          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img03.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Cineol
              p Sustancia presente en el aceite esencial de eucalipto, reconocida por sus efectos expectorantes. También se encuentra en plantas como la marihuana. Es responsable de los aromas frescos característicos del eucalipto, la menta, el romero, las hojas de laurel y la albahaca. Diversos estudios sugieren efectos positivos de aceites esenciales que contienen cineol, como el aceite de romero en pacientes con alzhéimer y demencia, ya que estimula la memoria y el aprendizaje.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img04.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Hidrocarburos sesquiterpénicos
              p Un ejemplo representativo es el camazuleno, compuesto con notables efectos farmacológicos, presente en especies como la manzanilla y el ajenjo. Este compuesto confiere propiedades antiinflamatorias, antigripales y antialérgicas.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img05.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Sesquiterpenoles y sesquiterpenos
              p Estos compuestos se encuentran en el vetiver, cuyo aceite esencial posee diversas propiedades terapéuticas y se emplea también en la fabricación de perfumes, jabones y saborizantes. Entre sus propiedades farmacológicas destacan su acción antiséptica, ya que ayudan a crear un ambiente libre de infecciones y bacterias, y su efecto antiinflamatorio, asociado a su capacidad relajante y refrescante. En infusión, presentan efectos calmantes.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img06.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Sesquiterpenlactonas
              p Sustancias presentes en especies de la familia Asteraceae, con múltiples propiedades, entre ellas: antimicrobianas, citotóxicas, antiinflamatorias, anticancerígenas, antivirales y antifúngicas. Además, pueden generar efectos sobre el sistema nervioso central y cardiovascular, así como una importante potencia alergénica. Se encuentran en especies del género Calea.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img07.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Alcoholes y ésteres
              p Estos compuestos aportan a los aceites esenciales propiedades antiinfecciosas y reguladoras hormonales. Las especies vegetales utilizadas en aromaterapia suelen presentar altas concentraciones de estos compuestos, como el palo de rosa, la lavanda y la salvia.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img08.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Aldehídos
              p Dentro de los aceites esenciales se encuentran dos tipos principales de aldehídos. El citral, presente en el aceite de hierba de limón, posee efectos antivirales y antisépticos. El citronelal, presente en el aceite de citronela, presenta propiedades sedantes y antiinflamatorias.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img09.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Aldehídos aromáticos
              p Los aldehídos aromáticos, como el aldehído cinámico presente en el aceite de canela y el aldehído cumínico, constituyente de los aceites esenciales de eucalipto, mirra, comino y cassia, poseen propiedades antiinfecciosas, aunque pueden resultar irritantes para la piel y las mucosas. El eugenol, otro aldehído aromático presente en la esencia de clavo, presenta fuertes propiedades antibacterianas cuando se utiliza en pequeñas dosis.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img10.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Cetonas
              p Las cetonas, como la tuyona encontrada en el aceite esencial de Thuja (especie norteamericana de ciprés), confieren propiedades calmantes, regenerativas y cicatrizantes del tejido cutáneo. No obstante, pueden resultar tóxicas si su uso no es moderado, por lo que algunos aceites que las contienen están contraindicados en mujeres embarazadas.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img11.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Fenoles
              p Compuestos como el timol y el carvacrol poseen propiedades antisépticas, antibacterianas y desinfectantes, por lo que se emplean en tratamientos respiratorios y digestivos. Sin embargo, pueden resultar irritantes para las mucosas y tóxicos para el hígado. Aceites representativos de esta categoría son el de canela y el de clavo de olor.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img12.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Fenilpropanos
              p Los aceites esenciales que contienen estos compuestos se caracterizan por sus efectos digestivos y antiespasmódicos. Un ejemplo es la albahaca, cuyo aceite esencial posee fenilpropanos que le confieren propiedades farmacológicas útiles en el tratamiento de náuseas, vómitos, indigestiones, resfriados, problemas respiratorios y diabetes, entre otras afecciones.

          .row.justify-content-center(titulo="")
            .col-lg-6.col-md-9.mb-3
              figure
                img(src='@/assets/curso/Tema2/img13.png', alt='')
            .col-lg-6.mb-4.mb-md-0
              h4 Ésteres
              p Los aceites esenciales ricos en ésteres se caracterizan por su aroma fragante y afrutado. Entre sus propiedades farmacológicas se encuentran los efectos sedantes y antiespasmódicos. Los ésteres presentes en el aceite de geranio poseen propiedades antimicrobianas y antimicóticas. El acetato de linalilo, común en aceites esenciales como la lavanda, la salvia romana y el #[em petitgrain], destaca por su suavidad, lo que permite su uso para aliviar dolores y tratar picaduras o quemaduras.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2.
      span  Compuestos de aceites esenciales farmacológicos 

    .tabla-a.color-acento-botones.mb-4(data-aos="fade-left")
      table
        thead
          tr
            th.bg3.negro Grupo químico
            th.bg3.negro Aceites
            th.bg3.negro Propiedades principales
            th.bg3.negro Observaciones
        tbody
          tr.bg2.text-center
            th.h4 Terpenos hidrocarbonados
            td Limón, pino, anís
            td Antisépticos, energizantes, tonificantes
            td Activadores circulatorios y antigripales
          tr.text-center
            th.h4 Cineol
            td Eucalipto, romero, menta
            td Expectorante, estimulante cognitivo
            td Estimula memoria y aprendizaje
          tr.bg2
            th.h4 Hidrocarburos sesquiterpénicos
            td Manzanilla, ajenjo
            td Antiinflamatorios, antialérgicos
            td Contienen camazuleno
          tr
            th.h4 Sesquiterpenoles y sesquiterpenos
            td Vetiver
            td Antisépticos, antiinflamatorios, calmantes
            td Uso terapéutico y cosmético
          tr.bg2
            th.h4 Sesquiterpenlactonas
            td Calea (Asteraceae)
            td Antimicrobianas, antivirales, citotóxicas
            td Alta potencia alergénica
          tr
            th.h4 Alcoholes y ésteres
            td Lavanda, salvia, palo de rosa
            td Antiinfecciosos, reguladores hormonales
            td Muy usados en aromaterapia
          tr.bg2
            th.h4 Aldehídos
            td Hierba de limón, citronela
            td Antivirales, antisépticos, sedantes
            td Uso frecuente en infecciones
          tr
            th.h4 Aldehídos aromáticos
            td Canela, clavo, eucalipto
            td Antiinfecciosos, antibacterianos
            td Irritantes en altas dosis
          tr.bg2
            th.h4 Cetonas
            td Thuja
            td Calmantes, regenerativas, cicatrizantes
            td Pueden ser tóxicas
          tr
            th.h4 Fenoles
            td Canela, clavo de olor
            td Antisépticos, desinfectantes
            td Irritantes y hepatotóxicos
          tr.bg2
            th.h4 Fenilpropanos
            td Albahaca
            td Digestivos, antiespasmódicos
            td Útiles en trastornos digestivos
          tr
            th.h4 Ésteres
            td Geranio, lavanda
            td Sedantes, antiespasmódicos
            td Suaves y bien tolerados

    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1 Usos en la odontología

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Los aceites esenciales han adquirido una relevancia creciente en el ámbito odontológico, y su utilización ha aumentado en los consultorios debido a las propiedades terapéuticas de sus aromas, así como a sus efectos curativos y antisépticos. Estos compuestos naturales contribuyen al control de infecciones, a la desinfección de tejidos y al bienestar del paciente durante los procedimientos clínicos.
        .cajon.color-secundario.p-3.p-lg-4.h-100
          p.py-3 El uso de determinados aromas en los consultorios odontológicos, como la lavanda, genera efectos relajantes en los pacientes, contribuyendo a la disminución de la ansiedad asociada a los tratamientos dentales y al dolor percibido durante procedimientos como la inserción de agujas. De igual manera, los aceites esenciales de naranja han demostrado tener efectos positivos en la reducción de la ansiedad en los pacientes.
      .col-lg-5
        img(src='@/assets/curso/Tema2/img14.png', alt='')

    p.mb-4 Además, muchas esencias poseen propiedades regenerativas, oxigenantes y fortalecedoras del sistema inmunológico. Estas ayudan a prevenir la proliferación de hongos, mutaciones celulares y procesos de oxidación, gracias a su acción antioxidante. Asimismo, son ampliamente utilizadas por sus características antimicrobianas y antibacterianas, ya que permiten reducir de forma significativa la presencia de bacterias insalubres y potencialmente peligrosas en la cavidad oral. Por esta razón, numerosos aceites naturales se incorporan en la formulación de enjuagues bucales.
    
    .row.justify-content-center.g-0.mb-4(data-aos='fade-right')
        .col-lg-4.pe-lg-0
          .bg1.h-100
            img.w-100.h-100(src='@/assets/curso/Tema2/img15.png', alt='')
        .col-lg-8.ps-lg-0
          .bg6.p-4.p-lg-5.h-100
            p.text-white Los aceites esenciales de canela y clavo de olor presentan un efecto inhibitorio sobre la formación de la placa bacteriana dental. En particular, el aceite de clavo de olor actúa como un potente agente antifúngico y antibacteriano, por lo que resulta eficaz en el tratamiento del dolor dental y la sequedad bucal. Sus elevados contenidos de calcio, hierro, fósforo, sodio y vitaminas A y C estimulan la cicatrización, motivo por el cual se utiliza como analgésico tópico.
            p.text-white Por otra parte, el aceite esencial de eucalipto se emplea en tratamientos selladores y como solvente en rellenos de conductos radiculares, debido a sus propiedades antimicrobianas. Finalmente, el aceite de árbol de té es utilizado como agente antifúngico y antiséptico gracias a sus propiedades curativas y desinfectantes, siendo especialmente útil en el tratamiento de la candidiasis oral, una afección causada por la proliferación excesiva del microorganismo bucal Candida.
        
    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2 Usos en la industria cosmética y de la perfumería

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        p Los aceites esenciales son ampliamente utilizados en la industria cosmética, donde se aprovechan tanto sus aromas como sus propiedades terapéuticas asociadas a la aromaterapia, con el fin de aumentar la eficacia de los productos elaborados. Un ejemplo de ello es el aceite esencial de naranja, empleado en tratamientos destinados a la reducción de la celulitis.s
        .cajon.color-secundario.p-3.p-lg-4.h-100.mb-3 
          p.py-3 En la industria de los champús y productos capilares, los aceites esenciales aportan propiedades específicas para el cuidado de los distintos tipos de cabello. Por ejemplo, el aceite esencial de manzanilla se utiliza comúnmente en productos para cabellos claros, mientras que el aceite esencial de romero se emplea en formulaciones para cabellos oscuros, debido a sus efectos estimulantes y fortalecedores.
        p Por su parte, en la industria de la perfumería, los aceites esenciales desempeñan un papel fundamental, ya que proporcionan aromas intensos y característicos. Generalmente, se combinan con otros compuestos aromáticos para lograr fragancias equilibradas y agradables. 
        p Para la elaboración de perfumes, los aceites esenciales se clasifican en tres categorías principales según su volatilidad y persistencia:
      .col-lg-4
        img(src='@/assets/curso/Tema2/img16.png', alt='')
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg7.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12.mb-3
              img(src='@/assets/curso/Tema2/1.png' alt='')
          h4.text-center Aceites esenciales de nota alta
          p.text-center Son los más volátiles, por lo que constituyen los primeros aromas que se perciben al aplicar el perfume y también los primeros en desaparecer. Entre los ejemplos más comunes se encuentran los aceites esenciales de naranja, limón, menta, eucalipto y romero.
      
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg7.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12.mb-3
              img(src='@/assets/curso/Tema2/2.png' alt='')
          h4.text-center Aceites esenciales de nota media
          p.text-center Conforman el corazón del perfume y predominan sobre el resto de las notas. Son los aromas que más perduran y representan el componente principal de la fragancia. Dentro de esta categoría se incluyen aceites esenciales como los de lavanda, jazmín, manzanilla, jengibre y geranio.

      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg7.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12.mb-3
              img(src='@/assets/curso/Tema2/3.png' alt='')
          h4.text-center Aceites esenciales de nota baja
          p.text-center También conocidos como notas de fondo o base, tienen como función principal fijar y prolongar la duración de las notas altas y medias, permitiendo que el perfume conserve su aroma durante más tiempo. Entre los aceites esenciales de nota baja se encuentran los de canela, clavo, sándalo, pachulí y vainilla.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3.
      span Aceites esenciales usados en perfumería 

    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg3.w-25.negro Aceite esencial
            th.bg3.w-75.negro Características
        tbody
          tr.bg2
            th.h4 Aceite de agar
            td.text-left Se extrae de la madera de un árbol originario de Asia, conocido como agar. Su cultivo es muy localizado y su alta demanda hace que su precio sea elevado. Se encuentra presente en numerosos perfumes de notas amaderadas, tanto masculinos como femeninos.
          tr
            th.h4 Aceite de bergamota
            td.text-left Proviene de un cítrico de fruto pequeño, con una forma similar a la pera. Se cultiva en zonas cálidas y se encuentra principalmente en regiones del Mediterráneo y América del Sur. Posee un aroma intenso y ligeramente ácido, por lo que es ampliamente utilizado en perfumería y aromaterapia.
          tr.bg2
            th.h4 Aceite de canela
            td.text-left Se extrae de la corteza externa del árbol de canela. Su uso en perfumería es refinado y costoso. Aporta un aroma dulce y cálido a las fragancias; aunque suele asociarse a perfumes femeninos, también se utiliza en perfumes masculinos como nota complementaria.
          tr
            th.h4 Aceite de cedro
            td.text-left Este aceite se obtiene de la madera y la corteza del árbol de cedro. Su aroma amaderado y profundo es altamente valorado y demandado por la industria de la perfumería, especialmente en fragancias de notas secas y persistentes.
          tr.bg2
            th.h4 Aceite de jazmín
            td.text-left Se extrae de las flores blancas del jazmín, las cuales suelen abrirse durante la noche. Produce un aroma intenso y elegante, lo que lo convierte en un ingrediente básico de perfumes femeninos reconocidos, como #[em Chanel] Nº 5 y #[em Eau de Sauvage].
          tr
            th.h4 Aceite de limón o citronela
            td.text-left Son aceites esenciales cítricos con características aromáticas similares. Aportan dulzor y frescura a las fragancias, lo que los hace ideales para notas altas en perfumes y productos cosméticos.
          tr.bg2
            th.h4 Aceite de pachulí
            td.text-left Se obtiene de las hojas ligeramente fragantes y de las flores blancas y violetas de una planta cultivada en Asia, América del Sur y otras regiones tropicales, como Hawái. Su aroma se intensifica con el paso del tiempo y es muy solicitado en perfumería por su capacidad de fijar y prolongar la fragancia.
          tr
            th.h4 Aceite de #[em ylang-ylang]
            td.text-left Esta planta se cultiva en Asia y en Norte, Centro y Suramérica. Su nombre significa “flor de flores”, de donde se extrae la esencia. Es ampliamente utilizada en perfumería debido a su aroma dulce, floral y agradable.


    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3 Usos en la industria del jabón y de los ambientadores











</template>

<script>
export default {
  name: 'Tema2',
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
