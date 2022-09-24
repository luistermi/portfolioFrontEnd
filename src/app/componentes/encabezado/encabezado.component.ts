import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  imgLogo = "./assets/imagenes/logo.jpg";
  imgFoto = "./assets/imagenes/fotoPortfolio.jpg";
  imgBanner = "./assets/imagenes/banner.jpg";
  twitter = "https://twitter.com/luchoyvuelvo2";
  facebook = "https://www.facebook.com/Luichi923";
  
  constructor() { }

  ngOnInit(): void {
  }
  
  
}
