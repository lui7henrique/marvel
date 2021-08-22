import { CardList } from "components/CardList"
import { Pagination } from "components/Pagination"
import { NextSeo } from "next-seo"
import { useRouter } from "next/dist/client/router"
import { CharactersProps } from "pages/characters/[page]"

import * as S from "./styles"

export function CharactersTemplate({
  characters,
  totalPages
}: CharactersProps) {
  const router = useRouter()
  const { page } = router.query
  const currentPage = Number(page)

  const pages = []
  for (var i = 0; i < totalPages; i++) {
    pages.push(i + 1)
  }

  return (
    <>
      <NextSeo
        title="All characters"
        description="Learn about your favorite Marvel characters, super heroes, and villains! Discover their hqs, events, and more!"
        canonical="https://charactersmarvel.vercel.app/characters/1"
        openGraph={{
          url: "https://charactersmarvel.vercel.app/characters/1",
          title: "All characters",
          description:
            "Learn about your favorite Marvel characters, super heroes, and villains! Discover their hqs, events, and more!",
          images: [
            {
              url: "https://charactersmarvel.vercel.app/img/characters.png",
              width: 1280,
              height: 720,
              alt: "All characters"
            }
          ]
        }}
      />
      <S.Container>
        <CardList characters={characters} />
        <Pagination pages={pages} currentPage={currentPage} />
      </S.Container>
    </>
  )
}
