import { Component, ElementRef, Input, ViewChild, ViewEncapsulation, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { hasValue } from '../../utils/validations'

@Component({
  selector: 'st-input-file',
  templateUrl: './st-input-file.component.html',
  styleUrls: ['./st-input-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StInputFileComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class StInputFileComponent implements ControlValueAccessor {
  @Input() accept: string = ''
  @Input() urlFile?: string = ''
  @ViewChild('fileInput', { static: true }) fileInput!: ElementRef<HTMLInputElement>

  hasValue = hasValue

  private onChange!: (value: any) => void
  private onTouch!: () => void
  private file: File | null = null
  fileName: string = ''

  ngOnInit (): void {
  }

  writeValue (value: any): void {
    this.file = value
    this.fileInput.nativeElement.value = ''
  }

  registerOnChange (fn: any): void {
    this.onChange = fn
  }

  registerOnTouched (fn: any): void {
    this.onTouch = fn
  }

  setDisabledState? (isDisabled: boolean): void {
    // Implementar según sea necesario
  }

  onFileChange (event: any): void {
    const fileList: FileList = event.target.files
    if (fileList.length > 0) {
      this.file = fileList[0]
      this.fileName = fileList[0].name
      this.onChange(this.file) // Emite el valor al formControl
      this.onTouch() // Marca el control como 'tocado'
    }
  }

  getName (url: string = ''): string {
    const lastPartUrl = url.substring(url.lastIndexOf('/') + 1)
    return lastPartUrl.split('?')[0]
  }
}
