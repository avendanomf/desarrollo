import { Component } from '@angular/core'
import { FormPacienteComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent extends BaseCrud {
  override path: string = 'paciente'
  override idField: string = 'idPaciente'

  override formDialogComponent: ComponentType<BaseForm> = FormPacienteComponent

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
    this.delete('Eliminar Paciente', `Estas seguro de eliminar el paciente "${item.nombreCompleto}"`, item)
  }
}
