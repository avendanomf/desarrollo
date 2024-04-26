import { Component } from '@angular/core'
import { BaseForm } from '../../../base/baseForm'
import { FormGroup, Validators } from '@angular/forms'
import { fileToSaveI } from '../../../services/file-service.service'

@Component({
  selector: 'app-form-vehicle',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormVehicleComponent extends BaseForm {
  validators = Validators

  optionsList = {
    drivers: []
  }

  previewFiles: any = {}

  override path: string = 'vehicle'
  override form: FormGroup = this.fb.group({
    // Define tus controles y reglas de validación aquí
    placa: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6}$/)]],
    tarjetaPropiedad: [null, Validators.required], // Archivo
    noTarjetaPropiedad: ['', Validators.required],
    vencimientoRtm: ['', Validators.required],
    numeroRtm: ['', Validators.required],
    tecnicomecanica: [null, Validators.required], // Archivo
    vencimientoSoat: ['', Validators.required],
    numeroSoat: ['', Validators.required],
    soat: [null, Validators.required], // Archivo
    capacidadKg: [0, Validators.required],
    capacidadMt3: [0, Validators.required],
    conductorId: [null, Validators.required],
    pin: ['']
  })

  override async setList (): Promise<boolean> {
    return await new Promise((resolve) => {
      this.optionsList.drivers = this.data.optionsList.drivers
      resolve(true)
    })
  }

  override async setInstance (data: any): Promise<any> {
    console.log({ data })
    const conductorId = { label: data.conductor.nombres, value: data.conductorId }
    this.previewFiles = {
      soat: data.soat,
      tecnicomecanica: data.tecnicomecanica,
      tarjetaPropiedad: data.tarjetaPropiedad
    }

    this.form.patchValue({
      placa: data.placa,
      noTarjetaPropiedad: data.noTarjetaPropiedad,
      vencimientoRtm: data.vencimientoRtm,
      numeroRtm: data.numeroRtm,
      vencimientoSoat: data.vencimientoSoat,
      numeroSoat: data.numeroSoat,
      soat: data.soat,
      tecnicomecanica: data.tecnicomecanica,
      tarjetaPropiedad: data.tarjetaPropiedad,
      capacidadKg: data.capacidadKg,
      capacidadMt3: data.capacidadMt3,
      conductorId,
      pin: data.pin
    })
  }

  override getFileList (form: any): fileToSaveI[] {
    return [
      { file: form.soat, type: 'soat' },
      { file: form.tarjetaPropiedad, type: 'tarjetaPropiedad' },
      { file: form.tecnicomecanica, type: 'tecnicomecanica' }
    ]
  }

  override formatData (form: any): any {
    const formData: any = {
      placa: form.placa,
      noTarjetaPropiedad: form.noTarjetaPropiedad,
      vencimientoRtm: form.vencimientoRtm,
      numeroRtm: form.numeroRtm,
      vencimientoSoat: form.vencimientoSoat,
      numeroSoat: form.numeroSoat,
      capacidadKg: form.capacidadKg,
      capacidadMt3: form.capacidadMt3,
      conductorId: form.conductorId.value, // Selector
      pin: form.pin,
      activo: true,
      // Files
      soat: this.getFileSaved('soat', 'soat'),
      tecnicomecanica: this.getFileSaved('tecnicomecanica', 'tecnicomecanica'),
      tarjetaPropiedad: this.getFileSaved('tarjetaPropiedad', 'tarjetaPropiedad')
    }
    return formData
  }
}
