import { Component } from '@angular/core'
import { type FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormPacienteComponent extends BaseForm {
  validators = Validators


  override path: string = 'paciente'
  override form: FormGroup = this.fb.group({
    tipoIdentificacion: ['', Validators.required],
    numeroIdentificacion: ['', Validators.required],
    nombreCompleto: ['', Validators.required],
    direccion: ['', Validators.required],
    celular: ['', Validators.required],
    ocupacion: ['', Validators.required],
    sexo: ['', Validators.required]
  })

  override async setInstance(data: any): Promise<any> {
    this.form.patchValue({
      idPaciente: data.idPaciente,
      idUsuario: data.idUsuario,
      tipoIdentificacion: data.tipoIdentificacion,
      numeroIdentificacion: data.numeroIdentificacion,
      nombreCompleto: data.nombreCompleto,
      direccion: data.direccion,
      celular: data.celular,
      ocupacion: data.ocupacion,
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
      ocupacion: form.ocupacion,
      sexo: form.sexo
    }
    return formData
  }
}
