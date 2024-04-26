import { Component } from '@angular/core'
import { MatDialogConfig } from '@angular/material/dialog'
import { ReportPdfComponent } from '../../templatesPdf/report-pdf/report-pdf.component'
import { URL_API } from '../../../../config/config'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends BaseCrud {
  override path: string = 'Order'
  override idField: string = 'OrdenId'

  override filters: baseFilterI[] = [
    {
      type: 'input',
      placeholder: 'Buscar por palabra clave o id',
      value: '',
      field: 's',
      valueKey: '' // se debe setear aunque no haga nada en el caso del input
    }
  ]

  deleteHandler (item: any): void {
    this.delete('Eliminar Orden', `Estas seguro de eliminar la orden número "${item.OrdenId}"`, item)
  }

  downloadPdf (ordenId: number): void {
    // TODO: Hacer un consumo a un servicio que traiga la orden
    this.http.get<any[]>(URL_API + 'order/' + ordenId).subscribe({
      next: (data: any) => {
        this.showDialogPdf(data)
      },
      error: (e) => {
        // TODO: Pendiente implementar alertas de error en este paso
      },
      complete: () => {
        this.load = false
      }
    })
  }

  showDialogPdf (orderData: any): void {
    let dialogConfig = new MatDialogConfig()

    dialogConfig = {
      ...dialogConfig,
      ...{
        disableClose: false,
        autoFocus: true,
        minWidth: 800,
        minHeight: 800
      }
    }
    dialogConfig.data = orderData

    const dialogRef = this.dialog.open(ReportPdfComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (data?.person) {
          this.getList()
        }
      }
    )
  }
}
