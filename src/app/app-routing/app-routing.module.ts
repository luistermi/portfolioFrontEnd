import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../componentes/login/login.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';

const routes: Routes = [
  {path:"inicio", component: PrincipalComponent},
  {path:"", redirectTo: "/inicio", pathMatch: "full"},
  {path:"login", component: LoginComponent}  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { 
  
}
