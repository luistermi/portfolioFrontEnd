import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  
  formaciones: any;
  editable: boolean;
  addable: boolean;
  visible: boolean;
  contadorAddable: number[];
  formacionAnioInicio: string;
  formacionAnioFin: string;
  formacionTitulo: string;
  formacionInstitucion: string;

  constructor(private datosPortfolio: DatosPortfolioService) {
    this.editable = false;
    this.addable = false;
    this.visible = true;
    this.contadorAddable = [];
    this.formacionAnioInicio = "";
    this.formacionAnioFin = "";
    this.formacionTitulo = "",
    this.formacionInstitucion = "";
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio().subscribe(data => this.formaciones = data.educacion)
  }
  
  toEditable(){
  this.editable = true;
  }

  toNotEditable(){
    this.editable = false;
    this.contadorAddable = [];
    this.addable = false;
    if(this.formacionAnioInicio!="" || this.formacionAnioFin!="" || this.formacionTitulo!="" || this.formacionInstitucion!=""){
    this.formaciones.push({anioInicio:this.formacionAnioInicio,anioFin:this.formacionAnioFin,titulo:this.formacionTitulo,institucion:this.formacionInstitucion});
    }
    this.formacionAnioInicio = "";
    this.formacionAnioFin = "";
    this.formacionTitulo = "";
    this.formacionInstitucion = "";
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
      if (formacion.anioInicio == '' && formacion.anioFin == '' && formacion.titulo == '' && formacion.institucion == '') {
        let index = this.formaciones.indexOf(formacion);
        this.formaciones.splice(index,1);
      }
    }
  }

}
