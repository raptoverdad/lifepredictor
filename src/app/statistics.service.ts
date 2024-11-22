import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  public esperanzaDeVida:string|false=false
  public posibilidadesDeVivir:number|false=false
  public posibilidadesDeMorir:number|false=false
  public stadisticsStatus={preguntasvitalesanswered:true,preguntasplandiarioanswered:true}
  public edadSeleccionada: number | null = null;
  public paisSeleccionado:string | null=null
  public preguntasPaisVida: any = {
    pregunta: "¿En qué país vives?",
    respuestas: [
      { respuesta: "Alemania", meses: 924 },
      { respuesta: "Arabia Saudita", meses: 714 },
      { respuesta: "Argentina", meses: 852 },
      { respuesta: "Australia", meses: 972 },
      { respuesta: "Austria", meses: 918 },
      { respuesta: "Bangladesh", meses: 738 },
      { respuesta: "Bélgica", meses: 906 },
      { respuesta: "Bolivia", meses: 702 },
      { respuesta: "Brasil", meses: 840 },
      { respuesta: "Canadá", meses: 954 },
      { respuesta: "Chile", meses: 864 },
      { respuesta: "China", meses: 834 },
      { respuesta: "Colombia", meses: 828 },
      { respuesta: "Corea del Sur", meses: 930 },
      { respuesta: "Costa Rica", meses: 648 },
      { respuesta: "Cuba", meses: 720 },
      { respuesta: "Dinamarca", meses: 870 },
      { respuesta: "Ecuador", meses: 684 },
      { respuesta: "Egipto", meses: 768 },
      { respuesta: "El Salvador", meses: 660 },
      { respuesta: "España", meses: 966 },
      { respuesta: "Estados Unidos", meses: 888 },
      { respuesta: "Filipinas", meses: 780 },
      { respuesta: "Finlandia", meses: 900 },
      { respuesta: "Francia", meses: 948 },
      { respuesta: "Grecia", meses: 876 },
      { respuesta: "Guatemala", meses: 672 },
      { respuesta: "Guayana", meses: 618 },
      { respuesta: "Haití", meses: 636 },
      { respuesta: "Honduras", meses: 678 },
      { respuesta: "India", meses: 810 },
      { respuesta: "Indonesia", meses: 774 },
      { respuesta: "Irán", meses: 756 },
      { respuesta: "Irlanda", meses: 912 },
      { respuesta: "Israel", meses: 936 },
      { respuesta: "Italia", meses: 966 },
      { respuesta: "Jamaica", meses: 642 },
      { respuesta: "Japón", meses: 1002 },
      { respuesta: "Malasia", meses: 708 },
      { respuesta: "México", meses: 822 },
      { respuesta: "Nicaragua", meses: 666 },
      { respuesta: "Nigeria", meses: 732 },
      { respuesta: "Noruega", meses: 948 },
      { respuesta: "Nueva Zelanda", meses: 936 },
      { respuesta: "Pakistán", meses: 744 },
      { respuesta: "Panamá", meses: 654 },
      { respuesta: "Paraguay", meses: 696 },
      { respuesta: "Países Bajos", meses: 942 },
      { respuesta: "Perú", meses: 816 },
      { respuesta: "Portugal", meses: 882 },
      { respuesta: "Reino Unido", meses: 912 },
      { respuesta: "República Dominicana", meses: 630 },
      { respuesta: "Rusia", meses: 804 },
      { respuesta: "Singapur", meses: 978 },
      { respuesta: "Sudáfrica", meses: 792 },
      { respuesta: "Suecia", meses: 960 },
      { respuesta: "Suiza", meses: 984 },
      { respuesta: "Surinam", meses: 612 },
      { respuesta: "Tailandia", meses: 786 },
      { respuesta: "Trinidad y Tobago", meses: 624 },
      { respuesta: "Turquía", meses: 762 },
      { respuesta: "Uruguay", meses: 690 },
      { respuesta: "Venezuela", meses: 726 },
      { respuesta: "Vietnam", meses: 750 }
    ]
  };
  public edades={
    pregunta: "¿Qué edad tienes?",
    respuestas: Array.from({ length: 100 }, (_, index) => {
      const edad = index + 1;
      let meses = 0;
  
      // Estimación de meses perdidos basada en estudios generales
      if (edad >= 50 && edad <= 60) {
        meses = 1; // Pérdida de salud leve a partir de los 50
      } else if (edad > 60 && edad <= 70) {
        meses = 2; // Riesgos incrementados
      } else if (edad > 70 && edad <= 80) {
        meses = 5; // Incremento significativo del riesgo
      } else if (edad > 80) {
        meses = 10; // Altos riesgos para mayores de 80
      }
  
      return { respuesta: edad, meses };
    })
  }
  public preguntasEnfermedad:any={
    pregunta: "¿Tienes alguna de estas enfermedades?",
    respuestas: [
      { respuesta: "Diabetes", meses: 60 },
      { respuesta: "Hipertensión", meses: 48 },
      { respuesta: "Cáncer", meses: 120 },
      { respuesta: "Asma", meses: 24 },
      { respuesta: "Enfermedad cardíaca", meses: 96 },
      { respuesta: "Enfermedad renal", meses: 72 },
      { respuesta: "Enfermedad hepática", meses: 60 },
      { respuesta: "Artritis", meses: 12 },
      { respuesta: "Migraña", meses: 6 },
      { respuesta: "Alzheimer", meses: 180 },
      { respuesta: "Parkinson", meses: 120 },
      { respuesta: "Epilepsia", meses: 36 },
      { respuesta: "Hepatitis", meses: 24 },
      { respuesta: "Tuberculosis", meses: 36 },
      { respuesta: "Gripe", meses: 1 },
      { respuesta: "Covid-19", meses: 12 },
      { respuesta: "VIH/SIDA", meses: 120 },
      { respuesta: "Depresión", meses: 48 },
      { respuesta: "Ansiedad", meses: 24 },
      { respuesta: "Trastorno bipolar", meses: 60 },
      { respuesta: "Esquizofrenia", meses: 72 },
      { respuesta: "Osteoporosis", meses: 36 },
      { respuesta: "Anemia", meses: 12 },
      { respuesta: "Hipotiroidismo", meses: 18 },
      { respuesta: "Hipertiroidismo", meses: 18 },
      { respuesta: "Enfermedad de Crohn", meses: 48 },
      { respuesta: "Colitis ulcerosa", meses: 36 },
      { respuesta: "Gastritis", meses: 12 },
      { respuesta: "Úlcera péptica", meses: 24 },
      { respuesta: "Fibromialgia", meses: 24 },
      { respuesta: "Síndrome de fatiga crónica", meses: 36 },
      { respuesta: "Alergias", meses: 6 },
      { respuesta: "Enfermedad celíaca", meses: 18 },
      { respuesta: "Obesidad", meses: 60 },
      { respuesta: "EPOC", meses: 96 },
      { respuesta: "Enfermedad de Huntington", meses: 180 },
      { respuesta: "Lupus", meses: 72 },
      { respuesta: "Esclerosis múltiple", meses: 120 },
      { respuesta: "Enfermedad de Lyme", meses: 36 },
      { respuesta: "Psoriasis", meses: 12 },
      { respuesta: "Trastorno de pánico", meses: 24 },
      { respuesta: "Trastorno obsesivo-compulsivo (TOC)", meses: 36 },
      { respuesta: "Trastorno de estrés postraumático (TEPT)", meses: 48 },
      { respuesta: "Endometriosis", meses: 24 },
      { respuesta: "Síndrome del intestino irritable (SII)", meses: 18 },
      { respuesta: "Anorexia", meses: 72 },
      { respuesta: "Bulimia", meses: 60 },
      { respuesta: "Enfermedad de Ménière", meses: 36 },
      { respuesta: "Glaucoma", meses: 24 },
      { respuesta: "Cataratas", meses: 18 }
    ]
  }
  public preguntasVitales:any = [
    {
      pregunta: "¿Cómo se encuentra tu situación económica?",
      respuestas: [
        { respuesta: "Mala", meses: 24 },
        { respuesta: "Buena", meses: 0 },
        { respuesta: "Excelente", meses: 0 }
      ],
    
    },
    {
      pregunta: "¿Duermes lo suficiente cada noche?",
      respuestas: [
        { respuesta: "Sí", meses: 0 },
        { respuesta: "A veces", meses: 12 },
        { respuesta: "No", meses: 36 }
      ]
    },
    {
      pregunta: "¿Haces ejercicio regularmente?",
      respuestas: [
        { respuesta: "Sí", meses: 0 },
        { respuesta: "A veces", meses: 4 },
        { respuesta: "No", meses: 24 }
      ]
    },
    {
      pregunta: "¿Tienes algún hábito poco saludable, como fumar o beber alcohol con frecuencia?",
      respuestas: [
        { respuesta: "Sí", meses: 48 },
        { respuesta: "A veces", meses: 18 },
        { respuesta: "No", meses: 0 }
      ]
    },
    {
      pregunta: "¿Tienes una dieta balanceada?",
      respuestas: [
        { respuesta: "Sí", meses: -12 },
        { respuesta: "A veces", meses: 6 },
        { respuesta: "No", meses: 36 }
      ]
    }
    ,
    {
      pregunta: "¿Vives en un entorno inseguro?",
      respuestas: [
        { respuesta: "Sí", meses: 48 },
        { respuesta: "No", meses: 0 }
      ]
    },
    {
      pregunta: "¿Tu trabajo o actividades involucran manejo de maquinaria pesada o herramientas peligrosas?",
      respuestas: [
        { respuesta: "Sí", meses: 24 },
        { respuesta: "Puede ser", meses: 12 },
        { respuesta: "No", meses: 0 }
      ]
    }
  ];
  public preguntasPlanDiario:any = [
    {
      pregunta: "¿Planeas viajar en motocicleta hoy?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 25 },
        { respuesta: "Tal vez", porcentaje: 15 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Participarás en algún deporte extremo o de riesgo, como escalada, paracaidismo o surf?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 30 },
        { respuesta: "Quizás", porcentaje: 20 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Vas a realizar tareas de construcción, mantenimiento eléctrico o trabajo en alturas?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 20 },
        { respuesta: "Puede ser", porcentaje: 10 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Piensas caminar o correr en áreas donde el tráfico es denso y hay pocos cruces peatonales seguros?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 15 },
        { respuesta: "Quizás", porcentaje: 10 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Planeas consumir alcohol o alguna sustancia que pueda afectar tu coordinación o juicio?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 20 },
        { respuesta: "Tal vez", porcentaje: 10 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Vas a realizar actividades en cuerpos de agua, como nadar en un río, lago o el mar?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 15 },
        { respuesta: "Quizás", porcentaje: 8 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Vas a trabajar o transitar por zonas consideradas peligrosas o con altos índices de criminalidad?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 25 },
        { respuesta: "Tal vez", porcentaje: 15 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Tomarás algún medicamento nuevo que pueda tener efectos secundarios desconocidos?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 10 },
        { respuesta: "No estoy seguro", porcentaje: 5 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Pasarás tiempo en un área con riesgos naturales, como montañas, áreas propensas a deslizamientos de tierra, o regiones con alerta de tormenta?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 20 },
        { respuesta: "Tal vez", porcentaje: 10 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Planeas hacer senderismo o actividades al aire libre donde pueda haber animales salvajes o peligros ambientales?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 15 },
        { respuesta: "Quizás", porcentaje: 8 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Harás un viaje aéreo o estarás cerca de aeropuertos durante el día?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 5 },
        { respuesta: "Tal vez", porcentaje: 3 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Tienes programado realizar tareas en espacios confinados o en ambientes con exposición a químicos?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 20 },
        { respuesta: "Puede ser", porcentaje: 10 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Hay alguien en tu hogar o entorno que sepas que pueda poner en riesgo tu seguridad?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 25 },
        { respuesta: "No estoy seguro", porcentaje: 10 },
        { respuesta: "No", porcentaje: 0 }
      ]
    },
    {
      pregunta: "¿Te sientes especialmente cansado o estresado, lo que podría afectar tu capacidad de tomar decisiones seguras?",
      respuestas: [
        { respuesta: "Sí", porcentaje: 15 },
        { respuesta: "Un poco", porcentaje: 5 },
        { respuesta: "No", porcentaje: 0 }
      ],
    
    }
  ];
  constructor(private storage:StorageService){
    this.cargarRespuestas()
  }

  public async  setEdad(edad:Number){
  await this.storage.removeItem("edad")
  await this.storage.set("edad",edad)
  }
  public async  setPais(pais:string){
    await this.storage.removeItem("pais")
    await this.storage.set("pais",pais)
    }
  public async  addEnfermedad(enfermedad:string){
    console.log("enfermedad:",enfermedad)
    console.log("SET ENFERMEDAD:")

    let object= this.preguntasEnfermedad.respuestas.find((i:any)=>{return i.respuesta==enfermedad})
    console.log("enfermedad object:",object)
    object.selected=true
    await this.storage.setEnfermedad(object)
  }
  public async removeEnfermedad(enfermedad: string) {
    console.log("enfermedad:",enfermedad)
    let object= this.preguntasEnfermedad.respuestas.find((i:any)=>{return i.respuesta==enfermedad})  
 

if (object && object.selected !== undefined) {
  delete object.selected;
}
    await this.storage.removeEnfermedad(object)
  }
  public async setRespuestaPreguntasVitales(pregunta:string,respuesta:string){
    console.log("pregunta:",pregunta)
  console.log("SET RESPUESTA PREGUNTA VITAL:")
  console.log(this.preguntasVitales)
  let object= this.preguntasVitales.find((i:any)=>{return i.pregunta==pregunta})
  console.log("pregunta:",object)
  object.respuesta=respuesta
  await this.storage.setPreguntaVital(object)
  }
  public async setRespuestaPreguntasPlanDiario(pregunta:string,respuesta:string)
  {
    console.log("pregunta:",pregunta)
    console.log("SET RESPUESTA PREGUNTA VITAL:")
  let object= this.preguntasPlanDiario.find((i:any)=>{return i.pregunta==pregunta})
  console.log("pregunta:",object)
  object.respuesta=respuesta
  await this.storage.setPreguntaPlanDiario(object)
  }
  public cargarRespuestas(): Promise<{ preguntasplandiario: any; preguntasvitales: any ,edad:any,enfermedades:any,pais:any}> {
    return new Promise(async (resolve, reject) => {
      try {
        
        // Obtener preguntas desde el Storage
        const preguntasVitalesStorage =await (await this.storage.getItem("preguntasvitales")) || [];
        console.log("PREGUNTAS VITALES: ",preguntasVitalesStorage);
        const preguntasPlanDiarioStorage =await (await this.storage.getItem("preguntasplandiario")) || [];
        console.log("PREGUNTAS DIARIO: ",preguntasPlanDiarioStorage);
        const edad=await (await this.storage.getItem("edad")) || null
        const pais=await (await this.storage.getItem("pais")) || null
        if(pais===null){
          console.log("pais null")
       this.stadisticsStatus.preguntasvitalesanswered=false
        }
        if(edad===null){
          console.log("edad null")
   this.stadisticsStatus.preguntasvitalesanswered=false
        }
        const enfermedades=await (await this.storage.getItem("enfermedades")) || []
        this.edadSeleccionada=edad
        this.paisSeleccionado=pais
        // Recorrer y actualizar preguntasVitales
        let preguntasVitalesEncontradas=0
        this.preguntasVitales = this.preguntasVitales.map((preguntaLocal: any) => {
          const preguntaEncontrada = preguntasVitalesStorage.find(
            (preguntaStorage: any) => preguntaStorage.pregunta === preguntaLocal.pregunta
          );
          if(!preguntaEncontrada){
            if(preguntaEncontrada!=undefined){
              this.stadisticsStatus.preguntasvitalesanswered=false
              console.log("pregunta no respondida:",preguntaEncontrada)
            }
          }else{
            preguntasVitalesEncontradas++
          }
          return preguntaEncontrada ? preguntaEncontrada : preguntaLocal;
        });
console.log("PREGUNTAS VITALES ENCONTRADAS: ",preguntasVitalesEncontradas)
        if(edad!=null && preguntasVitalesEncontradas==7 && pais != null){
          console.log("PREGUNTAS VITALES ANSWERED!!!!!")
          this.stadisticsStatus.preguntasvitalesanswered=true
        }else{
          console.log("PREGUNTAS VITALES NOT ANSWERED!!!!!")

        }

        let preguntasEncontradas=0
        // Recorrer y actualizar preguntasPlanDiario
        this.preguntasPlanDiario = this.preguntasPlanDiario.map((preguntaLocal: any) => {

          const preguntaEncontrada = preguntasPlanDiarioStorage.find(
            (preguntaStorage: any) => preguntaStorage.pregunta === preguntaLocal.pregunta
          );
          if(!preguntaEncontrada){
          if(preguntaEncontrada!=undefined){
            this.stadisticsStatus.preguntasplandiarioanswered=false
            console.log("pregunta no respondida:",preguntaEncontrada)
          }
        }else{
          preguntasEncontradas++
        }
          return preguntaEncontrada ? preguntaEncontrada : preguntaLocal;
        });
      if(preguntasEncontradas==0)   this.stadisticsStatus.preguntasplandiarioanswered=false
      if(preguntasEncontradas==14)   this.stadisticsStatus.preguntasplandiarioanswered=true
      console.log("PREGUNTAS ENCONTRADAS: ",preguntasEncontradas)
        this.preguntasEnfermedad.respuestas = this.preguntasEnfermedad.respuestas.map((preguntaLocal: any) => {
          const preguntaEncontrada = enfermedades.find(
            (preguntaStorage: any) => preguntaStorage.respuesta === preguntaLocal.respuesta
          );
          if(preguntaEncontrada){
            console.log("PREGUNTA ENCONTRADA EN CARGAR RESPUESTAS: ",preguntaEncontrada)
          }
          return preguntaEncontrada ? preguntaEncontrada : preguntaLocal;
        });
    await  this.cargarEstadisticas()
        resolve({
          preguntasplandiario: this.preguntasPlanDiario,
          preguntasvitales: this.preguntasVitales,
          edad:this.edadSeleccionada,
          enfermedades:this.preguntasEnfermedad,
          pais:this.paisSeleccionado
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  public async cargarEstadisticas(){
    if (!this.stadisticsStatus.preguntasplandiarioanswered || !this.stadisticsStatus.preguntasvitalesanswered){
      console.log("hay preguntas sin responder")
      console.log("pla diario sin responder?: ",this.stadisticsStatus.preguntasplandiarioanswered)
      console.log("pla vital sin responder?: ",this.stadisticsStatus.preguntasvitalesanswered)
      return;
    } 
     let paisSeleccionado=this.paisSeleccionado
     let paisSeleccionadoData=this.preguntasPaisVida.respuestas.find((pais:any)=>{ return pais.respuesta===paisSeleccionado})
     let edadBase=paisSeleccionadoData.meses
     let enfermedades=this.preguntasEnfermedad.respuestas
     let preguntasVitales=this.preguntasVitales
     let edad=this.edadSeleccionada
     let cantidadEnfermedades=0
     let mesesMenosDeVida=0
     if(edad && edad>=50){
     let meses=  this.edades.respuestas.find((i:any)=>{
        return i.respuesta===edad
      })
      if(meses){
        mesesMenosDeVida+=meses.meses
      }
     }
     enfermedades.forEach((element:any) => {
      if(element.selected){
         console.log("enfermedad seleccionada:",element)
        cantidadEnfermedades++
        mesesMenosDeVida+=element.meses
     }});

     preguntasVitales.forEach((element:any) => {
      let respuesta=element.respuesta
      let elemento= element.respuestas.find((obj:any)=>{ return obj.respuesta===respuesta})

       mesesMenosDeVida+=elemento.meses

     });
     
     let esperanzaDeVidaEnMeses=edadBase-mesesMenosDeVida
     const años = Math.floor(esperanzaDeVidaEnMeses / 12);
const mesesRestantes = esperanzaDeVidaEnMeses % 12;


let esperanzaDeVidaFinal = `${años} años ${mesesRestantes} meses`;
this.esperanzaDeVida=esperanzaDeVidaFinal


let probabilidadDeVivir = 100;

this.preguntasPlanDiario.forEach((pregunta: any) => {
  const respuestaSeleccionada = pregunta.respuesta
  let respuestaYporcentaje= pregunta.respuestas.find((r: any) =>{return r.respuesta === respuestaSeleccionada} );
  let porcentaje=respuestaYporcentaje.porcentaje
  console.log("PORCENTAJE: DE PREGUNTA ESCOGIDA",porcentaje)
  if (respuestaSeleccionada) {
    // Restamos el porcentaje de riesgo de la respuesta seleccionada
    probabilidadDeVivir -= (probabilidadDeVivir * porcentaje) / 100;
  }
});

this.posibilidadesDeVivir=probabilidadDeVivir
this.posibilidadesDeMorir=100 - probabilidadDeVivir


  }
}
