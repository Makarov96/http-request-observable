import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistroComponent} from  './registro/registro.component';
import {IngresarComponent} from './ingresar/ingresar.component';
import {HomeComponent} from './home/home.component'
import {ClienteComponent} from './cliente/cliente.component';
import {TrabajadorComponent} from './trabajador/trabajador.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes=[

  {path: '', redirectTo:'/Home', pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Ingresar', component: IngresarComponent},
  {path: 'Trabajador', component: TrabajadorComponent},
  {path: 'Cliente', component: ClienteComponent},
  {path: '**', component: HomeComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
  declarations: [],
})

export class AppRoutingModule { }
