import { Component } from '@angular/core'
import { FormCitaMedicaComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'

@Component({
  selector: 'app-citamedica',
  templateUrl: './citamedica.component.html',
  styleUrl: './citamedica.component.scss'
})
export class CitaMedicaComponent extends BaseCrud {
  override path: string = 'citamedica'
  override idField: string = 'idCita'

  override formDialogComponent: ComponentType<BaseForm> = FormCitaMedicaComponent

  override filters: baseFilterI[] = [
    {
      type: 'input',
      placeholder: 'Buscar por palabra clave, id, o documento',
      value: '',
      field: 's',
      valueKey: ''
    }
  ]

  deleteHandler(item: any): void {
    this.delete('Eliminar Medico', `Estas seguro de eliminar la cita medica "${item.idCita}"`, item)
  }
}
