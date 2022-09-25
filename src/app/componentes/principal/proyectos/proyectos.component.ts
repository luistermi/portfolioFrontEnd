import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proyectos = [
    {titulo: "Portfolio Personal", descripcion: "Proyecto de Portfolio Personal para la segunda etapa del Argentina Programa, #YoProgramo", url: "http://localhost:4200/"},
    {titulo: "Proyecto Prueba Carga", descripcion: "Proyecto para la prueba de carga inicial", url: "#"}];
    
    editable = false;
    addable = false;
    visible=true;
    contadorAddable: number[]= [];
    proyectoTitulo = "";
    proyectoDescripcion = "";
    proyectoUrl = "";
    
    toEditable(){
    this.editable = true;
    }
  
    toNotEditable(){
      this.editable = false;
      this.contadorAddable = [];
      this.addable = false;
      if(this.proyectoTitulo!="" || this.proyectoDescripcion!="" || this.proyectoUrl != ""){
      this.proyectos.push({titulo:this.proyectoTitulo, descripcion:this.proyectoDescripcion, url:this.proyectoUrl})
      }
      this.proyectoTitulo = "";
      this.proyectoDescripcion = "";
      this.proyectoUrl = "";
      this.visible=true;
      this.cleanProyectos();
    }
    
    clean(index: number): void {
      this.proyectos.splice(index, 1);
    }
    
    add(){
      this.addable = true;
      this.contadorAddable.push(1);
    }
    
    visibleOff(){
    this.visible=false;
    }

    cleanProyectos(){
      for (let proyecto of this.proyectos){
        if (proyecto.titulo == '' && proyecto.descripcion == '' && proyecto.url == '') {
          let index = this.proyectos.indexOf(proyecto);
          this.proyectos.splice(index,1);
        }
      }
    }
}
