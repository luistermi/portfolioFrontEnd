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
  experienciaAnioInicio: string;
  experienciaAnioFin: string;
  experienciaDescripcion: string;
  experienciaOrganizacion: string;

  constructor(private datosPortfolio: DatosPortfolioService) { 
    this.editable = false;
    this.addable = false;
    this.visible = true;
    this.contadorAddable = [];
    this.experienciaAnioInicio = "";
    this.experienciaAnioFin = "";
    this.experienciaDescripcion = "";
    this.experienciaOrganizacion = "";
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
    if(this.experienciaAnioInicio!="" || this.experienciaAnioFin!="" || this.experienciaDescripcion!="" || this.experienciaOrganizacion!=""){
    this.experiencias.push({anioInicio:this.experienciaAnioInicio,anioFin:this.experienciaAnioFin,descripcion:this.experienciaDescripcion,organizacion:this.experienciaOrganizacion });
    }
    this.experienciaAnioInicio = "";
    this.experienciaAnioFin = "";
    this.experienciaDescripcion = "";
    this.experienciaOrganizacion = ""; 
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
      if (experiencia.anioInicio == '' && experiencia.anioFin == '' && experiencia.descripcion == '' && experiencia.organizacion == '') {
        let index = this.experiencias.indexOf(experiencia);
        this.experiencias.splice(index,1);
      }
    }
  }
  
}
  
