import { Component } from '@angular/core'
import { FormUsersComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'
import { URL_API } from '../../../../config/config'
// import { URL_API } from 'src/app/config/config'

export interface Perfile {
  perfilId: number
  usuarioId: number
  rolId: number
  rol: Rol
  usuario: null
}

export interface Rol {
  rolId: number
  nombre: string
  activo: null
  perfiles: any[]
  permisos: any[]
}

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

  // override getOptionsLists (): void {
  //   this.http.get<any[]>(`${URL_API}roles?pageSize=10`).subscribe(
  //     {
  //       next: (data: any) => {
  //         this.optionsList.roles = data.response.map((x: Rol) => ({ label: x.nombre, value: x.rolId }))
  //         // this.filters[1].options = this.optionsList.roles
  //       },
  //       error: (e) => {
  //         this.errorAlert = true
  //         this.errorText = e.message
  //         // TODO: Pendiente implementar alertas de error en este paso
  //       },
  //       complete: () => {
  //         this.load = false
  //       }
  //     }
  //   )
  // }

  deleteHandler (item: any): void {
    this.delete('Eliminar usuario', `Estas seguro de eliminar el usuario "${item.nombres}"`, item)
  }

  // getRoles (perfiles: Perfile[]): string {
  //   const roles = perfiles.map(perfil => perfil.rol.nombre)
  //   return roles.join(', ')
  // }
}
