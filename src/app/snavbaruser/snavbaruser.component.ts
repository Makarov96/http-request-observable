import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-snavbaruser',
  templateUrl: './snavbaruser.component.html',
  styleUrls: ['./snavbaruser.component.css']
})
export class SnavbaruserComponent implements OnInit {

  private data:number;
  constructor(

    private router:Router
  ) { }

  ngOnInit() {
    this.data=1;
  }

  cambiarVista(Datorecivido){
    this.data = Datorecivido
  }

  Salir(){

    localStorage.clear();
    this.router.navigate(['Home']);

  }

}
