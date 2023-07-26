import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-scan-export-product', IndexField)
  app.component('detail-scan-export-product', DetailField)
  app.component('form-scan-export-product', FormField)
})
