/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { CharacterProps } from "pages/character/[id]"
import { useState } from "react"

import * as S from "./styles"

export function CharacterTemplate({ character }: CharacterProps) {
  const { comics, events, series } = character
  const [selectView, setSelectView] = useState(comics)

  return (
    <S.Container>
      <S.Content>
        <S.Infos>
          <figure>
            <Image
              src={character.thumbnail}
              alt={`${character.name} thumbnail`}
              width={850}
              height={850}
            />
          </figure>
          <section>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
          </section>
        </S.Infos>
        <S.List>
          <header>
            <h2
              className={`${selectView === comics ? "active" : ""}`}
              onClick={() => setSelectView(comics)}
            >
              Comics
            </h2>
            <h2
              className={`${selectView === events ? "active" : ""}`}
              onClick={() => setSelectView(events)}
            >
              Events
            </h2>
            <h2
              className={`${selectView === series ? "active" : ""}`}
              onClick={() => setSelectView(series)}
            >
              Series
            </h2>
          </header>

          <S.Cards>
            {selectView.map((comic) => {
              return (
                <div key={comic.id}>
                  <h3>{comic.title}</h3>
                  <Image
                    src={comic.thumbnail}
                    alt={`${comic.title} thumbnail`}
                    width={558}
                    height={850}
                  />
                </div>
              )
            })}
          </S.Cards>
        </S.List>
      </S.Content>
    </S.Container>
  )
}
