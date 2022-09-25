import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiencias = [
    {anio: "2021-Actualidad", detalleExperiencia: "QA Automation en DGSIAF de Secretaría de Hacienda del Ministerio de Economía de la República Argentina."},
    {anio: "2020-2021", detalleExperiencia: "Trabajos varios en el marco de viaje por Sudamérica."},
    {anio: "2010-2019", detalleExperiencia: "QA Funcional en DGSIAF de Secretaría de Hacienda del Ministerio de Economía de la República Argentina."},
    {anio: "2007-2010", detalleExperiencia: "Trabajos varios en el marco de viaje por España países de Sudamérica."},
    {anio: "2005-2007", detalleExperiencia: "QA Funcional en DGSIAF de Secretaría de Hacienda del Ministerio de Economía de la República Argentina."}];
    
    editable = false;
    addable = false;
    visible=true;
    contadorAddable: number[]= [];
    experienciaAnio = "";
    experienciaDetalle = "";
    
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
  
