// pdf-generator.service.ts
import { Injectable } from '@angular/core'
// @ts-expect-error La siguiente libreria no tiene soporte de tipos
import html2pdf from 'html2pdf.js'

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {
  generatePdf (htmlContent: HTMLElement, fileName: string): void {
    const opt = {
      margin: 1,
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        letterRendering: true,
        scale: 2
      },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait'
      }
    }

    html2pdf()
      .from(htmlContent)
      .set(opt)
      .save(fileName)
  }
}
