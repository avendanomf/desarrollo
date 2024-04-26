import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { map, catchError } from 'rxjs/operators'
import { hasValue } from '../utils/validations'
import { URL_API } from '../config/config'

interface loginRespI {
  mensaje: string
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any
  token: any = ''
  constructor (
    private http: HttpClient,
    private router: Router
  ) {
    this.loadStorage()
  }

  loadStorage (): void {
    const token = localStorage.getItem('token')
    if (hasValue(token)) {
      this.token = token
    } else {
      this.token = ''
      this.user = null
    }
  }

  login (correo: string, contrasena: string): any {
    const URL = URL_API + 'Auth/login'
    return this.http.post<loginRespI>(URL, { correo, contrasena }).pipe(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      map((resp) => {
        if (!resp.token.includes('Value')) {
          return this.saveLocalStorageResponse(resp)
        } else {
          throw new Error(resp.mensaje)
        }
      }),
      catchError((err: any) => {
        throw err
      })
    )
  }

  saveLocalStorageResponse (resp: loginRespI): boolean {
    if (hasValue(resp.token)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      localStorage.setItem('token', resp.token)
      this.token = resp.token
      return true
    }
    return false
  }

  logout (): void {
    this.user = null
    this.token = ''
    localStorage.removeItem('token')
    void this.router.navigate(['auth/login'])
  }
}
