import { Component, EventEmitter, Input, Output } from '@angular/core'

export interface ListCardStatusItem {
  text: string
  count: number
}

@Component({
  selector: 'st-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss']
})
export class CardStatusComponent {
  @Input() title: string = ''
  @Input() listItems?: ListCardStatusItem[] = []
  @Output() clickCTA = new EventEmitter()

  clickCTAHandler (): void {
    this.clickCTA.emit()
  }
}
