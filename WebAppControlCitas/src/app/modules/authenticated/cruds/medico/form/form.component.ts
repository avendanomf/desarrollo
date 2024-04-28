import { Component } from '@angular/core'
import { type FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormMedicoComponent extends BaseForm {
  validators = Validators


  override path: string = 'medico'
  override form: FormGroup = this.fb.group({
    idUsuario: [''],
    tipoIdentificacion: ['', Validators.required],
    numeroIdentificacion: ['', Validators.required],
    nombreCompleto: ['', Validators.required],
    direccion: ['', Validators.required],
    celular: ['', Validators.required],
    especialidad: ['', Validators.required],
    cargo: ['', Validators.required],
    sexo: ['', Validators.required]
  })

  override async setInstance(data: any): Promise<any> {
    this.form.patchValue({
      idMedico: data.idMedico,
      idUsuario: data.idUsuario,
      tipoIdentificacion: data.tipoIdentificacion,
      numeroIdentificacion: data.numeroIdentificacion,
      nombreCompleto: data.nombreCompleto,
      direccion: data.direccion,
      celular: data.celular,
      especialidad: data.especialidad,
      cargo: data.cargo,
      sexo: data.sexo
    })
  }

  override formatData(form: any): any {
    const formData: any = {
      idUsuario: form.idUsuario,
      tipoIdentificacion: form.tipoIdentificacion,
      numeroIdentificacion: form.numeroIdentificacion,
      nombreCompleto: form.nombreCompleto,
      direccion: form.direccion,
      celular: form.celular,
      especialidad: form.especialidad,
      cargo: form.cargo,
      sexo: form.sexo
    }
    return formData
  }
}
