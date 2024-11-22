import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageInstance: Storage | null = null;
  private isInitialized = false;


  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // Crear instancia del storage manualmente
    this.storageInstance = await this.storage.create();
    this.isInitialized = true;
  }

  private async ensureInitialized() {
    while (!this.isInitialized) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }

  async setPreguntaVital(object:any) {
    console.log("removing pregunta vital")
   await this.removePreguntaVital(object)
   let preguntasVitales= await this.storageInstance?.get("preguntasvitales");
   if(preguntasVitales==null){
    preguntasVitales=[]
   }
   console.log("obteniendo preguntas vitales del user:",preguntasVitales)
   preguntasVitales.push(object)
   await this.storageInstance?.set("preguntasvitales", preguntasVitales);
  }

  async setPreguntaPlanDiario(object:any) {
    await this.removePreguntaPlanDiario(object)
    let preguntasPlanDioario= await this.storageInstance?.get("preguntasplandiario");
    if(preguntasPlanDioario==null){
      preguntasPlanDioario=[]
     }
    preguntasPlanDioario.push(object)
    await this.storageInstance?.set("preguntasplandiario", preguntasPlanDioario);
   }
   async setEnfermedad(object:any){
    let enfermedades= await this.storageInstance?.get("enfermedades");
    console.log("ENFERMEDADES: ",enfermedades)
    if(enfermedades==null){
      enfermedades=[]
     }
     enfermedades.push(object)
    await this.storageInstance?.set("enfermedades", enfermedades);
   }
   async removeEnfermedad(object: any) {
    console.log("REMOVE ENFERMEDAD")
    let enfermedades = await this.storageInstance?.get("enfermedades");  
    if (enfermedades && Array.isArray(enfermedades)) {
      console.log("ENFERMEDADES ES ARRAY;",enfermedades)
      // Filtrar los objetos que no coincidan con el objeto proporcionado
      enfermedades = enfermedades.filter((item: any) => item.respuesta !== object.respuesta);
      console.log(" ENFERMEDADES FILTRADO: ",enfermedades)
      await this.storageInstance?.set("enfermedades", enfermedades);
      console.log("ENFERMEDADES EN EL STORAGE;", await this.storageInstance?.get("enfermedades"))
    }else{
      console.log("ENFERMEDADES NO ES ARRAY")
    }
  }
   async set(key:string,value:any){
    await this.storageInstance?.set(key, value);
   }

   async removePreguntaVital(object: any) {
     let preguntasVitales = await this.storageInstance?.get("preguntasvitales");  
     if (preguntasVitales && Array.isArray(preguntasVitales)) {
       // Filtrar los objetos que no coincidan con el objeto proporcionado
       preguntasVitales = preguntasVitales.filter((item: any) => item.pregunta !== object.pregunta);
       await this.storageInstance?.set("preguntasvitales", preguntasVitales);
     }
   }
   async removePreguntaPlanDiario(object: any) {
     let preguntasPlanDiario = await this.storageInstance?.get("preguntasplandiario");
     if (preguntasPlanDiario && Array.isArray(preguntasPlanDiario)) {
       // Filtrar los objetos que no coincidan con el objeto proporcionado
       preguntasPlanDiario = preguntasPlanDiario.filter((item: any) => item.pregunta !== object.pregunta);
       await this.storageInstance?.set("preguntasplandiario", preguntasPlanDiario);
     }
   }
  async getItem(key: string) {
    await this.ensureInitialized();
    return await this.storageInstance?.get(key);
  }

  async removeItem(key: string) {
    await this.storageInstance?.remove(key);
  }

  async clear() {
    await this.storageInstance?.clear();
  }
}
