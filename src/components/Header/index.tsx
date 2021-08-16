/* eslint-disable @next/next/no-img-element */
import { MarkGithub } from "@styled-icons/octicons"
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
            <Link href="/characters/0">
              <a>CHARACTERS</a>
            </Link>
          </nav>
        </div>
        <a
          href="https://github.com/lui7henrique"
          target="_blank"
          rel="noreferrer"
        >
          <MarkGithub size={30} />
        </a>
      </div>
    </S.Header>
  )
}
