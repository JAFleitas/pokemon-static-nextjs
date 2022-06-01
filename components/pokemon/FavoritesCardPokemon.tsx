import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Grid, Image } from "@nextui-org/react";

interface Props {
  pokemonId: number;
}
export const FavoritesCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onDetailPokemon = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={12} sm={6} md={3} xl={2} onClick={onDetailPokemon}>
      <Card hoverable clickable css={{ padding: "10" }}>
        <Card.Header></Card.Header>
        <Image
          width={"100%"}
          height={200}
          alt="image-pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        />
      </Card>
    </Grid>
  );
};
