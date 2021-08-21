import Image from "next/image"
import Link from "next/link"

import * as S from "./styles"

type CardListProps = {
  characters: {
    id: number
    name?: string
    hero: string
    thumbnail: string
  }[]
  isFeatured?: boolean
}

export function CardList({ characters, isFeatured }: CardListProps) {
  return (
    <S.Content>
      {characters.map((character) => {
        return (
          <S.Character key={character.id} isFeatured={isFeatured}>
            <Link href={`/character/${character.id}`}>
              <a>
                <S.Thumb>
                  <figure className="wrapper">
                    <Image
                      src={character.thumbnail}
                      alt={`${character.name} thumbnail`}
                      quality={50}
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
  )
}
