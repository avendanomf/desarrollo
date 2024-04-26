import { Component } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ReportFormComponent } from './form/form.component'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  reportList: any = [
    {
      title: 'Facturación',
      endpoint: ''
    },
    {
      title: 'Conductores',
      endpoint: ''
    },
    {
      title: 'Clientes',
      endpoint: ''
    }
  ]

  constructor (private http: HttpClient, private dialog: MatDialog) { }

  showFormReport (item: any): void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.minWidth = 400
    dialogConfig.minHeight = 400
    dialogConfig.maxWidth = 900

    dialogConfig.data = {
      item
    }

    const dialogRef = this.dialog.open(ReportFormComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró con el resultado:', result)
    })
    // aqui despliega un popup
  }
}
