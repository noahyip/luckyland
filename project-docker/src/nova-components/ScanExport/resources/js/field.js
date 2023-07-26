import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-scan-export', IndexField)
  app.component('detail-scan-export', DetailField)
  app.component('form-scan-export', FormField)
})
