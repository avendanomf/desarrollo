import { Component } from '@angular/core'
import { FormArray, FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '../../../base/baseForm'
import { firstValueFrom } from 'rxjs'
import { URL_API } from '../../../../../config/config'
import { hasValue } from '../../../../../utils/validations'

export interface ServiceRequest {
  servicioId: number
  solicitudId: number
  status: string
  productoId: number
  cantidad: number
  producto: Producto
  solicitud: null
}

export interface Producto {
  productoId: number
  nombre: string
  descripcion: null
  activo: null
  uMedida: string
  categoria: null
}

export interface serviceItemI {
  type: 'servicesRCD' | 'servicesSM'
  productoId?: any
  cantidad?: number
  selected?: boolean
  status?: any
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormRequestComponent extends BaseForm {
  validators = Validators
  override isLoad: boolean = true

  optionsList = {
    projects: [],
    productsSM: [],
    productsRCD: [],
    customers: []
  }

  tabIndex: number = 0
  override path: string = 'request'

  override form: FormGroup = this.fb.group({
    // Define tus controles y reglas de validación aquí
    clienteId: [null, Validators.required],
    proyectoId: [null, [Validators.required]],
    fechaRequerimiento: ['', Validators.required],
    order: this.fb.group({
      // irian los campos de un grupo de formulario
    }),
    servicesRCD: this.fb.array([]),
    servicesSM: this.fb.array([]),
    observations: ['', []]
  })

  override async setInstance (data: any): Promise<any> {
    // colocar aqui un metodo para traer los demas datos de la instancia
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const { response: requestData } = await this.getRequest(data.solicitudesId)
    const clienteId = { label: data.obra.cliente.nombre, value: data.obra.clienteId }
    const proyectoId = { label: data.obra.proyecto.nombre, value: data.obra.proyectoId }

    requestData.servicios.forEach((x: ServiceRequest) => {
      const typeService = x.producto.categoria !== 'Suministro' ? 'servicesRCD' : 'servicesSM'
      const productoId = { label: x.producto.nombre, value: x.productoId, uMedida: x.producto.uMedida }

      this.addService(
        {
          type: typeService,
          productoId,
          cantidad: x.cantidad,
          selected: false,
          status: hasValue(x.status) ? x.status : 'pendiente'
        }
      )
    })

    this.form.patchValue({
      name: data.nombre,
      clienteId,
      fechaRequerimiento: data.fechaRequerimiento,
      observations: data.observaciones,
      proyectoId
    })

    this.isLoad = false
  }

  async getRequest (id: number): Promise<any> {
    try {
      const urlService = `${URL_API}${this.path}`
      const { response } = await firstValueFrom(this.http.get<any>(urlService + '/' + id))
      return { response, success: true }
    } catch (error: any) {
      return { success: false, errorText: error.message }
    }
  }

  override async setList (): Promise<boolean> {
    return await new Promise((resolve) => {
      this.optionsList.projects = this.data.optionsList.projects
      this.optionsList.productsSM = this.data.optionsList.productsSM
      this.optionsList.productsRCD = this.data.optionsList.productsRCD
      this.optionsList.customers = this.data.optionsList.customers
      resolve(true)
    })
  }

  override formatData (form: any): any {
    console.log('teeasd', form)
    const servicios: any = []

    form.servicesRCD.forEach((x: any) => {
      servicios.push({
        productoId: x.productoId.value,
        cantidad: x.productoId.value
      })
    })

    form.servicesSM.forEach((x: any) => {
      servicios.push({
        productoId: x.productoId.value,
        cantidad: x.productoId.value
      })
    })

    return {
      obraId: 1,
      observaciones: form.observations,
      fechaRequerimiento: form.fechaRequerimiento,
      estado: 'Nuevo',
      servicios
    }
  }

  saveAndGenerateOrder (): void {
    this.tabIndex = 1
  }

  backSolicitud (): void {
    this.tabIndex = 0
  }

  get servicesRCD (): FormArray {
    return this.form.get('servicesRCD') as FormArray
  }

  get servicesSM (): FormArray {
    return this.form.get('servicesSM') as FormArray
  }

  addService ({ type, productoId = null, cantidad = 1, selected = false, status = '' }: serviceItemI): void {
    const newService = this.fb.group({
      productoId: [productoId, Validators.required],
      cantidad: [cantidad, Validators.required],
      selected: [selected],
      status: [status]
    })

    const formArray = this.form.get(type) as FormArray
    formArray.push(newService)
  }
}
