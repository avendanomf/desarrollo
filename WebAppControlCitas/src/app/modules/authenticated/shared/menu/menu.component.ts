import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '../../services/ui.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  sidebarToggle = false

  constructor (
    public router: Router,
    private uiService: UiService
  ) {

  }

  ngOnInit (): void {
    this.uiService.showSidebar$.subscribe((isVisible) => {
      this.sidebarToggle = isVisible
    })
  }
}
