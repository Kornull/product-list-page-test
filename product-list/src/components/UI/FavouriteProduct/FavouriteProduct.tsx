import List from '@mui/material/List';

import { useGlobalState } from 'src/state';

import { FoodDataType, STATE_DATA_CALLS } from 'src/types';

import { FavouriteCard } from './FavouriteCard';

import styles from './FavouriteProduct.module.scss';

export const FavouriteProduct = () => {
  const [favourites] = useGlobalState(STATE_DATA_CALLS.FAVOURITE);

  return (
    <div className={styles.favourite}>
      <div className={styles.favouriteList}>
        <h2 className={styles.favouriteTitle}>Favorites</h2>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
          }}
          subheader={<li />}
        >
          {favourites.map((card: FoodDataType) => (
            <li className={styles.favouriteTitle} key={`${card.name}-${card.id}`}>
              <FavouriteCard card={card} />
            </li>
          ))}
        </List>
      </div>
    </div>
  );
};
