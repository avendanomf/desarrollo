import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../../_services/auth.service'
import { Router } from '@angular/router'
import { hasValue } from '../../../utils/validations'
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  load: boolean = false
  loadSplash: boolean = false
  errorAlert: boolean = false
  errorText: string = ''
  isValidForm: boolean = false
  formInvalid: boolean = true
  email: string = ''
  password: string = ''

  constructor (
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit (): void {
    if (hasValue(this.authService.user) && hasValue(this.authService.token)) {
      void this.router.navigate(['/'])
    }
  }

  closeErrorAlert (): void {
    this.errorAlert = false
  }

  formChange (): void {
    if (!hasValue(this.email) || !hasValue(this.password)) {
      this.formInvalid = true
      return
    }

    if (emailRegex.test(this.email)) {
      this.formInvalid = false
    }
  }

  redirectRecover (): void {
    void this.router.navigate(['auth/send-email'])
  }

  login (): void {
    // this.loadSplash = true
    if (this.formInvalid) return

    this.load = true

    this.authService.login(this.email, this.password).subscribe(
      {
        error: (e: any) => {
          this.errorAlert = true
          this.errorText = JSON.stringify(e.message)
          this.load = false
        },
        next: (resp: any) => {
          if (hasValue(resp)) {
            void this.router.navigate(['home'])
          }
        },
        complete: () => {
          this.load = false
        }
      }
    )
  }
}
