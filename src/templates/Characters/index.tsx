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
          {!(currentPage === 1) && (
            <Link href={`${currentPage - 1}`}>
              <a>
                <span>
                  <NavigateBefore size={20} /> Previous
                </span>
              </a>
            </Link>
          )}
          {currentPage >= 3
            ? pages.slice(currentPage - 3, currentPage + 2).map((page) => {
                return (
                  <Link key={page} href={`${page}`}>
                    <a
                      className={`page ${currentPage === page ? "active" : ""}`}
                    >
                      {page}
                    </a>
                  </Link>
                )
              })
            : pages.slice(0, 5).map((page) => {
                return (
                  <Link key={page} href={`${page}`}>
                    <a
                      className={`page ${currentPage === page ? "active" : ""}`}
                    >
                      {page}
                    </a>
                  </Link>
                )
              })}

          {!(currentPage === pages.length) && (
            <Link href={`${currentPage + 1}`}>
              <a>
                <span>
                  Next <NavigateNext size={20} />
                </span>
              </a>
            </Link>
          )}
        </S.Pages>
      </S.Pagination>
    </S.Container>
  )
}
