import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public innerWidth: any;
  public resolucion_pantalla: Boolean;
  public data:any;
  constructor() { 
    this.data = window.screen.width;
    this.comprobartamanio();
  }

  ngOnInit() {
    
    this.resolucion;
  }

  @HostListener('window:resize', ['$event'])
  resolucion(event) {
    this.innerWidth = window.innerWidth;
     if (this.innerWidth< 672 ) {
      this.resolucion_pantalla = true;
    } else {
      this.resolucion_pantalla = false;
    }
  }

  comprobartamanio(){
    if(this.data<712){
      this.resolucion_pantalla = true;
    }
  }





}
