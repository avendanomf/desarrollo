import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { AuthRoutingModule } from './auth-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { RecoverPassComponent } from './recover_pass/recover_pass.component'
import { NewPassComponent } from './new_pass/new_pass.component'
import { UiModule } from '../../ui/ui.module'

@NgModule({
  declarations: [
    LoginComponent,
    RecoverPassComponent,
    NewPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class AuthModule { }
