import { Component } from '@angular/core'
import { FormCustomersComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends BaseCrud {
  override path: string = 'customer'
  override idField: string = 'clienteId'

  override formDialogComponent: ComponentType<BaseForm> = FormCustomersComponent

  override filters: baseFilterI[] = [
    {
      type: 'input',
      placeholder: 'Buscar por palabra clave, id, o documento',
      value: '',
      field: 's',
      valueKey: '' // se debe setear aunque no haga nada en el caso del input
    }
  ]

  deleteHandler (item: any): void {
    this.delete('Eliminar Cliente', `Estas seguro de eliminar el cliente "${item.nombre}"`, item)
  }
}
