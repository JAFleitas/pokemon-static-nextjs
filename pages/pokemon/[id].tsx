import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  console.log(pokemon);
  return <div>asdasd</div>;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon151.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
