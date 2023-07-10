import { FoodDataType } from '../../../../types';

type Props = {
  card: FoodDataType;
};

export const FavouriteCard = ({ card }: Props) => {
  return <div>{card.name}</div>;
};
