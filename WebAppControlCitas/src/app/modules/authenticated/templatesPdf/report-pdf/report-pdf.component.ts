import { Component, ElementRef, ViewChild } from '@angular/core'
import { PdfGeneratorService } from '../../../../_services/pdfGenerator.service'

@Component({
  selector: 'app-report-pdf',
  standalone: true,
  imports: [],
  templateUrl: './report-pdf.component.html',
  styleUrl: './report-pdf.component.scss'
})
export class ReportPdfComponent {
  @ViewChild('content', { static: false }) content!: ElementRef

  constructor (private pdfGeneratorService: PdfGeneratorService) { }

  generatePdf (): void {
    const htmlContent = this.content.nativeElement
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.pdfGeneratorService.generatePdf(htmlContent, 'orden.pdf')
  }

  downloadPdf (): void {
    console.log('descargar pdf')
  }
}
