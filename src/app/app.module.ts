import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercaDeComponent } from './componentes/principal/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/principal/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/principal/educacion/educacion.component';
import { SkillsComponent } from './componentes/principal/skills/skills.component';
import { ProyectosComponent } from './componentes/principal/proyectos/proyectos.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
