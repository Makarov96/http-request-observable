import { Component, OnInit } from '@angular/core';
import {ServiceuserService } from '../../Services/Serviceviewuser/serviceuser.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {


  data: [];

  userFilter: any = { Publicacion_Descripcion: '' };
  userFiltertwo: any = { Publicacion_Presupuesto: '' };

  private  datadelay:Boolean;
  constructor(
    private _ServiceuserService:ServiceuserService

  ) { 
    this.datadelay= true;
  }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this._ServiceuserService.GetAllPublicaciones().subscribe(
      Response =>{

       this.datadelay=false;
        this.data=Response;
       console.log(Response)
      },error=>{
           alert('algo salio mal intentalo mas tarde');
      }
    )
  }


}
