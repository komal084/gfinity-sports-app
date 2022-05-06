<template>
  <NuxtLink :to="{ name: 'cards-cardid', params: { id: data._id } }">
    <div class="trow lg:px-24 md:px-12 py-2.5 flex justify-center items-center font-bold border-b border-black">
      <div class="min-w-min w-1/5 px-4 py-1.5 flex justify-start items-center">
        <div class="uppercase">
          {{ data.name || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
        <div class="bg-white text-black rounded px-1.5 py-2 w-12 text-center">
          {{ data.rating || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
        <div class="bg-black rounded px-1.5 py-2 w-12 text-center">
          {{ data.position || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
        <div class="bg-black rounded px-1.5 py-2 w-12 text-center truncate">
          {{ data.cardType || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
        <div class="bg-black border border-white rounded px-1.5 py-2 w-12 text-center">
          {{ data.statistics.pace.average || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
        <div class="bg-black border border-white rounded px-1.5 py-2 w-12 text-center">
          {{ data.statistics.shooting.average || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
        <div class="bg-black border border-white rounded px-1.5 py-2 w-12 text-center">
          {{ data.statistics.passing.average || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
        <div class="bg-black border border-white rounded px-1.5 py-2 w-12 text-center">
          {{ data.statistics.dribbling.average || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
        <div class="bg-black border border-white rounded px-1.5 py-2 w-12 text-center">
          {{ data.statistics.defense.average || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
        <div class="bg-black border border-white rounded px-1.5 py-2 w-12 text-center">
          {{ data.statistics.physical.average || '--' }}
        </div>
      </div>
      <div class="min-w-min w-1/12 px-3 py-1.5">
        <div class="bg-black rounded px-1.5 py-2 w-12 text-center">
          {{ data.workRatesAttacking | formatRate }} \ {{ data.workRatesDefensive | formatRate }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Card } from '@/models'
import textMixin from '@/mixins/textFormatter'

export default {
  name: 'TableRow',

  mixins: [textMixin],

  props: {
    data: {
      type: Object as PropType<Card>,
      required: true
    }
  }
}
</script>
