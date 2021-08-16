import { NavigateNext, NavigateBefore } from "@styled-icons/material"
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
  const { page: currentPage } = router.query

  const pages = []
  for (var i = 0; i < totalPages - 2; i++) {
    pages.push(i + 1)
  }

  console.log(pages)

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
          <span>
            <NavigateBefore size={20} /> Previous
          </span>
          {pages
            .slice(Number(currentPage) - 2, Number(currentPage) + 2)
            .map((page) => {
              return (
                <Link key={page} href={`${page}`}>
                  <a
                    className={`${
                      currentPage === String(page) ? "active" : ""
                    }`}
                  >
                    {page}
                  </a>
                </Link>
              )
            })}
          <span>
            Next <NavigateNext size={20} />
          </span>
        </S.Pages>
      </S.Pagination>
    </S.Container>
  )
}
