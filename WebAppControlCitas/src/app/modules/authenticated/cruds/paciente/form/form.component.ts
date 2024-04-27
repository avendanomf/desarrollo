import { Component } from '@angular/core'
import { type FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'
import { hasValue } from '../../../../../utils/validations'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormPacienteComponent extends BaseForm {
  validators = Validators
  optionsList = {
    roles: []
  }

  override path: string = 'paciente'
  override form: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    fechaCreacion: ['', Validators.required],
    contrasena: ['']
  })

  override async setInstance(data: any): Promise<any> {
    this.form.patchValue({
      correo: data.correo,
      fechaCreacion: data.fechaCreacion,
      contrasena: data.contrasena
    })
  }
  
  override formatData(form: any): any {
    const formData: any = {
      correo: form.correo,
      fechaCreacion: form.fechaCreacion
    }
    if (hasValue(form.contrasena)) {
      formData.contrasena = form.contrasena
    }
    return formData
  }
}
