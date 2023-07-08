import { CardList } from '../../components/UI/Card/CardList';
import { FavouriteProduct } from '../../components/UI/FavouriteProduct/FavouriteProduct';
import { useGlobalState } from '../../state';

export const MainPage = () => {
  const [store] = useGlobalState('data');

  return (
    <>
      <FavouriteProduct />
      {store.length ? (
        <CardList cards={store} />
      ) : (
        <span className="error">oops!!!! something with network!</span>
      )}
    </>
  );
};
