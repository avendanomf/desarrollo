import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation, forwardRef } from '@angular/core'
import { NgxDropdownConfig } from 'ngx-select-dropdown'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'st-select',
  templateUrl: './st-select.component.html',
  styleUrls: ['./st-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StSelectComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class StSelectComponent implements ControlValueAccessor {
  @Input() config: NgxDropdownConfig = {
    placeholder: 'Selecciona',
    moreText: 'más',
    noResultsFound: 'Sin resultados',
    searchPlaceholder: 'Buscar',
    selectAllLabel: 'Seleccionar todo',
    limitTo: 3
  }

  @ViewChild('select') selectRef!: ElementRef

  @Input() options: any[] = []
  @Input() multiple: boolean = true
  @Input() position: 'absolute' | 'fixed' = 'absolute'

  @Output() close = new EventEmitter<any>()
  @Output() open = new EventEmitter<any>()
  @Output() select = new EventEmitter<any>()

  value: any = null

  constructor (private renderer: Renderer2) {}

  // Métodos necesarios para ControlValueAccessor
  onChange: (value: any) => void = () => { }

  onTouched: () => void = () => { }

  writeValue (value: any): void {
    this.value = value
  }

  registerOnChange (fn: any): void {
    this.onChange = fn
  }

  registerOnTouched (fn: any): void {
    this.onTouched = fn
  }

  setDisabledState (isDisabled: boolean): void {
    // Puedes implementar lógica adicional si es necesario
  }

  onOpenSelect (): void {
    if (this.position === 'fixed') this.setPositionSelectList()
    this.open.emit()
  }

  setPositionSelectList (): void {
    const selectElement = this.selectRef.nativeElement
    this.renderer.addClass(selectElement, 'select-type-fixed')

    // se agrega timeout para eludir comportamientos de la libreria
    setTimeout(() => {
      const selectList = selectElement.children[0].querySelector('.ngx-dropdown-container > .ngx-dropdown-list-container')

      const padreRect = selectElement.getBoundingClientRect()
      const offsetTop = padreRect.bottom

      const anchoPadre = selectElement.offsetWidth
      this.renderer.addClass(selectList, 'content-fixed')
      this.renderer.setStyle(selectList, 'position', 'fixed')
      this.renderer.setStyle(selectList, 'top', offsetTop + 'px')
      this.renderer.setStyle(selectList, 'width', anchoPadre + 'px')
    }, 50)
  }

  onCloseSelect (): void {
    this.close.emit()
  }

  onSelect (event: any): void {
    this.select.emit(event.value)
    this.onChange(event.value)
  }
}
