import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { AuthService } from './auth.service'
import { hasValue } from '../utils/validations'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    public authService: AuthService,
    public router: Router
  ) {
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!hasValue(this.authService.token)) {
      void this.router.navigate(['auth/login'])
      return false
    }
    const token: string = this.authService.token
    const expiracion = (JSON.parse(atob(token.split('.')[1]))).exp
    if (Math.floor((new Date()).getTime() / 1000) >= expiracion) {
      this.authService.logout()
      return false
    }
    return true
  }
}
