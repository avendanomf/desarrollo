import { Component, Input, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 's-checkbox',
  templateUrl: './s-checkbox.component.html',
  styleUrls: ['./s-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SCheckboxComponent),
      multi: true
    }
  ]
})
export class SCheckboxComponent implements ControlValueAccessor {
  @Input() label: string = ''
  check: string = ''

  // Métodos necesarios para ControlValueAccessor
  onChange: any = () => {}
  onTouch: any = () => {}

  onInputChange (): void {
    this.onChange(this.check) // Notifica el cambio al modelo
    this.onTouch() // Notifica que el control ha sido tocado
  }

  writeValue (value: any): void {
    if (value !== undefined) {
      this.check = value
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
}
