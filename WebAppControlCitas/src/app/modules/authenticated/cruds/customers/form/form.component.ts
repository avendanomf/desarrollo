import { Component } from '@angular/core'
import { BaseForm } from '../../../base/baseForm'
import { type FormGroup, Validators } from '@angular/forms'
// import { Perfile } from '../customers.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormCustomersComponent extends BaseForm {
  validators = Validators

  override path: string = 'customer'
  override form: FormGroup = this.fb.group({
    // Define tus controles y reglas de validación aquí
    name: ['', Validators.required],
    nit: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })

  override async setInstance (data: any): Promise<any> {
    this.form.patchValue({
      name: data.nombre,
      nit: data.nit,
      email: data.correo,
      phone: data.telefono,
      address: data.direccion
    })
  }

  override formatData (form: any): any {
    return {
      nombre: form.name,
      nit: form.nit,
      direccion: form.address,
      correo: form.email,
      telefono: form.phone,
      activo: true
    }
  }
}
