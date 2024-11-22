import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader,IonCheckbox ,IonIcon,IonList,IonListHeader,IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,IonButton,IonItem,IonLabel,IonSelect,IonSelectOption } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { StatisticsService } from '../statistics.service';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonIcon,IonCheckbox,IonList,IonListHeader,IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,CommonModule,IonButton,IonItem,IonLabel,IonSelect,IonSelectOption,RouterLink]
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  public preguntasVitales:any
  public preguntasPlanDiario:any
  public edad:any
  public pais:any
    public dailyUrl = '/folder/daily'
  public vitalsUrl =  '/folder/vitals'
  public preguntasEnfermedad:any
  constructor(public statistics:StatisticsService,private zone: NgZone){

  }

 async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    let respuestas=await this.statistics.cargarRespuestas()
      this.preguntasVitales= respuestas.preguntasvitales
      this.preguntasPlanDiario=respuestas.preguntasplandiario
      this.edad=respuestas.edad
  this.preguntasEnfermedad=respuestas.enfermedades
  this.pais=respuestas.pais
  }
 public async onEnfermedadChange(enfermedad: string, event: any) {
    console.log("EVENT: ",event.detail.checked)
    if (event.detail.checked) {
      console.log("CHEEEECKED")
    await  this.statistics.addEnfermedad(enfermedad);
    } else {
      console.log("NOT CHEEEECKED:",enfermedad)
      
      await this.statistics.removeEnfermedad(enfermedad);
    }
    this.statistics.preguntasEnfermedad.respuestas.forEach((element:any) => {
      if(element.selected)console.log("ELEMENTO SELECCIONADO EN ON ENFERMEDAD CHANGE:",element)
      
    });
   
    let respuestas=await this.statistics.cargarRespuestas()
    await this.setAtributos(respuestas)
   }
  public async onEdadChange(event: any) {
    await this.statistics.setEdad(event.detail.value)
    let respuestas=await this.statistics.cargarRespuestas()
    await this.setAtributos(respuestas)
  }
  public async onPaisChange(event: any) {
    await this.statistics.setPais(event.detail.value)
    let respuestas=await this.statistics.cargarRespuestas()
    await this.setAtributos(respuestas)
  }
  public async setRespuestaPreguntasPlanDiario(pregunta:string,respuesta:string){
    console.log("RESPUESTA:",respuesta)
    await this.statistics.setRespuestaPreguntasPlanDiario(pregunta,respuesta)
    let respuestas=await this.statistics.cargarRespuestas()
    await this.setAtributos(respuestas)
  }
  public async setRespuestaPreguntasVitales(pregunta:string,respuesta:string){
    console.log("RESPUESTA:",respuesta)
    await this.statistics.setRespuestaPreguntasVitales(pregunta,respuesta)
    let respuestas=await this.statistics.cargarRespuestas()
    await this.setAtributos(respuestas)

  }

  private async setAtributos(respuestas:{preguntasvitales:any,preguntasplandiario:any,edad:any,enfermedades:any,pais:any}){

      this.preguntasVitales = respuestas.preguntasvitales;
      this.preguntasPlanDiario = respuestas.preguntasplandiario;
      this.edad = respuestas.edad;
       this.preguntasEnfermedad= respuestas.enfermedades
     
       this.pais=respuestas.pais
 
  }
}
