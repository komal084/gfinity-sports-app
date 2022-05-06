<template>
  <div class="home h-screen">
    <Header />

    <div
      v-if="$fetchState.pending || isFetchError"
      class="actions flex items-center justify-center space-x-2 py-80"
    >
      <!-- Loading -->
      <Spinner v-if="$fetchState.pending" />

      <!-- Fetch error -->
      <div
        v-if="isFetchError"
        class="action__error text-base"
      >
        Sorry, there's some server error. Please try again later!
      </div>
    </div>

    <!-- Content -->
    <div v-if="!$fetchState.pending && !isFetchError" class="section bg-gray-700 flex md:justify-center lg:overflow-hidden pt-16 lg:pt-0">
      <div class="section__body md:w-full md:max-w-screen-lg">
        <!-- Table header -->
        <div class="section__header bg-black lg:px-24 md:px-12 pt-4 sm:pt-6 md:pt-8 lg:pt-12">
          <TableHeader />
        </div>

        <!-- Table content list -->
        <div class="section__content bg-gray-900">
          <TableRow
            v-for="card in cardsList"
            :key="card._id"
            :data="card"
          />
        </div>

        <!-- Table footer -->
        <div class="section__footer bg-black h-28" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Card } from '@/models'
import { getAllCards } from '@/services/index'

export default {
  name: 'CardsList',

  data () {
    return {
      cardsList: [],
      isFetchError: false
    }
  },

  async fetch () {
    await getAllCards().then((response: Card[]) => {
      // Success
      this.isFetchError = false
      this.cardsList = [...response]
    }).catch(() => {
      // Failure
      this.isFetchError = true
      this.cardsList = []
    })
  },

  fetchDelay: 1000,

  head () {
    return {
      title: 'Sports App - Latest Sports & Players Information',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get all the latest streaming sports and players list in online.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'sports, players, stremaing, games, fifa'
        }
      ]
    }
  }
}
</script>
