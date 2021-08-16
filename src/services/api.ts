import axios from "axios"
import md5 from "js-md5"

const PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY
const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    apikey: process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY,
    ts: +new Date(),
    hash: md5
      .create()
      .update(+new Date() + (PRIVATE_KEY ? PRIVATE_KEY : "") + PUBLIC_KEY)
      .toString()
  }
})
