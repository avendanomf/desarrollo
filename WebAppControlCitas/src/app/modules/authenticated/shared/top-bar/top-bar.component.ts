import { Component } from '@angular/core'
import { UiService } from '../../services/ui.service'
import { AuthService } from '../../../../_services/auth.service'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  constructor (
    public authService: AuthService,
    public uiService: UiService
  ) { }

  logout (): void {
    this.authService.logout()
  }

  toogleSidebar (): void {
    this.uiService.toggleSidebar()
  }
}
