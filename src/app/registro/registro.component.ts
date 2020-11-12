import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,} from "@angular/forms";
import {Router} from '@angular/router';
import { PersonaService } from '../../Services/CrearUnNuevoUsuario/persona.service';

@Component({

  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [PersonaService]
})
export class RegistroComponent implements OnInit {

  public formGroup: FormGroup;
  private nombre: string;
  private nombredos: string;
  private apellido: string;
  private apellidodos: string;
  private dpi: string;
  private nit: string;
  private celular: string;
  public genero: string[];
  private correo: string;
  private contra: string;
  public tipousuario: string[];
  public usuario_guardado: any;

  constructor(
    private _PersonaServices: PersonaService,
    private formBuilder: FormBuilder,
    private router:Router
  ) { }


  ngOnInit() {

    this.buildForm();
    this.genero = ['Hombre', 'Mujer', 'Otro'];
    this.tipousuario = ['Cliente', 'Trabajador'];
  }

  private buildForm() {

    this.formGroup = this.formBuilder.group({
      nombre: [this.nombre, Validators.required],
      nombredos: [this.nombredos, Validators.required],
      apellido: [this.apellido, Validators.required],
      apellidodos: [this.apellidodos, Validators.required],
      correo: [this.correo, [Validators.email, Validators.required]],
      dpi: [this.dpi, Validators.required],
      nit: [this.nit, Validators.required],
      celular: [this.celular, Validators.required],
      contra: [this.contra, Validators.required],
      usuario: [this.tipousuario, Validators.required],

    });

  }

  enviar() {

    let user = this.formGroup.value;

    if (user.usuario === 'Cliente') {
      user.usuario = '1'

    } else if (user.usuario === 'Trabajador') {
      user.usuario = '2'
    }

    this._PersonaServices.sendInfo(
      user.nombre, user.nombredos, user.apellido,
      user.apellidodos, user.dpi, user.nit, user.correo,
      user.contra, user.usuario, user.celular).subscribe(
        Response => {
          this.usuario_guardado = Response;
          this.limpiarFormulario();
          this.router.navigate(['Ingresar']);
        },
        error => {

          alert('Algo salio mal');
          console.log(<any>error);
        }
      );


  }

  limpiarFormulario() {

    this.formGroup.reset();
  }

}
