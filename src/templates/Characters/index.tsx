import { Pagination } from "components/Pagination"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import Link from "next/link"
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
    <S.Container>
      <S.Content>
        {characters.map((character) => {
          return (
            <S.Character key={character.id}>
              <Link href={`/character/${character.id}`}>
                <a>
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
                </a>
              </Link>
            </S.Character>
          )
        })}
      </S.Content>
      <Pagination pages={pages} currentPage={currentPage} />
    </S.Container>
  )
}
