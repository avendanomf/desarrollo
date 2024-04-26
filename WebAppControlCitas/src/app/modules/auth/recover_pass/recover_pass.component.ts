import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../../_services/auth.service'
import { Router } from '@angular/router'

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover_pass.component.html',
  styleUrls: ['./recover_pass.component.scss']
})
export class RecoverPassComponent implements OnInit {
  load = false
  loadSplash = false
  formInvalid = true
  password_confirm: string = ''
  password: string = ''

  constructor (
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit (): void {
    if (this.authService.user && this.authService.token) {
      this.router.navigate(['/'])
    }
  }

  formChange () {
    if (!this.password_confirm || !this.password) {
      this.formInvalid = true
      return
    }

    if (this.password_confirm !== this.password) {
      this.formInvalid = true
      return
    }

    if (passwordRegex.test(this.password_confirm)) {
      this.formInvalid = false
    }
  }

  recover () {
    if (this.formInvalid) return

    alert('Falta conectar el servicio')

    // this.loadSplash = true
  }
}
