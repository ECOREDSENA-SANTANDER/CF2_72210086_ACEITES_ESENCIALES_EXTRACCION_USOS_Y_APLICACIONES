<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      <Actividad :cuestionario="cuestionario"/>
  
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Verificar la comprensión de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Los aceites esenciales se caracterizan principalmente por?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser mezclas sintéticas de fragancias industriales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contener compuestos volátiles extraídos exclusivamente con solventes químicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Estar formados por compuestos aromáticos volátiles de origen vegetal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Presentar una composición uniforme sin variaciones químicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 2,
          texto:
            '¿Una diferencia clave entre un aceite esencial y un aceite vegetal es qué?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los aceites esenciales siempre se diluyen en agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los extractos se obtienen mediante procesos físicos sin solventes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los aceites esenciales conservan compuestos volátiles responsables del aroma.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ambos productos poseen exactamente la misma composición química.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 3,
          texto:
            '¿La evaluación olfativa de un aceite esencial permite principalmente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar su pureza y calidad aromática.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Identificar su color y densidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medir su toxicidad en animales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer su precio comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 4,
          texto:
            '¿En la industria jabonera, los aceites esenciales se utilizan principalmente para?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la espuma del jabón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actuar como conservantes sintéticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar completamente los aceites vegetales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aportar fragancia y propiedades funcionales al producto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 5,
          texto:
            '¿Un aceite esencial como el de lavanda es valorado especialmente por su?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad colorante intensa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aroma agradable y efecto calmante.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Alto contenido de grasas saturadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo en alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 6,
          texto:
            '¿La variación en la composición química de un aceite esencial puede depender de?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El método de evaluación olfativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El origen botánico y las condiciones de cultivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tipo de envase comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La marca que lo distribuye.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 7,
          texto:
            '¿En ambientadores naturales, aceites como la citronela y la limonaria se usan por qué?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminan completamente las bacterias del aire.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituyen el oxígeno ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aportan aromas frescos y ayudan a desodorizar espacios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Son inodoros y neutros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 8,
          texto:
            '¿El término “nota aromática” en evaluación olfativa hace referencia a?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La concentración química del aceite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La sensación olfativa percibida en distintas etapas del aroma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El color del aceite esencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La temperatura de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 9,
          texto:
            '¿El aceite esencial de romero se emplea comúnmente por sus propiedades?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sedantes exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estimulantes y refrescantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dulces y frutales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Neutras y sin aroma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 10,
          texto:
            '¿Un criterio importante para evaluar la calidad de un aceite esencial es?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que tenga un aroma artificial intenso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que sea completamente incoloro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que presente un perfil aromático coherente con su origen botánico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que se disuelva totalmente en agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 11,
          texto:
            '¿Los aceites esenciales se consideran sustancias concentradas, por lo que?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pueden usarse sin ninguna precaución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Deben aplicarse siempre en grandes cantidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Requieren un uso responsable y dosis adecuadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No generan ningún efecto secundario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 12,
          texto:
            '¿En la caracterización de aceites esenciales, la evaluación sensorial es importante por qué?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituye completamente los análisis químicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite identificar adulteraciones o deterioro del aroma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determina el contenido nutricional del aceite.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Define su vida útil exacta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 13,
          texto:
            '¿El aceite esencial de menta se caracteriza principalmente por?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un aroma cálido y dulce.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un olor neutro sin intensidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un aroma fresco y efecto refrescante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un color oscuro intenso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 14,
          texto:
            '¿La caracterización de aceites esenciales incluye aspectos cómo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aroma, origen botánico y propiedades funcionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precio, marca y presentación comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tamaño del envase y tipo de etiqueta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Preferencias personales del consumidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 15,
          texto:
            '¿El aceite esencial de clavo se utiliza frecuentemente por su?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aroma suave y floral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ausencia total de compuestos activos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aroma intenso y propiedades antisépticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo en cosmética decorativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 16,
          texto:
            '¿En productos artesanales, los aceites esenciales son preferidos porque?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son más económicos que los sintéticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No requieren etiquetado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aportan aroma natural y valor agregado al producto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminan la necesidad de otros ingredientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 17,
          texto:
            '¿El uso del nombre científico de una planta es importante por qué?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar su aroma con el tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Perder propiedades y alterar su perfil olfativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Volverse completamente sólido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar su concentración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 18,
          texto:
            '¿El rendimiento de un aceite esencial depende en gran medida de?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su aroma neutro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sus propiedades aromáticas y antisépticas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Su uso exclusivo en perfumes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su alto contenido de agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 19,
          texto: '¿En aromaterapia, los aceites esenciales deben ser?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente instrumentos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La percepción sensorial entrenada del evaluador.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Análisis matemáticos complejos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La adición de colorantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
        {
          id: 20,
          texto:
            '¿La normativa sobre aceites esenciales varía entre países por qué?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar completamente los riesgos de uso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir todos los productos industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aprovechar sus propiedades de forma segura y funcional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Garantizar resultados idénticos en todos los contextos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las propiedades y aplicaciones de los aceites esenciales de las plantas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre los Propiedades y aplicaciones de los aceites esenciales de plantas aromáticas: caracterización y evaluación olfativa.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
