import imageUrlBuilder from '@sanity/image-url'
import { Card } from '@/models'
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: '21fy9g0s',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true
})

const builder = imageUrlBuilder(client)

let clickCount = 0
let order = 'asc'
let query = '*[_type == "fifaCard"]'

export async function getAllCards (field?: string) {
  clickCount = clickCount === 0 ? 1 : 0
  order = clickCount === 0 ? 'asc' : 'desc'

  if (field) {
    query = `*[_type == "fifaCard"] | order(${field} ${order})`
  }

  return await client.fetch(query)
}

export async function getSingleCard (id: string) {
  let currentCard = {}

  try {
    currentCard = await client.fetch(`[_id == ${id}]`)
  } catch {
    const allCards = await client.fetch('*[_type == "fifaCard"]')
    currentCard = allCards.find((card: Card) => card._id === id)
  }

  return currentCard
}

export function urlFor (source: string) {
  return builder.image(source).auto('format').width(182)
}
