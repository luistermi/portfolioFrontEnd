import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  
  proyectos: any;
  editable: boolean;
  addable: boolean;
  visible: boolean;
  contadorAddable: number[];
  proyectoTitulo: string;
  proyectoDescripcion: string;
  proyectoUrl: string;

  constructor(private datosPortfolio: DatosPortfolioService) {
    this.editable = false;
    this.addable = false;
    this.visible = true;
    this.contadorAddable = [];
    this.proyectoTitulo = "";
    this.proyectoDescripcion = "";
    this.proyectoUrl = "";
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio().subscribe(data => this.proyectos = data.proyecto)
  }

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
