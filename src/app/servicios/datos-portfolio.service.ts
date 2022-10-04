import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {

  constructor(private http: HttpClient) { }

  obtenerDatosPortfolio(): Observable<any>{
    return this.http.get('./assets/data/dataPortfolio.json');
  }
}

