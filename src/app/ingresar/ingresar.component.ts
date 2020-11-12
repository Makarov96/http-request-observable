import { Component, OnInit } from '@angular/core';
import { IngresaService } from '../../Services/IngresarDatos/ingresa.service';
import { FormBuilder, FormGroup, Validators, } from "@angular/forms";

import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
  providers: [IngresaService]
})
export class IngresarComponent implements OnInit {

  public formGroup: FormGroup;

  public genero: string[];
  private correo: string;
  private contra: string;
  public tipousuario: string[];
  public usuario_guardado: any;
  constructor(
    private _IngresaService: IngresaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {

    this.formGroup = this.formBuilder.group({
      correo: [this.correo, [Validators.email, Validators.required]],
      contra: [this.contra, Validators.required],
    });

  }

  enviar() {

    let user = this.formGroup.value;
    //NABrc6si6v4XJdR
    this._IngresaService.sendInfo(user.correo, user.contra).subscribe(
      Response => {

        this.usuario_guardado = Response;
        if (this.usuario_guardado[0].RolUsuario_Id == 1) {
          
          this.router.navigate(['Trabajador']);
        } else if (this.usuario_guardado[0].RolUsuario_Id == 2) {
          this.router.navigate(['Cliente']);
        }
        localStorage.setItem("usuario", JSON.stringify(this.usuario_guardado[0]));
        this.limpiarFormulario();
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
