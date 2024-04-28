import { Component } from '@angular/core'
import { FormHistoriaClinicaComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'

@Component({
  selector: 'app-historiaclinica',
  templateUrl: './historiaclinica.component.html',
  styleUrl: './historiaclinica.component.scss'
})
export class HistoriaClinicaComponent extends BaseCrud {
  override path: string = 'turno'
  override idField: string = 'idTurno'

  override formDialogComponent: ComponentType<BaseForm> = FormHistoriaClinicaComponent

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
    this.delete('Eliminar Historia Clinica', `Estas seguro de eliminar la Historia Clinica "${item.idTurno}"`, item)
  }
}
