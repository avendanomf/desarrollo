import { Component } from '@angular/core'
import { BaseForm } from '../../../base/baseForm'
import { FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormProjectsComponent extends BaseForm {
  validators = Validators
  optionsList = {
    supervisors: [],
    customers: []
  }

  override path: string = 'project'
  override form: FormGroup = this.fb.group({
    // Define tus controles y reglas de validación aquí
    name: ['', Validators.required],
    customer: [null, Validators.required],
    address: ['', Validators.required],
    location: ['', [Validators.required, Validators.pattern(/^https:\/\/[^\s/$.?#].[^\s]*$/)]],
    supervisor: [null, []],
    observations: ['', []]
  })

  override async setInstance (data: any): Promise<any> {
    const customer = { label: data.obras[0].cliente.nombre, value: data.obras[0].clienteId }
    const supervisor = { label: data.obras[0].supervisor.nombres, value: data.obras[0].supervisorId }
    this.form.patchValue({
      name: data.nombre,
      customer,
      address: data.direccion,
      location: data.ubicacion,
      observations: data.observaciones,
      supervisor
    })
  }

  override async setList (): Promise<boolean> {
    return await new Promise((resolve) => {
      this.optionsList.supervisors = this.data.optionsList.supervisors
      this.optionsList.customers = this.data.optionsList.customers
      resolve(true)
    })
  }

  override formatData (form: any): any {
    return {
      nombre: form.name,
      direccion: form.address,
      ubicacion: form.location,
      observaciones: form.observations,
      activo: true,
      obras: [
        {
          clienteId: form.customer.value,
          supervisorId: form.supervisor.value
        }
      ]
    }
  }
}
