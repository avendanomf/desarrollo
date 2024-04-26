import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-confirmation-delete',
  templateUrl: './confirmation-delete.component.html',
  styleUrls: ['./confirmation-delete.component.scss']
})
export class ConfirmationDeleteComponent {
  title: string = ''
  description: string = ''

  constructor (
    private dialogRef: MatDialogRef<ConfirmationDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title
    this.description = data.description
  }

  confirm (): void {
    this.dialogRef.close(true)
  }

  close (): void {
    this.dialogRef.close(false)
  }
}
