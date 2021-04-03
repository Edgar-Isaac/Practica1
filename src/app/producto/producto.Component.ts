import { Component } from '@angular/core';
import { producto } from '../producto.model';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['../app.component.css']
})
/*
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })*/

export class productoComponent{
  title = 'Canal nuevo';
  canal = 'Lista de Canales';
  array=['Canal de las estrellas', 'Canal 5','Canal 9'];
    Object = [
       {
          id:"1",
          title:"Control Remoto",
          descripcion:"Maneja tu tv con mayor facilidad y destreza con nuestro nuevo control",
          //precio: 450,
          imagen:'assets/images/control.png'
        },
        {
          id:"2",
          title:"canal 5",
          descripcion:"Canal de las caricaturas",
          //precio: 500,
          imagen:'assets/images/canal5.png'  
        },
        {
          id:"3",
          title:"canal 9",
          descripcion:"Canal local",
          //precio: 500,
          imagen:'assets/images/canal9.png'  
        }
    ];

      Insertar(){
        this.array.push(this.title);
      }
    
      Eliminar(index:number){
        this.array.splice(index,1);
      };
} 
/*
export class AppComponent {
  title = 'Canal nuevo';
  canal = 'Lista de Canales';
  //resultado=5+6;
  //texto='El resultado de la suma es:'
  array=['Canal de las estrellas', 'Canal 5','Canal 9'];

  Object: producto[] =[
    {
      id:"1",
      title:"Canal de las estrellas",
      descripcion:"Canal de las novelas",
      //precio: 450,
      imagen:'assets/images/estrellas.png'
    },
    {
      id:"2",
      title:"canal 5",
      descripcion:"Canal de las caricaturas",
      //precio: 500,
      imagen:'assets/images/canal5.png'  
    },
    {
      id:"3",
      title:"canal 9",
      descripcion:"Canal local",
      //precio: 500,
      imagen:'assets/images/canal9.png'  
    }
];

  Insertar(){
    this.array.push(this.title);
  }

  Eliminar(index:number){
    this.array.splice(index,1);
  }
} */



