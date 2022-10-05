import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  
  acercaDe: any;
  editable: boolean;

  constructor(private datosPortfolio: DatosPortfolioService) { 
    this.editable = false;
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio().subscribe(data => this.acercaDe = data.acercaDe);
  }
  
  toEditable(){
    this.editable = true;
  }
  
  toNotEditable(){
    this.editable = false;
  }

}
