import { Game } from "../hooks/useGames";

import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import TextRating from "./TextRating";

import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <TextRating rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}
