import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from '../../../suppliers/suppliers.component'

@Component({
  selector: 'service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent {
  @Input() group!: any
  @Input() products: Product[] = []
  @Output() delete = new EventEmitter()
  @Output() redirectToOrder = new EventEmitter()

  statusForm: 'form' | 'check' = 'check'

  deleteItem (): void {
    this.delete.emit()
  }

  deleteItemAfterSaved (): void {
    this.delete.emit()
  }

  changeToEdit (): void {
    this.statusForm = 'form'
  }

  changeToCheck (): void {
    this.statusForm = 'check'
  }

  redirectOrderHanlder (id: number): void {
    this.redirectToOrder.emit(id)
  }
}
