import { HttpClient } from '@angular/common/http'
import { Component, Inject, type OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FileService, fileToSaveI } from '../services/file-service.service'
import { hasValue } from '../../../utils/validations'
import { URL_API } from '../../../config/config'

type fileSaved = Record<string, {
  url: string
  success: boolean
}>
interface ObjetoInterno {
  success: boolean
  url: string
}

type ObjetoPrincipal = Record<string, ObjetoInterno>

@Component({
  selector: 'app-base-form',
  template: `
    <p>
      base form works!
    </p>
  `,
  styles: [
  ]
})
export class BaseForm implements OnInit {
  form: FormGroup = this.fb.group({})
  hasInstance: boolean = false
  isLoad: boolean = false
  path: string = ''
  savedFiles: ObjetoPrincipal = {}

  hasValue = hasValue

  constructor (
    protected dialogRef: MatDialogRef<BaseForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected fb: FormBuilder,
    protected http: HttpClient,
    private fileService: FileService
  ) {}

  async ngOnInit (): Promise<any> {
    await this.setList()
    if (hasValue(this.data.instance)) {
      this.hasInstance = true
      this.setInstance(this.data.instance)
    }
  }

  async setList (): Promise<boolean> {
    return await new Promise((resolve) => {
      resolve(true)
    })
  }

  setInstance (instance: any): void {}

  close (): void {
    this.dialogRef.close()
  }

  getFileList (form: any): fileToSaveI[] {
    return []
  }

  getFileSaved (fileField: string, instanceField: string): string {
    if (!hasValue(this.savedFiles[fileField]) || !this.savedFiles[fileField].success) return this.data.instance[instanceField]
    return this.savedFiles[fileField].url
  }

  async saveFiles (fileList: fileToSaveI[]): Promise<any> {
    const results: fileSaved = {}
    try {
      for (let i = 0; i < fileList.length; i++) {
        const result = await this.fileService.saveFiles(fileList[i])
        results[fileList[i].type] = result
      }
      this.savedFiles = results
      // Aquí puedes hacer algo más después de guardar los archivos, si es necesario
    } catch (error) {
      // console.error('Error al guardar archivos:', error)
    }
  }

  async save (): Promise<void> {
    // saveFiles
    if (this.isLoad) return
    this.isLoad = true
    const fileList: fileToSaveI[] = this.getFileList(this.form.value).filter((x: any) => x.file instanceof File)
    if (fileList.length > 0) await this.saveFiles(fileList)
    const formData = this.formatData(this.form.value)
    let urlService = `${URL_API}${this.path}`
    let method: 'post' | 'put' = 'post'

    if (this.hasInstance) { // si es una edición
      formData[this.data.idField] = this.data.instance[this.data.idField] // se setea el id
      urlService += `/${formData[this.data.idField]}`
      method = 'put'
    }

    this.http[method](urlService, formData).subscribe(
      {
        next: (data: any) => {
          this.dialogRef.close({ success: true, response: data })
          this.isLoad = false
        },
        error: (e) => {
          // TODO: Pendiente implementar alertas de error en este paso
          this.dialogRef.close({ success: false, response: e.message })
          this.isLoad = false
        },
        complete: () => {
          this.isLoad = false
        }
      }
    )
  }

  formatData (form: any): any {
    return form
  }
}
