import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreApellido = "Luis Salvador Augusto Terminiello";
  profesion = "Desarrollador Full Stack Web Junior";
  presentacionPersonal = "Soy estudiante avanzado de la Licenciatura en Economía en la UBA. Tengo experiencia de más de diez años trabajando en área de QA de la Dirección General de Sistemas de la Administración Financiera, principalmente en testing funcional y en los últimos años en automation.";

    editable = false;

    toEditable(){
    this.editable = true;
    }
  
    toNotEditable(){
      this.editable = false;
        }
}
