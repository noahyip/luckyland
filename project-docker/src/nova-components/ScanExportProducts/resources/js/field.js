import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-scan-export-products', IndexField)
  app.component('detail-scan-export-products', DetailField)
  app.component('form-scan-export-products', FormField)
})
