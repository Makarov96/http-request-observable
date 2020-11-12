import { Component, OnInit } from '@angular/core';
import { MostrarTrabajosService } from '../../Services/MostrarTrabajosPublicadosTrabajador/mostrar-trabajos.service';

@Component({
  selector: 'app-trabajospublicados',
  templateUrl: './trabajospublicados.component.html',
  styleUrls: ['./trabajospublicados.component.css']
})
export class TrabajospublicadosComponent implements OnInit {

  public publicacion: any;
  constructor(
    private _Publicacion: MostrarTrabajosService,
  ) { }

  ngOnInit() {
    this.cargarPublicaciones()
  }


  cargarPublicaciones(){


    let usuario = JSON.parse(localStorage.getItem("usuario"));

    this._Publicacion.GetPublicaciones(usuario.Persona_Id).subscribe(

      Response=>{
        this.publicacion=Response
        console.log(this.publicacion)
      },
      error=>{
        console.error(error);
      }
    )

  }



}
