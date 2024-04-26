import { Component, EventEmitter, Output } from '@angular/core'
import { FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../../base/baseForm'

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent extends BaseForm {
  @Output() backSolicitud = new EventEmitter()

  override form: FormGroup = this.fb.group({
    // Define tus controles y reglas de validación aquí
    vehiculoId: [null, Validators.required],
    conductorId: [null, [Validators.required]],
    proveedorId: [null, [Validators.required]],
    executionDate: ['', Validators.required],
    halfDay: ['am', Validators.required],
    servicesRCD: this.fb.array([]),
    servicesSM: this.fb.array([]),
    observations: ['', []]
  })

  optionsList = {
    projects: [],
    products: [],
    customers: []
  }

  halfDaySelect (halfDay: 'am' | 'pm'): void {
    // console.log({halfDay})
    this.form.patchValue({
      halfDay
    })
  }

  backSolicitudHandler (): void {
    this.backSolicitud.emit()
  }
}
