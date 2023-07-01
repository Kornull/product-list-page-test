import { useGlobalState } from 'src/state';

import { CardList } from 'src/components/UI/Card/CardList';
import { FavouriteProduct } from 'src/components/UI/FavouriteProduct/FavouriteProduct';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const [store, setStore] = useGlobalState('data');

  return (
    <div className={styles.products}>
      <FavouriteProduct />
      <CardList cards={store} />
    </div>
  );
};
