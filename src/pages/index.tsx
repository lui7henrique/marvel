/* eslint-disable @next/next/no-img-element */

import { GetStaticProps } from "next"
import { api } from "services/api"
import { HomeTemplate } from "templates/Home"

import { featuredCharacters } from "./character/[id]"

export type IHomeProps = {
  characters: {
    id: number
    name: string
    hero: string
    thumbnail: string
  }[]
}

export default function Home({ characters }: IHomeProps) {
  return <HomeTemplate characters={characters} />
}

export const getStaticProps: GetStaticProps = async () => {
  var regExp = /\(([^)]+)\)/

  const characters = await Promise.all(
    featuredCharacters.map(async (character) => {
      const response = await api.get(`characters/${character.id}`)
      const characterInfo = response.data.data.results[0]

      const name = regExp.exec(characterInfo.name)
      var hero = characterInfo.name.substring(
        0,
        characterInfo.name.indexOf("(")
      )

      return {
        id: characterInfo.id,
        hero: hero ? hero : character.name,
        name: name ? name[1] : "",
        thumbnail: `${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}`
      }
    })
  )

  return {
    props: {
      characters
    }
  }
}
