import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formaciones = [
  {anio: "2021-Actualidad", titulo: "#SeProgramar y #YoProgramo. Argentina Programa. Secretaría de Economía del Conocimiento."},
  {anio: "2001-Actualidad", titulo: "Licenciatura en Economía. Facultad de Ciencias Económicas. Universidad de Buenos Aires."},
  {anio: "2000", titulo: "Bachiller. Instituto Superior Martín Güemes. Berazategui."}];
  
  editable = false;
  addable = false;
  visible=true;
  contadorAddable: number[]= [];
  formacionAnio = "";
  formacionTitulo = "";
  
  toEditable(){
  this.editable = true;
  }

  toNotEditable(){
    this.editable = false;
    this.contadorAddable = [];
    this.addable = false;
    if(this.formacionAnio!="" || this.formacionTitulo!=""){
    this.formaciones.push({anio:this.formacionAnio,titulo:this.formacionTitulo})
    }
    this.formacionAnio = "";
    this.formacionTitulo = "";
    this.visible=true;
    this.cleanFormaciones();
  }
  
  clean(index: number): void {
    this.formaciones.splice(index, 1);
  }
  
  add(){
    this.addable = true;
    this.contadorAddable.push(1);
  }
  
  visibleOff(){
  this.visible=false;
  }

  cleanFormaciones(){
    for (let formacion of this.formaciones){
      if (formacion.anio == '' && formacion.titulo == '') {
        let index = this.formaciones.indexOf(formacion);
        this.formaciones.splice(index,1);
      }
    }
  }
}
