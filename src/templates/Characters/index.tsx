import Image from "next/image"
import { useRouter } from "next/router"
import { CharactersProps } from "pages/characters/[page]"

import * as S from "./styles"

export function CharactersTemplate({ characters, pages }: CharactersProps) {
  const router = useRouter()
  const { page: currentPage } = router.query

  console.log(currentPage)

  function handleNextPage() {
    router.push(`${Number(currentPage) + 1}`)
  }

  function handlePreviousPage() {
    router.push(`${Number(currentPage) + 1}`)
  }

  return (
    <S.Container>
      <S.Header>
        <button onClick={handlePreviousPage}>Anterior</button>
        <button onClick={handleNextPage}>Próximo</button>
      </S.Header>
      <S.Content>
        {characters.map((character) => {
          return (
            <S.Character key={character.id}>
              <h2>{character.name}</h2>
              <Image
                src={character.thumbnail}
                alt={`${character.name} thumbnail`}
                width={850}
                height={850}
                quality={75}
              />
            </S.Character>
          )
        })}
      </S.Content>
    </S.Container>
  )
}
