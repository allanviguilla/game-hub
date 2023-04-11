import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

interface TextRatingsProp {
  text: string;
  color: string;
}

export default function TextRating({ rating }: Props) {
  if (rating < 3) return null;

  const ratingMap: { [key: number]: TextRatingsProp } = {
    3: { text: "Good", color: "gray" },
    4: { text: "Popular", color: "gray" },
    5: { text: "Top", color: "green" },
  };

  return (
    <Badge
      colorScheme={ratingMap[rating].color}
      fontSize="14px"
      marginTop={1}
      variant="outline"
    >
      {ratingMap[rating].text}
    </Badge>
  );
}
