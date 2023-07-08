import { CardList } from '../../components/UI/Card/CardList';
import { FavouriteProduct } from '../../components/UI/FavouriteProduct/FavouriteProduct';
import { useGlobalState } from '../../state';

export const MainPage = () => {
  const [store] = useGlobalState('data');

  return (
    <>
      <FavouriteProduct />
      <CardList cards={store} />
    </>
  );
};
