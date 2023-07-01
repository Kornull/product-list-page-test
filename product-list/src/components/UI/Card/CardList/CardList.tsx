import { FixedSizeGrid as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { CardProduct } from '../CardProduct';

import { FoodDataType } from 'src/types';

import styles from './CardList.module.scss';

type Props = {
  cards: FoodDataType[];
};

export const CardList = ({ cards }: Props) => {
  return (
    <div className={styles.list}>
      <AutoSizer>
        {({ height }) => (
          <List
            columnCount={4}
            rowCount={Math.floor(cards.length / 4)}
            columnWidth={280}
            rowHeight={390}
            height={height}
            width={1280}
            itemData={cards}
          >
            {({ rowIndex, columnIndex, style }) => {
              const index = columnIndex + rowIndex * 4
              return (
                <div
                  style={{...style, paddingTop: '84px'}}

                >
                  <CardProduct
                    card={cards[index]}
                    key={columnIndex}
                  />
                </div>
              );
            }}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};
