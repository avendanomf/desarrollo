import { Component } from '@angular/core'
import { type FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormServicioComponent extends BaseForm {
  validators = Validators


  override path: string = 'servicio'
  override form: FormGroup = this.fb.group({
    nombreServicio: ['', Validators.required]
  })

  override async setInstance(data: any): Promise<any> {
    this.form.patchValue({
      idServicio: data.idServicio,
      nombreServicio: data.nombreServicio
    })
  }

  override formatData(form: any): any {
    const formData: any = {
      idServicio: form.idServicio,
      nombreServicio: form.nombreServicio
    }
    return formData
  }
}
