/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router"
import Link from "next/link"

import * as S from "./styles"

export function Header() {
  const { pathname } = useRouter()
  return (
    <S.Header>
      <div>
        <div>
          <nav>
            <Link href="/">
              <a className={`${pathname === "/" ? "active" : ""}`}>HOME</a>
            </Link>
            <Link href="/characters/1">
              <a
                className={`${
                  pathname === "/characters/[page]" ? "active" : ""
                }`}
              >
                ALL CHARACTERS
              </a>
            </Link>
          </nav>
        </div>
        <a
          href="https://developer.marvel.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/marvel_logo.svg" alt="Marvel logo" />
        </a>
      </div>
    </S.Header>
  )
}
