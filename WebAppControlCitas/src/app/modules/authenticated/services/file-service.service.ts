import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { lastValueFrom } from 'rxjs'
import { URL_BUCKET } from '../../../config/config'

export interface fileToSaveI {
  file: File
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor (private http: HttpClient) { }

  async saveFiles (fileItem: fileToSaveI): Promise<any> {
    const formData = new FormData()
    formData.append('file', fileItem.file)
    formData.append('type', fileItem.type)
    return await lastValueFrom(this.http.post(URL_BUCKET + 'saveFile.php', formData))
  }
}
