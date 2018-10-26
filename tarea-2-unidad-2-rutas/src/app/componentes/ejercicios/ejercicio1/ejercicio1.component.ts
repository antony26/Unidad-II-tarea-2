import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  nombre: string;
  apellido: string;
  saludo: string;

  constructor() { }

  ngOnInit() {
  }
  
  guardar(){
  let per = new persona();
  per.nombre = this.persona.nombre;
  this.personas.push(this.persona);
  console.log(this.personas);
  }
    this.nombre = '';
    this.apellido = '';
    this.saludo = 'Hola ';
  }

  cambioDeNombreHandler(event: any) {
    this.nombre = event.target.value;
    this.concatenarNombres();
  }
    cambioDeApellidoHandler(event: any) {
        this.apellido = event.target.value;
        this.concatenarNombres();
    }

  concatenarNombres(){
    this.saludo = "Hola "+this.nombre+" "+this.apellido;
  }


}
