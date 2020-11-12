import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from "@angular/forms";
import { PublicarTService } from '../../Services/CrearUnNuevoServicio/publicar-t.service';


@Component({
  selector: 'app-form-trabajo',
  templateUrl: './form-trabajo.component.html',
  styleUrls: ['./form-trabajo.component.css'],
  providers: [PublicarTService]
})
export class FormTrabajoComponent implements OnInit {

  public formGroup: FormGroup;


  private descripcion: string;
  private direccion: string;
  private precio: string;
  private publicacion_creada: any;

  constructor(
    private _Publicacion: PublicarTService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.buildForm();
  }


  private buildForm() {

    this.formGroup = this.formBuilder.group({
      direccion: [this.direccion, Validators.required],
      descripcion: [this.descripcion, Validators.required],
      precio: ['', Validators.compose([ Validators.required, Validators.pattern(/[0-9]/)])],

    });

  }

  enviar() {

    let trabajo = this.formGroup.value;
    this._Publicacion.sendInfo(trabajo.descripcion, trabajo.direccion, trabajo.precio).subscribe(
      Response => {

        this.publicacion_creada = Response;
        alert('Su nuevo trabajo se ha ingresado con exito')
        this.limpiarFormulario();

      },
      error => {
        alert('Algo salio mal, por favor intentarlo mas tarde');
        console.log(<any>error);
      }
    );



  }

  limpiarFormulario() {
    this.formGroup.reset();
  }
}
