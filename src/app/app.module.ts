import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercaDeComponent } from './componentes/principal/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/principal/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/principal/educacion/educacion.component';
import { SkillsComponent } from './componentes/principal/skills/skills.component';
import { ProyectosComponent } from './componentes/principal/proyectos/proyectos.component';
import { DatosPortfolioService } from './servicios/datos-portfolio.service';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/principal/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    NavbarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatosPortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
