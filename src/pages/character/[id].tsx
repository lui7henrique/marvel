import { GetStaticProps } from "next"

export default function Character({ id }: any) {
  console.log(id)
  return <h1>oi</h1>
}

export async function getStaticPaths() {
  const featuredCharacters = [
    { id: 1010801, name: "Ant Man: Scott Lang" },
    { id: 1009180, name: "Beta-Ray: Bill" },
    { id: 1009187, name: "Black Panther" },
    { id: 1009189, name: "Black Widow" },
    { id: 1009216, name: "Captain America" },
    { id: 1017575, name: "Captain America: Sam Wilson" },
    { id: 1010338, name: "Captain Marvel: Carol Denvers" },
    { id: 1009268, name: "Deadpool" },
    { id: 1009281, name: "Doctor Doom" },
    { id: 1009312, name: "Galactus" },
    { id: 1009351, name: "Hulk" },
    { id: 1009368, name: "Iron-man" },
    { id: 1010704, name: "Iron-lad" },
    { id: 1009384, name: "Kang" },
    { id: 1009452, name: "Moon Knight" }
  ]

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
