/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Image from "next/image"
import { CharacterProps } from "pages/character/[id]"
import { useState } from "react"

import * as S from "./styles"

export function CharacterTemplate({ character }: CharacterProps) {
  const { comics, events, series } = character
  const [selectView, setSelectView] = useState(comics)

  return (
    <>
      <Head>
        <title>{`${character.hero} (${character.name})`}</title>
      </Head>
      <S.Container>
        <S.Content>
          <S.Infos>
            <figure>
              <Image
                src={character.thumbnail}
                alt={`${character.name} thumbnail`}
                width={850}
                height={850}
                quality={50}
              />
            </figure>
            <section>
              <h1>{character.hero}</h1>
              <h2>{character?.name}</h2>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: character.description ?? ""
                }}
              />
            </section>
          </S.Infos>
          <S.List>
            <header>
              {comics.length >= 4 && (
                <h2
                  className={`${selectView === comics ? "active" : ""}`}
                  onClick={() => setSelectView(comics)}
                >
                  Comics
                </h2>
              )}
              {events.length >= 4 && (
                <h2
                  className={`${selectView === events ? "active" : ""}`}
                  onClick={() => setSelectView(events)}
                >
                  Events
                </h2>
              )}
              {series.length >= 4 && (
                <h2
                  className={`${selectView === series ? "active" : ""}`}
                  onClick={() => setSelectView(series)}
                >
                  Series
                </h2>
              )}
            </header>

            <S.Cards>
              {selectView.map((comic) => {
                return (
                  <div key={comic.id}>
                    <Image
                      src={comic.thumbnail}
                      alt={`${comic.title} thumbnail`}
                      width={558}
                      height={850}
                      quality={50}
                    />
                    <h3>{comic.title}</h3>
                  </div>
                )
              })}
            </S.Cards>
          </S.List>
        </S.Content>
      </S.Container>
    </>
  )
}
