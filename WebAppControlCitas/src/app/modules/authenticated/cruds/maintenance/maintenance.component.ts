import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { FormMaintenanceComponent } from './form/form.component'
import { ConfirmationDeleteComponent } from '../../../../components/confirmation-delete/confirmation-delete.component'

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
  listItems: any[] = []
  load = false

  constructor (private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit (): void {
    this.getList()
  }

  getList (): void {
    this.http.get<any[]>('assets/data/maintenance.json').subscribe(
      (data: any[]) => {
        this.listItems = data
      },
      (error) => {
        console.error('Error fetching data:', error)
      }
    )
  }

  create (): void {
    this.load = true
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.minWidth = 400
    dialogConfig.minHeight = 400
    dialogConfig.maxWidth = 900

    const dialogRef = this.dialog.open(FormMaintenanceComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (data?.person) {
          this.getList()
        }
      }
    )
    this.load = false
  }

  edit (maintenance: any): void {
    const dialogConfig = new MatDialogConfig()

    dialogConfig.data = {
      maintenance
    }

    const dialogRef = this.dialog.open(FormMaintenanceComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró con el resultado:', result)
    })
  }

  delete (maintenance: any): void {
    this.load = true
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.minWidth = 400
    dialogConfig.minHeight = 400
    dialogConfig.maxWidth = 900

    dialogConfig.data = {
      registro: maintenance.name,
      label: 'Parametros',
      item: 'Parametro'
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const dialogRef = this.dialog.open(ConfirmationDeleteComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (data?.person) {
          this.getList()
        }
      }
    )
    this.load = false
  }
}
