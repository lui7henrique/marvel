export type CharacterType = {
  id: number
  name: string
  description: string
  thumbnail: string
  comics: List[]
  events: List[]
  series: List[]
  urls: [{ type: string; url: string }]
}

export type Participations = {
  available: number
  collectionURI: string
  returned: number
  items: [{ name: string; resourceURI: string }]
}

type List = {
  id: number
  thumbnail: string
  title: string
}
