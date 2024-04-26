import { Component } from '@angular/core'
import { BaseForm } from '../../../base/baseForm'
import { FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormSuppliersComponent extends BaseForm {
  validators = Validators
  optionsList = {
    products: []
  }

  override path: string = 'supplier'
  override form: FormGroup = this.fb.group({
    // Define tus controles y reglas de validación aquí
    name: ['', Validators.required],
    direccion: ['', Validators.required],
    ubicacion: ['', Validators.required],
    phone: ['', Validators.required],
    nit: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    products: [[], [Validators.required]]
  })

  override async setList (): Promise<boolean> {
    return await new Promise((resolve) => {
      this.optionsList.products = this.data.optionsList.products
      resolve(true)
    })
  }

  override async setInstance (data: any): Promise<any> {
    console.log(data)
    this.form.patchValue({
      name: data.nombre,
      direccion: data.direccion,
      ubicacion: data.ubicacion,
      phone: data.telefono,
      nit: data.nit,
      email: data.correo,
      products: data.productoProveedors.map((x: any) => ({ label: x.producto.nombre, value: x.productoId })) // importante el orden de las claves debe ser igual

    })
  }

  override formatData (form: any): any {
    const products = form.products.map((x: any) => ({ productoId: x.value }))

    const formData: any = {
      nit: form.nit,
      nombre: form.name,
      direccion: form.direccion,
      ubicacion: form.ubicacion,
      telefono: form.phone,
      correo: form.email,
      activo: true,
      productoProveedors: products
    }
    return formData
  }
}
