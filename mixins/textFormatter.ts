import { Rate } from '@/models'

const textMixin = {
  filters: {
    formatRate (rate: Rate) {
      let currentRate = ''

      switch (rate) {
        case Rate.low:
          currentRate = 'L'
          break

        case Rate.medium:
          currentRate = 'M'
          break

        case Rate.high:
          currentRate = 'H'
          break
      }

      return currentRate
    },

    splitString (str: string) {
      return str.split(/(?=[A-Z])/).join(' ')
    }
  }
}

export default textMixin
