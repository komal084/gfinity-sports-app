<template>
  <div class="table w-24 text-sm md:text-base font-bold mr-2 md:mr-4">
    <div class="table__header flex justify-between items-center py-1.5 border-t-2 border-b-2 border-white">
      <div class="field__key">
        {{ field }}
      </div>
      <div class="field_value">
        {{ info.average }}
      </div>
    </div>

    <div
      v-for="(item, key, index) in info"
      :key="index"
      class="table__row"
    >
      <div v-if="key !== 'average'" class="field flex justify-between items-center my-2">
        <div class="field__key min-w-min text-xs mr-2 md:mr-4 capitalize">
          {{ key | splitString }}
        </div>
        <div class="field_value">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import textMixin from '@/mixins/textFormatter'

export default {
  name: 'SubTable',

  mixins: [textMixin],

  props: {
    info: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    }
  }
}
</script>
