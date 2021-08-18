import { GetStaticProps } from "next"
import { api } from "services/api"
import { CharacterTemplate } from "templates/Character"
import { CharacterType } from "types/character"

export type CharacterProps = {
  character: CharacterType
}

export default function Character({ character }: CharacterProps) {
  return <CharacterTemplate character={character} />
}

export async function getStaticPaths() {
  const featuredCharacters = [
    { id: 1010801, name: "Ant Man: Scott Lang" },
    { id: 1009180, name: "Beta-Ray: Bill" },
    { id: 1009187, name: "Black Panther" },
    { id: 1009189, name: "Black Widow" },
    { id: 1009220, name: "Captain America" },
    { id: 1017575, name: "Captain America: Sam Wilson" },
    { id: 1010338, name: "Captain Marvel: Carol Denvers" },
    { id: 1009227, name: "Carnage" },
    { id: 1009268, name: "Deadpool" },
    { id: 1009281, name: "Doctor Doom" },
    { id: 1009312, name: "Galactus" },
    { id: 1009351, name: "Hulk" },
    { id: 1009368, name: "Iron-man" },
    { id: 1010704, name: "Iron-lad" },
    { id: 1009384, name: "Kang" },
    { id: 1009407, name: "Loki" },
    { id: 1009452, name: "Moon Knight" },
    { id: 1009477, name: "Nova" },
    { id: 1009562, name: "Scarllet Witch" },
    { id: 1009610, name: "Spider Man: Peter Parker" },
    { id: 1009652, name: "Thanos" },
    { id: 1009664, name: "Thor" },
    { id: 1009697, name: "Vision" },
    { id: 1009718, name: "Wolverine" },
    { id: 1010740, name: "Winter Soldier" }
  ]

  const paths = featuredCharacters.map((character) => ({
    params: { id: String(character.id) }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id

  const characterId = await api.get(`characters/${id}`)
  const characterComics = await api.get(`characters/${id}/comics`)
  const characterEvents = await api.get(`characters/${id}/events`)
  const characterSeries = await api.get(`characters/${id}/series`)

  const comics = characterComics.data.data.results.map((comic: any) => {
    return {
      id: comic.id,
      title: comic.title,
      thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
    }
  })

  const events = characterEvents.data.data.results.map((event: any) => {
    return {
      id: event.id,
      title: event.title,
      thumbnail: `${event.thumbnail.path}.${event.thumbnail.extension}`
    }
  })

  const series = characterSeries.data.data.results.map((series: any) => {
    return {
      id: series.id,
      title: series.title,
      thumbnail: `${series.thumbnail.path}.${series.thumbnail.extension}`
    }
  })

  const character = characterId.data.data.results.map((character: any) => {
    return {
      id: character.id,
      name: character.name,
      description: character.description,
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      comics,
      events,
      series
    }
  })[0]

  return {
    props: {
      character
    }
  }
}
