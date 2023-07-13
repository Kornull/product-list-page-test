import { useEffect } from 'react';

import { CardList } from '../../components/UI/Card/CardList';
import { FavouriteProduct } from '../../components/UI/FavouriteProduct';

import { useGlobalState } from '../../state';
import { API_CALLS, FoodDataType, STATE_DATA_CALLS } from '../../types';

export const MainPage = () => {
  const [store, setStore] = useGlobalState(STATE_DATA_CALLS.DATA);
  console.log(store);

  const getData = async (): Promise<void> => {
    try {
      const response = await fetch(`${API_CALLS.ALL_PRODUCTS}`);
      const res: FoodDataType[] = await response.json();

      setStore(res);
    } catch (er) {
      setStore([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
