import { Component } from '@angular/core'
import { type FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormHistoriaClinicaComponent extends BaseForm {
  validators = Validators

  override path: string = 'HistoriaClinica'
  override form: FormGroup = this.fb.group({
    idPaciente: ['', Validators.required],
    idMedico: ['', Validators.required],
    fechaAtencion: ['', Validators.required],
    horaAtencion: ['', Validators.required],
    observaciones: ['', Validators.required]
  })

  override async setInstance(data: any): Promise<any> {
    this.form.patchValue({
      idHistoria: data.idHistoria,
      idPaciente: data.idPaciente,
      idMedico: data.idMedico,
      nombreTurno: data.nombreTurno,
      fechaAtencion: data.fechaAtencion,
      horaAtencion: data.horaAtencion,
      observaciones: data.observaciones
    })
  }

  override formatData(form: any): any {
    const formData: any = {
      idPaciente: form.idPaciente,
      idMedico: form.idMedico,
      nombreTurno: form.nombreTurno,
      fechaAtencion: form.fechaAtencion,
      horaAtencion: form.horaAtencion,
      observaciones: form.observaciones
    }
    return formData
  }
}
