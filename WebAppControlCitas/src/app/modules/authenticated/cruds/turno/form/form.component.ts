import { Component } from '@angular/core'
import { type FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormTurnoComponent extends BaseForm {
  validators = Validators


  override path: string = 'turno'
  override form: FormGroup = this.fb.group({
    idMedico: ['', Validators.required],
    nombreTurno: ['', Validators.required]
  })

  override async setInstance(data: any): Promise<any> {
    this.form.patchValue({
      idTurno: data.idTurno,
      nombreTurno: data.nombreTurno
    })
  }

  override formatData(form: any): any {
    const formData: any = {
      idMedico: form.idMedico,
      nombreTurno: form.nombreTurno
    }
    return formData
  }
}
