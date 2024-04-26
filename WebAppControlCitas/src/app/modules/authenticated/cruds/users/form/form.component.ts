import { Component } from '@angular/core'
import { type FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'
import { Perfile } from '../users.component'
import { hasValue } from '../../../../../utils/validations'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormUsersComponent extends BaseForm {
  validators = Validators
  optionsList = {
    roles: []
  }

  override path: string = 'user'
  override form: FormGroup = this.fb.group({
    // Define tus controles y reglas de validación aquí
    name: ['', Validators.required],
    phone: ['', Validators.required],
    password: [''],
    documentNumber: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    roles: [[], [Validators.required]]
  })

  override async setInstance (data: any): Promise<any> {
    this.form.patchValue({
      name: data.nombres,
      phone: data.telefono,
      documentNumber: data.identificacion,
      email: data.correo,
      roles: data.perfiles.map((x: Perfile) => ({ label: x.rol.nombre, value: x.rolId })) // importante el orden de las claves debe ser igual
    })
  }

  override async setList (): Promise<boolean> {
    return await new Promise((resolve) => {
      this.optionsList.roles = this.data.optionsList.roles
      resolve(true)
    })
  }

  override formatData (form: any): any {
    const roles = form.roles.map((x: any) => ({ rolId: x.value }))
    const formData: any = {
      tipoIdentificacion: 1,
      identificacion: form.documentNumber,
      nombres: form.name,
      telefono: form.phone,
      correo: form.email,
      // password: '123456789',
      activo: true,
      perfiles: roles
    }
    if (hasValue(form.password)) {
      formData.password = form.password
    }
    return formData
  }
}
