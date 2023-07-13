import List from '@mui/material/List';

import { useGlobalState } from '../../../state';

import { FoodDataType, STATE_DATA_CALLS } from '../../../types';

import { FavouriteCard } from './FavouriteCard';

import styles from './FavouriteProduct.module.scss';

export const FavouriteProduct = () => {
  const [favourites] = useGlobalState(STATE_DATA_CALLS.FAVOURITE);

  return (
    <div className={styles.favourite}>
      <div className={styles.favouriteList}>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
          }}
          subheader={<li />}
        >
          {favourites.map((card: FoodDataType) => (
            <li
              className={styles.favouriteListItem}
              key={`${card.name}-${card.id}`}
            >
              <FavouriteCard card={card} />
            </li>
          ))}
        </List>
      </div>
    </div>
  );
};
