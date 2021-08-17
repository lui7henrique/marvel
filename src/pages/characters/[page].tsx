/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next"
import { api } from "services/api"
import { CharactersTemplate } from "templates/Characters"

export type CharactersProps = {
  characters: [
    {
      id: number
      hero: string
      name?: string
      description: string
      thumbnail: string
    }
  ]
  totalPages: number
}

export default function Characters({
  characters,
  totalPages
}: CharactersProps) {
  return <CharactersTemplate characters={characters} totalPages={totalPages} />
}

export async function getStaticPaths() {
  const response = await api.get("characters")

  const pages = Math.ceil(response.data.data.total / 20)
  const paths = []

  for (var i = 0; i < pages - 20; i++) {
    paths.push({ params: { page: `${i + 1}` } })
  }

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = Number(params?.page ?? 0)

  const response = await api.get("characters", {
    params: {
      offset: (page - 1) * 20
    }
  })

  const totalPages = Math.ceil(response.data.data.total / 20)
  var regExp = /\(([^)]+)\)/

  const characters = response.data.data.results.map((character: any) => {
    const name = regExp.exec(character.name)
    var hero = character.name.substring(0, character.name.indexOf("("))

    return {
      id: character.id,
      hero: hero ? hero : character.name,
      name: name ? name[1] : "",
      description: character.description,
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`
    }
  })

  return {
    props: {
      characters,
      totalPages
    }
  }
}
