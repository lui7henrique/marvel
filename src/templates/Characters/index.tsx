import { CardList } from "components/CardList"
import { Pagination } from "components/Pagination"
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
    <S.Container>
      <CardList characters={characters} />
      <Pagination pages={pages} currentPage={currentPage} />
    </S.Container>
  )
}
