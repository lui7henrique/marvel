import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import { CharactersProps } from "pages/characters/[page]"

import * as S from "./styles"

export function CharactersTemplate({
  characters,
  pages: pagesNumber
}: CharactersProps) {
  const router = useRouter()
  const { page: currentPage } = router.query

  // function handleNextPage() {
  //   router.push(`${Number(currentPage) + 1}`)
  // }

  // function handlePreviousPage() {
  //   router.push(`${Number(currentPage) - 1}`)
  // }

  const pages = []
  for (var i = 0; i < pagesNumber; i++) {
    pages.push(i)
  }

  return (
    <S.Container>
      <S.Content>
        {characters.map((character) => {
          return (
            <S.Character key={character.id}>
              <S.Thumb>
                <figure className="wrapper">
                  <Image
                    src={character.thumbnail}
                    alt={`${character.name} thumbnail`}
                    quality={75}
                    layout={"fill"}
                  />
                </figure>
              </S.Thumb>
              <div className="info">
                <h2>{character.hero}</h2>
                <h3>{character?.name}</h3>
              </div>
            </S.Character>
          )
        })}
      </S.Content>
      <S.Pagination>
        <S.Pages>
          {pages
            .slice(Number(currentPage), Number(currentPage) + 5)
            .map((page) => {
              return (
                <S.Page key={page} href={`${page}`}>
                  {page}
                </S.Page>
              )
            })}
        </S.Pages>
      </S.Pagination>
    </S.Container>
  )
}
