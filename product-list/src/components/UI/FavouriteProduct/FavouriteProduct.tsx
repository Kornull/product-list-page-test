import { useEffect } from 'react';

import { useGlobalState } from '../../../state';

import { FoodDataType } from '../../../types';

import { FavouriteCard } from './FavouriteCard';

import styles from './FavouriteProduct.module.scss';

export const FavouriteProduct = () => {
  const [favourites] = useGlobalState('favourite');
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
