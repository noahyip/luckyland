import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-scan-import-product', IndexField)
  app.component('detail-scan-import-product', DetailField)
  app.component('form-scan-import-product', FormField)
})
