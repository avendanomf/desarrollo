import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showSidebar = new BehaviorSubject<boolean>(true)
  showSidebar$ = this.showSidebar.asObservable()

  // private mensajeSubject = new Subject<string>();

  // enviarMensaje(mensaje: string) {
  //   this.mensajeSubject.next(mensaje);
  // }

  // recibirMensaje() {
  //   return this.mensajeSubject.asObservable();
  // }

  toggleSidebar (): void {
    this.showSidebar.next(!this.showSidebar.value)
  }
}
