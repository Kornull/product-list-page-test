import { useEffect } from 'react';

import List from '@mui/material/List';

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
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
            overflowY: 'auto',
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
              width: '0.4em',
            },
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
              background: '#f1f1f1',
            },
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
              backgroundColor: '#888',
            },
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
            '& ul': { padding: 10 },
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
