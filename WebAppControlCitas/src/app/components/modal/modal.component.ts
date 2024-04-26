import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'stv-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  @Input() show: boolean = false
  @Input() className: string = ''
  
}
