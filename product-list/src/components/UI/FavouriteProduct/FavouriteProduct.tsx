import { useEffect } from 'react';

import { useGlobalState } from '../../../state';

import { FoodDataType, STATE_DATA_CALLS } from '../../../types';

import { FavouriteCard } from './FavouriteCard';

import styles from './FavouriteProduct.module.scss';

export const FavouriteProduct = () => {
  const [favourites] = useGlobalState(STATE_DATA_CALLS.FAVOURITE);
  useEffect(() => {
    console.log(favourites);
  }, [favourites]);
  return (
    <div className={styles.favourite}>
      <div className={styles.favouriteList}>
        {favourites.length > 0 &&
          favourites.map((product: FoodDataType) => (
            <FavouriteCard
              card={product}
              key={product.id}
            />
          ))}
      </div>
    </div>
  );
};
