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
  formacionAnio: string;
  formacionTitulo: string;

  constructor(private datosPortfolio: DatosPortfolioService) {
    this.editable = false;
    this.addable = false;
    this.visible = true;
    this.contadorAddable = [];
    this.formacionAnio = "";
    this.formacionTitulo = ""
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
