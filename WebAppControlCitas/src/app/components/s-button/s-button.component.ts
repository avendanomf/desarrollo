import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 's-button',
  templateUrl: './s-button.component.html',
  styleUrls: ['./s-button.component.scss']
})
export class SButtonComponent {
  @Output() click = new EventEmitter<void>()
  @Input() type: 'button' | 'submit' = 'button'
  @Input() disabled: boolean = false

  onClick () {
    this.click.emit()
  }
}
