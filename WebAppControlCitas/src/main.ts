import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import './app/utils/icons.js'
import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => { console.error(err) })
