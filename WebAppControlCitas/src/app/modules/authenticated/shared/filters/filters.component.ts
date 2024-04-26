import { Component, EventEmitter, Input, Output } from '@angular/core'
import { baseFilterI } from '../../base/baseCrud'
import { NgxDropdownConfig } from 'ngx-select-dropdown'

@Component({
  selector: 'base-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  @Output() changeFilters = new EventEmitter<baseFilterI>()
  @Output() clearFilters = new EventEmitter()
  @Input() filtersList: baseFilterI[] = []

  configSelects: NgxDropdownConfig = {
    placeholder: 'Selecciona',
    moreText: 'más',
    noResultsFound: 'Sin resultados',
    searchPlaceholder: 'Buscar',
    selectAllLabel: 'Seleccionar todo'
  }

  handleChangeInput (event: Event, item: baseFilterI): void {
    item.value = (event.target as HTMLInputElement).value
    this.changeFilters.emit(item)
  }

  handleChangeSelect (event: Event, item: baseFilterI): void {
    item.value = event
    this.changeFilters.emit(item)
  }

  setConfigSelects (item: baseFilterI): NgxDropdownConfig {
    return { ...this.configSelects, ...item.selectConfig, placeholder: item.placeholder }
  }

  clearFiltersHandler (): void {
    this.clearFilters.emit()
  }
}
