import { Component } from '@angular/core'
import { type FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormProductsComponent extends BaseForm {
  validators = Validators
  optionsList = {
    categories: [],
    unitOfMeasure: []
  }

  override path: string = 'product'
  override form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    category: [null, Validators.required],
    description: [''],
    uMedida: [null, this.validators.required]
  })

  override async setInstance (data: any): Promise<any> {
    console.log({ data })
    this.form.patchValue({
      name: data.nombre,
      description: data.descripcion,
      uMedida: { value: data.uMedida, label: data.uMedida },
      category: { value: data.categoria, label: data.categoria }
    })
  }

  override async setList (): Promise<boolean> {
    return await new Promise((resolve) => {
      this.optionsList.categories = this.data.optionsList.categories
      this.optionsList.unitOfMeasure = this.data.optionsList.unitOfMeasure
      resolve(true)
    })
  }

  override formatData (form: any): any {
    const formData: any = {
      nombre: form.name,
      descripcion: form.description,
      categoria: form.category.value,
      uMedida: form.uMedida.value,
      activo: true
    }
    return formData
  }
}
