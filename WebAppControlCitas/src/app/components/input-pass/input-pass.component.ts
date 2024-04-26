import { Component, Input, OnInit, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-input-pass',
  templateUrl: './input-pass.component.html',
  styleUrls: ['./input-pass.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPassComponent),
      multi: true
    }
  ]
})
export class InputPassComponent implements OnInit, ControlValueAccessor {
  password: string = ''
  showPassword: boolean = false
  @Input() defaultShowPass: boolean = false
  @Input() label: string = ''
  @Input() placeholder: string = ''

  // Métodos necesarios para ControlValueAccessor
  onChange: any = () => {}
  onTouch: any = () => {}

  onInputChange (): void {
    this.onChange(this.password) // Notifica el cambio al modelo
    this.onTouch() // Notifica que el control ha sido tocado
  }

  writeValue (value: any): void {
    if (value !== undefined) {
      this.password = value
    }
  }

  registerOnChange (fn: any): void {
    this.onChange = fn
  }

  registerOnTouched (fn: any): void {
    this.onTouch = fn
  }

  setDisabledState (isDisabled: boolean): void {
    // Puedes implementar lógica adicional si es necesario
  }

  ngOnInit (): void {
    this.showPassword = this.defaultShowPass
  }

  togglePasswordVisibility (): void {
    this.showPassword = !this.showPassword
  }
}
