import { Component } from '@angular/core'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'
import { FormProductsComponent } from './form/form.component'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseCrud {
  override path: string = 'product'
  override idField: string = 'productoId'

  override formDialogComponent: ComponentType<BaseForm> = FormProductsComponent

  override filters: baseFilterI[] = [
    {
      type: 'input',
      placeholder: 'Buscar por palabra clave, id, o documento',
      value: '',
      field: 's',
      valueKey: '' // se debe setear aunque no haga nada en el caso del input
    }
    // ,
    // {
    //   type: 'select',
    //   placeholder: 'Filtra por rol (multiple)',
    //   value: [],
    //   field: 'rol',
    //   valueKey: 'value',
    //   options: [],
    //   selectConfig: {
    //     displayKey: 'label'
    //   }
    // }
  ]

  override getOptionsLists (): void {
    this.optionsList.categories = [
      { value: 'Suministro de materiales', label: 'Suministro de materiales' },
      { value: 'Recolección de residuos', label: 'Recolección de residuos' }
    ]

    this.optionsList.unitOfMeasure = [
      { value: 'Kilogramos', label: 'Kilogramos' },
      { value: 'Metros cúbicos', label: 'Metros cúbicos' },
      { value: 'Viajes', label: 'Viajes' }
    ]
  }

  deleteHandler (item: any): void {
    this.delete('Eliminar producto', `Estas seguro de eliminar el producto "${item.nombre}"`, item)
  }
}
