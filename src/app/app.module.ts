import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercaDeComponent } from './componentes/principal/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/principal/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/principal/educacion/educacion.component';
import { SkillsComponent } from './componentes/principal/skills/skills.component';
import { ProyectosComponent } from './componentes/principal/proyectos/proyectos.component';
import { DatosPortfolioService } from './servicios/datos-portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [DatosPortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
