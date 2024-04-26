import { Component } from '@angular/core'
import { BaseForm } from '../../../base/baseForm'
import { FormGroup, Validators } from '@angular/forms'
import { fileToSaveI } from '../../../services/file-service.service'

@Component({
  selector: 'app-form-reports',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class ReportFormComponent extends BaseForm {
  validators = Validators

  optionsList = {
    users: []
  }

  previewFiles: any = {}

  override path: string = 'driver'
  override form: FormGroup = this.fb.group({
    // Define tus controles y reglas de validación aquí
    urlPlanilla: [null, Validators.required], // Archivo
    urlLicencia: [null, Validators.required],
    urlDocumento: [null, Validators.required],
    fechaVencimientoLicencia: ['', Validators.required],
    fechaVencimientoPlanilla: [null, Validators.required], // Archivo
    usuarioId: [null, Validators.required]
  })

  override async setList (): Promise<boolean> {
    return await new Promise((resolve) => {
      this.optionsList.users = this.data.optionsList.users
      resolve(true)
    })
  }

  override async setInstance (data: any): Promise<any> {
    const usuarioId = { label: data.usuario.nombres, value: data.usuarioId }
    this.previewFiles = {
      urlDocumento: data.urlDocumento,
      urlLicencia: data.urlLicencia,
      urlPlanilla: data.urlPlanilla
    }

    this.form.patchValue({
      urlDocumento: data.urlDocumento,
      urlLicencia: data.urlLicencia,
      urlPlanilla: data.urlPlanilla,
      fechaVencimientoLicencia: data.fechaVencimientoLicencia,
      fechaVencimientoPlanilla: data.fechaVencimientoPlanilla,
      usuarioId
    })
  }

  override getFileList (form: any): fileToSaveI[] {
    return [
      { file: form.urlDocumento, type: 'documentoUsuario' },
      { file: form.urlLicencia, type: 'licencia' },
      { file: form.urlPlanilla, type: 'planilla' }
    ]
  }

  override formatData (form: any): any {
    const formData: any = {
      fechaVencimientoLicencia: form.fechaVencimientoLicencia,
      fechaVencimientoPlanilla: form.fechaVencimientoPlanilla,
      usuarioId: form.usuarioId.value, // Selector
      activo: true,
      // Files
      urlDocumento: this.getFileSaved('documentoUsuario', 'urlDocumento'),
      urlLicencia: this.getFileSaved('licencia', 'urlLicencia'),
      urlPlanilla: this.getFileSaved('planilla', 'urlPlanilla')
    }
    return formData
  }
}
