import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Output() changePage = new EventEmitter<number>()
  @Input() currentPage: number = 1
  @Input() totalPages: number = 1

  onChangePage (page: number): void {
    this.changePage.emit(page)
  }

  nextPage (): void {
    if (this.currentPage < this.totalPages) {
      this.changePage.emit(this.currentPage + 1)
    }
  }

  prevPage (): void {
    if (this.currentPage > 1) {
      this.changePage.emit(this.currentPage - 1)
    }
  }
}
