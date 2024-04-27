import { Component } from '@angular/core'
import { FormUsersComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseCrud {
  override path: string = 'usuario'
  override idField: string = 'idUsuario'

  override formDialogComponent: ComponentType<BaseForm> = FormUsersComponent

  override filters: baseFilterI[] = [
    {
      type: 'input',
      placeholder: 'Buscar por palabra clave, id, o documento',
      value: '',
      field: 's',
      valueKey: '' // se debe setear aunque no haga nada en el caso del input
    }
  ]

  deleteHandler(item: any): void {
    this.delete('Eliminar usuario', `Estas seguro de eliminar el usuario "${item.nombres}"`, item)
  }
}
