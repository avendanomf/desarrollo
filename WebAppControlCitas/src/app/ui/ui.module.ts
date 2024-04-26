import { NgModule } from '@angular/core'
import { SButtonComponent } from '../components/s-button/s-button.component'
import { SplashComponent } from '../components/splash/splash.component'
import { InputPassComponent } from '../components/input-pass/input-pass.component'
import { ModalComponent } from '../components/modal/modal.component'
import { FormsModule } from '@angular/forms'
import { SCheckboxComponent } from '../components/s-checkbox/s-checkbox.component'

@NgModule({
  declarations: [
    SButtonComponent,
    SplashComponent,
    InputPassComponent,
    ModalComponent,
    SCheckboxComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    SButtonComponent,
    SplashComponent,
    InputPassComponent,
    ModalComponent,
    SCheckboxComponent
  ]
})
export class UiModule { }
