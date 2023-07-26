<template>
  <DefaultField
    :field="field"
    :errors="errors"
    :show-help-text="showHelpText"
    :full-width-content="fullWidthContent"
  >
    <template #field>
      <input
        :id="field.attribute"
        type="text"
        class="w-full form-control form-input form-input-bordered"
        :class="errorClasses"
        :placeholder="text.platNum"
        v-model="product.platNum"
        @keypress.enter.prevent
      />
      <input
        :id="field.attribute"
        type="text"
        class="w-full form-control form-input form-input-bordered"
        :class="errorClasses"
        :placeholder="field.name"
        v-on:keyup.enter="onEnter"
        v-model="product.rawData"
        @keypress.enter.prevent
      />
      <table id="table" class="table w-full">
        <thead>
          <tr>
            <th scope="col">Po Num</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, i) in lastProduct" :key="i">
            <td>{{ p.poNum }}</td><td>{{ p.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </DefaultField>
</template>
<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ['resourceName', 'resourceId', 'field'],

  data() {
            return {
                text: {
                  'platNum': 'Plat Num',
                  'Export': 'Export '
                },
                lastProduct: [
                  
                ],
                product: {}
            }
        },
  methods: {
    /*
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
      this.product.rawData = this.field.value || ''
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.fieldAttribute, this.value || '')
    },
    onEnter: function() {
      const axios = require('axios');
      axios.post('http://localhost:81/api/products', this.product)
            .then()
            .catch(err => console.log(err))
            .finally(() => this.loading = false)
      this.lastProduct.push({'poNum': this.product.rawData.split(";")[0].substring(2), 'quantity': this.product.rawData.split(";")[2].substring(3)})
      this.setInitialValue()
    },
  },
}
</script>
