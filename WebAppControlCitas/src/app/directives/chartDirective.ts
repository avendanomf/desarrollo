import { Directive, ElementRef, Input, OnInit } from '@angular/core'
import { Chart, ChartItem, ChartTypeRegistry, registerables } from 'chart.js'

@Directive({
  selector: '[appChart]'
})
export class ChartDirective implements OnInit {
  @Input() chartData: any = []
  @Input() legends: boolean = false
  @Input() chartType: keyof ChartTypeRegistry = 'bar' // Puedes definir un tipo de gráfico predeterminado si lo deseas

  private chart!: Chart

  constructor (private el: ElementRef) { }

  ngOnInit (): void {
    this.createChart()
  }

  private createChart (): void {
    Chart.register(...registerables)
    const ctx: ChartItem = this.el.nativeElement.getContext('2d')

    this.chart = new Chart(ctx, {
      type: this.chartType,
      data: this.chartData,
      options: {
        responsive: false,
        plugins: {
          tooltip: {},
          legend: {
            display: this.legends,
            position: 'top',
            fullSize: true,
            align: 'end' // Alinea la leyenda a la izquierda
          }
        }
      }
    })
  }
}
