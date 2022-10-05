import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  
  experiencias: any;
  editable: boolean;
  addable: boolean;
  visible: boolean;
  contadorAddable: number[];
  experienciaAnio: string;
  experienciaDetalle: string;

  constructor(private datosPortfolio: DatosPortfolioService) { 
    this.editable = false;
    this.addable = false;
    this.visible = true;
    this.contadorAddable = [];
    this.experienciaAnio = "";
    this.experienciaDetalle = "";
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio().subscribe(data => this.experiencias = data.experiencia)
  }
    
  toEditable(){
    this.editable = true;
  }
  
  toNotEditable(){
    this.editable = false;
    this.contadorAddable = [];
    this.addable = false;
    if(this.experienciaAnio!="" || this.experienciaDetalle!=""){
    this.experiencias.push({anio:this.experienciaAnio,detalleExperiencia:this.experienciaDetalle})
    }
    this.experienciaAnio = "";
    this.experienciaDetalle = "";
    this.visible=true;
    this.cleanExperiencias();
  }
    
  clean(index: number): void {
    this.experiencias.splice(index, 1);
  }
    
  add(){
    this.addable = true;
    this.contadorAddable.push(1);
  }
    
  visibleOff(){
  this.visible=false;
  }

  cleanExperiencias(){
    for (let experiencia of this.experiencias){
      if (experiencia.anio == '' && experiencia.detalleExperiencia == '') {
        let index = this.experiencias.indexOf(experiencia);
        this.experiencias.splice(index,1);
      }
    }
  }
  
}
  
