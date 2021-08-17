/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

import * as S from "./styles"

export function Header() {
  return (
    <S.Header>
      <div>
        <div>
          <img src="/img/marvel_logo.svg" alt="Marvel logo" />
          <nav>
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Link href="/characters/1">
              <a>CHARACTERS</a>
            </Link>
          </nav>
        </div>
      </div>
    </S.Header>
  )
}
