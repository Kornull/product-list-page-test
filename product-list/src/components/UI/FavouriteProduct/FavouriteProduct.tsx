import { useEffect } from 'react';

import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as List } from 'react-window';

import { useGlobalState } from '../../../state';

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
        {favourites.length > 0 && (
          <AutoSizer>
            {({ height }) => (
              <List
                columnCount={1}
                rowCount={1}
                columnWidth={300}
                rowHeight={120}
                height={height}
                width={880}
                itemData={favourites}
              >
                {({ rowIndex, columnIndex, style }) => {
                  const index = columnIndex + rowIndex * 4;
                  return (
                    <div style={{ ...style }}>
                      <FavouriteCard />
                      {/* <CardProduct
                    card={favourites[index]}
                    key={columnIndex}
                  /> */}
                    </div>
                  );
                }}
              </List>
            )}
          </AutoSizer>
        )}
      </div>
    </div>
  );
};
