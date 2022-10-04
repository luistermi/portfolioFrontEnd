import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  encabezado: any;

  constructor(private datosPortfolio: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio().subscribe(data => this.encabezado = data.encabezado)
  }

}
