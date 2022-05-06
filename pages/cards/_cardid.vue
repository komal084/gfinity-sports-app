<template>
  <div class="card">
    <Header />

    <div
      v-if="$fetchState.pending || isFetchError"
      class="flex items-center justify-center space-x-2 py-80"
    >
      <!-- Loading -->
      <Spinner v-if="$fetchState.pending" />

      <!-- Fetch error -->
      <div
        v-if="isFetchError"
        class="text-base"
      >
        Sorry, there's some server error. Please try again later!
      </div>
    </div>

    <!-- Card info -->
    <div v-if="!$fetchState.pending && !isFetchError" class="section bg-gray-700 h-screen flex md:justify-center pt-16 lg:pt-0">
      <div class="section__body bg-black w-full md:max-w-screen-lg lg:px-5 py-0 md:py-8 border-white">
        <!-- Player stat info -->
        <div class="section__content bg-gray-900 px-2 lg:px-8 py-11 mb-10 sm:rounded-xl md:flex md:justify-between md:items-start">
          <div class="section_image mb-5 md:mb-0">
            <img
              :src="getImageUrl"
              :alt="card.name"
              class="mx-auto"
            >
          </div>

          <div class="section_right lg:flex lg:justify-between lg:items-start mt-3">
            <div class="section__row flex items-start">
              <Table
                :info="card.statistics.pace"
                :field="`PAC`"
              />

              <Table
                :info="card.statistics.shooting"
                :field="`SHO`"
              />

              <Table
                :info="card.statistics.passing"
                :field="`PAS`"
              />
            </div>

            <div class="section_row flex items-start">
              <Table
                :info="card.statistics.dribbling"
                :field="`DRI`"
              />

              <Table
                :info="card.statistics.defense"
                :field="`DEF`"
              />

              <Table
                :info="card.statistics.physical"
                :field="`PHY`"
              />
            </div>
          </div>
        </div>

        <!-- Player personal info -->
        <div class="section__content px-2 md:px-8 text-sm">
          <div class="player flex items-end font-bold mb-8">
            <div class="player__name text-4xl mr-1.5">
              {{ card.name }}
            </div>

            <NuxtLink
              :to="{ name: 'index' }"
              class="border-b border-text-gray-400 text-gray-400 border-dotted mb-1"
            >
              View all cards
            </NuxtLink>
          </div>

          <div class="player__info flex justify-between items-start flex-col sm:flex-row">
            <div class="field mb-2 md:mb-0 pb-4 md:pb-0 lg:pr-5 border-b sm:border-b-0 sm:border-r border-text-gray-400 flex justify-between items-center md:block">
              <div class="field__key font-bold text-gray-400 mb-0 lg:mb-5">
                Club
              </div>
              <div class="field_value capitalize">
                {{ card.club }}
              </div>
            </div>

            <div class="field mb-2 md:mb-0 pb-4 md:pb-0 lg:pr-5 border-b sm:border-b-0 sm:border-r border-text-gray-400 flex justify-between items-center md:block">
              <div class="field__key font-bold text-gray-400 mb-0 lg:mb-5">
                League
              </div>
              <div class="field_value capitalize">
                {{ card.league }}
              </div>
            </div>

            <div class="field mb-2 md:mb-0 pb-4 md:pb-0 lg:pr-5 border-b sm:border-b-0 sm:border-r border-text-gray-400 flex justify-between items-center md:block">
              <div class="field__key font-bold text-gray-400 mb-0 lg:mb-5">
                Nation
              </div>
              <div class="field_value capitalize">
                {{ card.nation }}
              </div>
            </div>

            <div class="field mb-2 md:mb-0 pb-4 md:pb-0 lg:pr-5 border-b sm:border-b-0 sm:border-r border-text-gray-400 flex justify-between items-center md:block">
              <div class="field__key font-bold text-gray-400 mb-0 lg:mb-5">
                Strong Foot
              </div>
              <div class="field_value capitalize">
                {{ card.strongFoot }}
              </div>
            </div>

            <div class="field mb-2 md:mb-0 pb-4 md:pb-0 lg:pr-5 border-b sm:border-b-0 sm:border-r border-text-gray-400 flex justify-between items-center md:block">
              <div class="field__key font-bold text-gray-400 mb-0 lg:mb-5">
                Age
              </div>
              <div class="field_value capitalize">
                {{ card.age }}
              </div>
            </div>

            <div class="field mb-2 md:mb-0 pb-4 md:pb-0 lg:pr-5 border-b sm:border-b-0 sm:border-r border-text-gray-400 flex justify-between items-center md:block">
              <div class="field__key font-bold text-gray-400 mb-0 lg:mb-5">
                Height
              </div>
              <div class="field_value capitalize">
                {{ card.height }}
              </div>
            </div>

            <div class="field mb-2 md:mb-0 pb-4 md:pb-0 lg:pr-5 border-b sm:border-b-0 border-text-gray-400 flex justify-between items-center md:block">
              <div class="field__key font-bold text-gray-400 mb-0 lg:mb-5">
                Workrates
              </div>
              <div class="field_value capitalize">
                {{ card.workRatesAttacking }} \ {{ card.workRatesDefensive }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Card } from '@/models'
import { getSingleCard, urlFor } from '@/services/index'

export default {
  name: 'SingleCard',

  data () {
    return {
      card: {},
      isFetchError: false
    }
  },

  async fetch () {
    await getSingleCard(this.$route.params.id).then((response: Card) => {
      // Success
      this.isFetchError = false
      this.card = { ...response }
    }).catch(() => {
      // Failure
      this.isFetchError = true
      this.card = {}
    })
  },

  fetchDelay: 1000,

  head () {
    return {
      title: this.card.name
    }
  },

  computed: {
    getImageUrl () {
      return urlFor(this.card.cardImage.asset._ref)
    }
  }
}
</script>
