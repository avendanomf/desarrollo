import { Component, Inject } from '@angular/core'
import { NgxDropdownConfig } from 'ngx-select-dropdown'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormMaintenanceComponent {
  id: string = ''
  date: string = ''
  name: string = ''
  category: string = ''
  value: string = ''
  status: string = ''
  SelectItem: string = ''
  SelectItemCat: string = ''
  accion: string = 'Crear '

  SelectItemMultiple: string[] = []
  options: string[] = ['Activo', 'Inactivo']
  optionsCategoria: string[] = ['Sistema', 'Negocio']
  configCat: NgxDropdownConfig = {
    placeholder: 'Categoria'
  }

  config: NgxDropdownConfig = {
    placeholder: 'Estado'
  }

  constructor (
    private dialogRef: MatDialogRef<FormMaintenanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data != null) {
      this.id = this.data.maintenance.id
      this.name = this.data.maintenance.name
      this.category = this.data.maintenance.category
      this.value = this.data.maintenance.value
      this.SelectItem = this.data.maintenance.status
      this.SelectItemCat = this.data.maintenance.category
      this.accion = 'Editar '
    }
  }

  shareCheckedList (item: any[]): void {
    console.log(item)
  }

  shareIndividualCheckedList (item: any): void {
    console.log(item)
  }

  close (): void {
    this.dialogRef.close()
  }

  save (): void {
    this.dialogRef.close()
  }
}
