import { GetStaticProps } from "next"

export default function Character({ id }: any) {
  console.log(id)
  return <h1>oi</h1>
}

export async function getStaticPaths() {
  const featuredCharacters = [{ id: 1009216, name: "Captain America" }]

  const paths = featuredCharacters.map((character) => ({
    params: { id: String(character.id) }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  return {
    props: {
      id
    }
  }
}
