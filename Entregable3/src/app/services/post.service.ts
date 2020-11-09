import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
listaBlog: Object[]=[];
  constructor() { }

  addPublication (anombre: string,aapellido:string,aciudad:string,atitulo:string,adescripcion:string): any {
    console.log('Añadiendo publicacion', anombre);
    this.listaBlog.push({nombre: anombre,apellido:aapellido,ciudad:aciudad,titulo:atitulo,descripcion:adescripcion});

    
  }
  getPublications ():Object[] {
    return this.listaBlog;
  }
}
