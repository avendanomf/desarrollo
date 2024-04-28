import { Component } from '@angular/core'
import { type FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormCitaMedicaComponent extends BaseForm {
  validators = Validators


  override path: string = 'citamedica'
  override form: FormGroup = this.fb.group({
    idPaciente: ['', Validators.required],
    idMedico: ['', Validators.required],
    idTurno: ['', Validators.required],
    idServicio: ['', Validators.required],
    fechaCita: ['', Validators.required],
    horaCita: ['', Validators.required]
  })

  override async setInstance(data: any): Promise<any> {
    this.form.patchValue({
      idCita: data.idCita,
      idPaciente: data.idPaciente,
      idMedico: data.idMedico,
      idTurno: data.idTurno,
      idServicio: data.idServicio,
      fechaCita: data.fechaCita,
      horaCita: data.horaCita
    })
  }

  override formatData(form: any): any {
    const formData: any = {
      idPaciente: form.idPaciente,
      idMedico: form.idMedico,
      idTurno: form.idTurno,
      idServicio: form.idServicio,
      fechaCita: form.fechaCita,
      horaCita: form.horaCita
    }
    return formData
  }
}
