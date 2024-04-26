import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-new-pass',
  templateUrl: './new_pass.component.html',
  styleUrls: ['./new_pass.component.scss']
})
export class NewPassComponent implements OnInit {
  load = false
  loadSplash = false
  email:string = '';
  formInvalid = true

  constructor(
    public authService:AuthService,
    public router:Router
  ) { }


  ngOnInit(): void {
    if(this.authService.user && this.authService.token){
      this.router.navigate(["/"]);
    }
  }

  formChange() {

    if(!this.email ){
      this.formInvalid = true
      return
    }

    if(emailRegex.test(this.email)) {
      this.formInvalid = false
    }
  }

  sendNewPass(){

    if (this.formInvalid) return

    alert('Falta conectar el servicio en envio de correo')

    // this.loadSplash = true
 
  }
}
