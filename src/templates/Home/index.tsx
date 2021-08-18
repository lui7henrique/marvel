/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

import * as S from "./styles"
export function HomeTemplate() {
  return (
    <>
      <S.BannerContainer>
        <S.BannerContent>
          <h1>MARVEL CHARACTERS</h1>
          <p>
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
        </S.BannerContent>
      </S.BannerContainer>
      <S.Container>
        <S.Hero>
          <div>
            <h1>
              Exploring a character just got <span>easier</span>
            </h1>
            <h2>
              Learn about your favorite Marvel characters, super heroes, and
              villains! Discover their powers, weaknesses, abilities, and more!
            </h2>
          </div>
          <Link href="/character/1009220">
            <img src="/img/shield.png" alt="Shiled" />
          </Link>
        </S.Hero>
      </S.Container>
    </>
  )
}
