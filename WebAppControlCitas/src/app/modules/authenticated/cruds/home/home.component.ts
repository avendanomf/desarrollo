import { Component } from '@angular/core'
import { ListCardStatusItem } from './card-status/card-status.component'
import { HttpClient } from '@angular/common/http'
import { URL_API } from '../../../../config/config'

interface ChartData {
  labels: string[]
  datasets: Array<{
    label: string
    data: number[]
    borderColor: string
    backgroundColor: string
    borderWidth: number
    borderDash?: number[]
    tension: number
    borderJoinStyle: string
    pointRadius: number
  }>
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (protected http: HttpClient) { }
  isLoad = true
  listSolicitudes: ListCardStatusItem[] = []
  listOrdenes: ListCardStatusItem[] = []
  listClientes: ListCardStatusItem[] = []
  listProyectos: ListCardStatusItem[] = [{ count: 10, text: 'Clientes' }]
  listVehiculos: ListCardStatusItem[] = [{ count: 10, text: 'Clientes' }]

  chartData: ChartData = {
    labels: [],
    datasets: []
  }

  ngOnInit (): void {
    this.getList()
    // Suponiendo que recibes el JSON en una variable llamada jsonData
    const ord = `
    {      
      "ordenesPorMes": [
        {
            "mes": "2024-05",
            "label": "Cerrada",
            "cantidad_ordenes": 4
        },
        {
            "mes": "2024-05",
            "label": "En curso",
            "cantidad_ordenes": 2
        },
        {
            "mes": "2024-05",
            "label": "Nueva",
            "cantidad_ordenes": 5
        },
        {
            "mes": "2024-04",
            "label": "Cerrada",
            "cantidad_ordenes": 3
        },
        {
            "mes": "2024-04",
            "label": "En curso",
            "cantidad_ordenes": 4
        },
        {
            "mes": "2024-04",
            "label": "Nueva",
            "cantidad_ordenes": 5
        },
        {
            "mes": "2024-03",
            "label": "Cerrada",
            "cantidad_ordenes": 4
        },
        {
            "mes": "2024-03",
            "label": "En curso",
            "cantidad_ordenes": 5
        },
        {
            "mes": "2024-03",
            "label": "Nueva",
            "cantidad_ordenes": 5
        },
        {
            "mes": "2024-02",
            "label": "Activo",
            "cantidad_ordenes": 1
        },
        {
            "mes": "2024-02",
            "label": "Cerrada",
            "cantidad_ordenes": 6
        },
        {
            "mes": "2024-02",
            "label": "En curso",
            "cantidad_ordenes": 5
        },
        {
            "mes": "2024-02",
            "label": "Nueva",
            "cantidad_ordenes": 3
        },
        {
            "mes": "2024-01",
            "label": "Cerrada",
            "cantidad_ordenes": 6
        },
        {
            "mes": "2024-01",
            "label": "En curso",
            "cantidad_ordenes": 4
        },
        {
            "mes": "2024-01",
            "label": "Nueva",
            "cantidad_ordenes": 7
        }
    ]
    }
    `
    const parsedData = JSON.parse(ord)
    console.log({ parsedData })
    // this.pushOrdenesPorMes(parsedData)
  }

  getRandomColor (): string {
    // Genera un color hexadecimal aleatorio
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  getList (): void {
    // this.load = true
    this.http.get<any[]>(`${URL_API}home`).subscribe(
      {
        next: (data: any) => {
          this.pushOrders(data.response.ordenes)
          this.pushRequest(data.response.solicitudes)
          this.listClientes = [{ count: data.response.clientesActivos, text: 'Clientes' }]
          this.listProyectos = [{ count: data.response.proyectosActivos, text: 'Proyectos' }]
          this.listVehiculos = [{ count: data.response.vehiculosActivos, text: 'Vehiculos' }]
          this.pushOrdenesPorMes({ ordenesPorMes: data.response.ordenesPorMes })
          this.isLoad = false
        },
        error: (e) => {
          console.log(e)
        },
        complete: () => {
          // this.load = false
        }
      }
    )
  }

  pushOrdenesPorMes (ord: any): void {
    ord.ordenesPorMes.forEach((item: any) => {
      let labelIndex = this.chartData.labels.findIndex(label => label === item.mes)
      if (labelIndex === -1) {
        this.chartData.labels.push(item.mes)
        this.chartData.datasets.forEach(dataset => {
          dataset.data.push(0) // Agrega una cantidad inicial de 0 para cada nuevo mes
        })
        labelIndex = this.chartData.labels.length - 1
      }

      let datasetIndex = this.chartData.datasets.findIndex(dataset => dataset.label === item.label)
      if (datasetIndex === -1) {
        // Si el dataset no existe, lo crea
        const color = this.getRandomColor() // Función para generar un color aleatorio
        datasetIndex = this.chartData.datasets.length
        this.chartData.datasets.push({
          label: item.label,
          data: Array(this.chartData.labels.length - 1).fill(0), // Llena con 0s para los meses anteriores
          borderColor: color,
          backgroundColor: color,
          borderWidth: 1,
          tension: 0.2,
          borderJoinStyle: 'round',
          pointRadius: 1
        })
      }
      this.chartData.datasets[datasetIndex].data[labelIndex] += item.cantidad_ordenes
    })
  }

  pushOrders (orders: any): void {
    this.listOrdenes = orders
  }

  pushRequest (request: any): void {
    this.listSolicitudes = request
  }

  doughnutData = {
    labels: ['United States', 'Canada', 'Mexico', 'Other'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [30, 23, 12, 45, 65],
        backgroundColor: ['#51abcb', '#C5C5C5', '#949494', '#E0B144'],
        borderRadius: 4
      }
    ]
  }

  showFormSolicitudes (): void {
    console.log('show Form solicitudes')
  }

  showFormOrdenes (): void {
    console.log('show Form ordenes')
  }
}
