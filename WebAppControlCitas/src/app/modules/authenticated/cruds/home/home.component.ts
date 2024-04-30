import { Component } from '@angular/core'
import { ListCardStatusItem } from './card-status/card-status.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listCitasPendientes: ListCardStatusItem[] = [
    {
      count: 10,
      text: 'Nuevas'
    },
    {
      count: 30,
      text: 'Programadas'
    },
    {
      count: 20,
      text: 'Canceladas'
    }
  ]

  listCitasAtendidas: ListCardStatusItem[] = [
    {
      count: 10,
      text: 'Atendidas'
    },
    {
      count: 30,
      text: 'Reprogramadas'
    },
    {
      count: 20,
      text: 'Completadas'
    },
    {
      count: 20,
      text: 'No Presentados'
    }
  ]

  listClientes: ListCardStatusItem[] = [{ count: 10, text: 'Clientes' }]
  listProyectos: ListCardStatusItem[] = [{ count: 10, text: 'Clientes' }]
  listVehiculos: ListCardStatusItem[] = [{ count: 10, text: 'Clientes' }]

  chartData = {
    labels: this.getMonths(7),
    datasets: [
      {
        label: 'Citas Programadas',
        data: [34, 12, 42, 12, 60, 72, 40],
        borderColor: '#A8C5DA',
        backgroundColor: '#A8C5DA',
        borderWidth: 1,
        borderDash: [3, 2],
        tension: 0.2,
        borderJoinStyle: 'round',
        pointRadius: 1
      },
      {
        label: 'Citas Atendidas',
        data: [20, 32, 12, 43, 12, 12, 32],
        borderColor: '#D9CFB9',
        borderWidth: 1,
        backgroundColor: '#D9CFB9',
        tension: 0.2,
        borderJoinStyle: 'round',
        pointRadius: 1
      }
    ]
  }

  getMonths (qty: number): string[] {
    const months: string[] = []
    const currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    // Generar los nombres de los meses para los últimos 7 meses
    for (let i = 0; i < qty; i++) {
      // Añadir el nombre del mes al array
      months.unshift(this.getMonthName(currentMonth))
      // Mover al mes anterior
      currentMonth = (currentMonth - 1 + 12) % 12
    }
    return months
  }

  getMonthName (monthIndex: number): string {
    const months = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ]
    return months[monthIndex]
  }

  doughnutData = {
    labels: ['Consulta Externa', 'Urgencias', 'Hospitalización', 'Otros'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [30, 23, 12, 45, 65],
        backgroundColor: ['#D9CFB9', '#C5C5C5', '#949494', '#E0B144'],
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