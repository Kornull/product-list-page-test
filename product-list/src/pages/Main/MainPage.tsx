import { CardList } from 'src/components/UI/Card/CardList';
import { FavouriteProduct } from 'src/components/UI/FavouriteProduct';

import { useGlobalState } from 'src/state';
import { STATE_DATA_CALLS } from 'src/types';

export const MainPage = () => {
  const [store] = useGlobalState(STATE_DATA_CALLS.DATA);

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
