import { enableProdMode } from '@angular/core'; enableProdMode();
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule,MatFormFieldModule
  ,MatInputModule,MatRippleModule
  ,MatMenuModule,MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatOptionModule,
  MatSelectModule,
  MatChipsModule

} from '@angular/material';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav'
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';

import { ClienteComponent } from './cliente/cliente.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { PequenaComponent } from './pequena/pequena.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { SnavbarComponent } from './snavbar/snavbar.component';
import { FormTrabajoComponent } from './form-trabajo/form-trabajo.component';
import { TrabajospublicadosComponent } from './trabajospublicados/trabajospublicados.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { SnavbaruserComponent } from './snavbaruser/snavbaruser.component';
import { UserperfilComponent } from './userperfil/userperfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { FilterPipe } from './filter.pipe';
import { SearchPipe } from './search.pipe';
import { IlutionComponent } from './ilution/ilution.component';
import { FilterPipeModule } from 'ngx-filter-pipe';




@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    IngresarComponent,
    HomeComponent,
    BarComponent,

    ClienteComponent,
    TrabajadorComponent,
    PequenaComponent,
    FooterComponent,
    AdminComponent,
    SnavbarComponent,
    FormTrabajoComponent,
    TrabajospublicadosComponent,
    NotificacionesComponent,
    SnavbaruserComponent,
    UserperfilComponent,
    PublicacionesComponent,
    FilterPipe,
    SearchPipe,
    IlutionComponent,
   

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatMenuModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    FilterPipeModule,
 
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatChipsModule
    
  

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
