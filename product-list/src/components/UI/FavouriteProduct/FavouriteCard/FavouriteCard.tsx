import { FoodDataType } from '../../../../types';

type Props = {
  card: FoodDataType;
};

export const FavouriteCard = ({ card }: Props) => {
  //   const [product] = useGlobalState('product');
  //   useEffect(() => {
  //     console.log(card);
  //   }, [product]);
  console.log(card);
  return <div>{card.name}</div>;
};
