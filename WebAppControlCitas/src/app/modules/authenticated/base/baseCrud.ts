/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ComponentType } from '@angular/cdk/overlay'
import { HttpClient } from '@angular/common/http'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { hasValue } from '../../../utils/validations'
import { BaseForm } from './baseForm'
import { Subject, debounceTime } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { NgxDropdownConfig } from 'ngx-select-dropdown'
import { URL_API } from '../../../config/config'
import { ConfirmationDeleteComponent } from '../../../components/confirmation-delete/confirmation-delete.component'

export interface baseFilterI {
  value: any
  placeholder: string
  class?: string
  type: 'select' | 'input' | 'selectMulti'
  field: string
  options?: any[]
  valueKey: string
  selectConfig?: NgxDropdownConfig
}

@Component({
  selector: 'app-base-crud',
  template: `
    <p>
      base works!
    </p>
  `,
  styles: [
  ]
})
export class BaseCrud implements OnInit {
  currentRoute: string = ''
  listItems: any[] = []
  filters: baseFilterI[] = []
  widthCrud: number = 0
  load = false
  currentPage: number = 1
  totalPages: number = 1
  infoAlert: boolean = false
  deleteAlert: boolean = false
  errorAlert: boolean = false
  errorText: string = ''
  hasInstance: boolean = false
  pageSize: number = 10
  idField: string = 'id'
  optionsList: any = {}

  texts: any = {
    deleteLabel: 'entidad'
  }

  formDialogComponent: ComponentType<BaseForm> = BaseForm
  path: string = ''
  countItems: number = 0
  delayFilters: number = 500
  orderBy: string = ''

  hasValue = hasValue

  @ViewChild('crud') crudRef!: ElementRef

  private inputSubject: Subject<string> = new Subject<string>()

  constructor (protected http: HttpClient, protected dialog: MatDialog, private route: ActivatedRoute, private router: Router) {}

  ngOnInit (): void {
    this.getOptionsLists()
    if (this.filters.filter((x: baseFilterI) => x.type === 'input').length > 0) this.initDebounceFiltersInput()
    // TODO: Obtener valores de los filtros

    this.currentRoute = this.router.url.split('?')[0]
    this.route.queryParams.subscribe(params => {
      this.getListHandler()
    })
  }

  getListHandler (): void {
    let paramsString = this.router.url.split('?')[1]
    if (hasValue(this.orderBy)) paramsString += `&orderBy${this.orderBy}`
    this.getList(paramsString)
  }

  ngAfterViewInit (): void {
    this.widthCrud = this.crudRef.nativeElement.scrollWidth
  }

  initDebounceFiltersInput (): void {
    this.inputSubject.pipe(debounceTime(this.delayFilters)).subscribe(() => {
      this.applyFilters()
    })
  }

  getOptionsLists (): void {

  }

  closeAlert (alertName: 'infoAlert' | 'errorAlert' | 'deleteAlert'): void {
    if (alertName === 'errorAlert') {
      this.errorAlert = false
      setTimeout(() => {
        this.errorText = ''
      }, 1000)
    } else if (alertName === 'infoAlert') this.infoAlert = false
    else if (alertName === 'deleteAlert') this.deleteAlert = false
  }

  applyFilters (): void {
    const queryParams: any = {}
    this.filters.forEach((filterItem) => {
      if (hasValue(filterItem.value)) {
        if (filterItem.type === 'input') queryParams[filterItem.field] = filterItem.value
        // TODO: Implementar logica de select
        else if (filterItem.type === 'select') {
          const valueKey = hasValue(filterItem.valueKey) ? filterItem.valueKey : 'value'
          const values = filterItem.value.map((valueItem: any) => {
            return valueItem[valueKey]
          })
          queryParams[filterItem.field] = values.join(',')
        }
      }
    })
    void this.router.navigate([this.currentRoute], {
      queryParams
    })
  }

  clearFilters (): void {
    console.log('clear')
    void this.router.navigate([this.currentRoute], {})
  }

  changeFiltersHandler (filterItem: baseFilterI): void {
    if (filterItem.type === 'input') { // aplicamos un delay a acciones de escritura
      this.inputSubject.next((filterItem.value as string))
    } else if (filterItem.type === 'select') {
      this.applyFilters()
    }
    this.currentPage = 1
  }

  changeOrder (value: string): void {
    this.orderBy = value
    this.getListHandler()
  }

  getList (params: string = ''): void {
    this.load = true
    if (this.path === '') throw new Error('falta el valor del path para traer el listado')
    this.http.get<any[]>(`${URL_API}${this.path}`).subscribe(
      {
        next: (data: any) => {
          this.listItems = data.response
          this.totalPages = data.response.totalPages === 0 ? 1 : data.response.totalPages
          this.countItems = data.response.totalRecords
        },
        error: (e) => {
          this.errorAlert = true
          this.errorText = e.message
          // TODO: Pendiente implementar alertas de error en este paso
        },
        complete: () => {
          this.load = false
        }
      }
    )
  }

  create (): void {
    this.showDailog()
  }

  edit (instance: any): void {
    this.showDailog(instance)
  }

  showDailog (instance: any = null): void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.minWidth = 400
    dialogConfig.minHeight = 400
    dialogConfig.maxWidth = 900
    dialogConfig.data = {
      idField: this.idField,
      optionsList: this.optionsList,
      instance: null
    }
    if (hasValue(instance)) {
      dialogConfig.data.instance = instance
    }
    this.hasInstance = hasValue(instance)

    const dialogRef = this.dialog.open(this.formDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      (data: { success: boolean, response: string }) => {
        if (hasValue(data)) {
          if (data.success) {
            this.getListHandler()
            this.infoAlert = true
          } else {
            this.errorAlert = true
            this.errorText = data.response
          }
        }
      }
    )
  }

  /**
   * @param title titulo de la alerta de eliminación
   * @param description Descripción sobre el item a eliminar
   * @param item item a eliminar
   */
  delete (title: string, description: string, item: any): void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.minWidth = 350
    dialogConfig.minHeight = 230
    dialogConfig.maxWidth = 350

    dialogConfig.data = {
      title,
      description
    }

    const dialogRef = this.dialog.open(ConfirmationDeleteComponent, dialogConfig)

    dialogRef.afterClosed().subscribe((confirmDelete: boolean) => {
      if (confirmDelete) {
        this.load = true
        this.applyDelete(item)
        this.load = false
      }
    })
  }

  applyDelete (item: any): void {
    this.http.delete<any>(`${URL_API}${this.path}/${item[this.idField]}`).subscribe(
      {
        next: () => {
          this.deleteAlert = true
        },
        error: (e) => {
          this.errorAlert = true
          this.errorText = e.message
        },
        complete: () => {
          this.getListHandler()
        }
      }
    )
  }

  changePageHandler (page: number): void {
    this.currentPage = page
    this.getListHandler()
  }
}
