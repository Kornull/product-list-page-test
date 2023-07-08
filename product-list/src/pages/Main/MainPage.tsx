import { CardList } from '../../components/UI/Card/CardList';
import { FavouriteProduct } from '../../components/UI/FavouriteProduct/FavouriteProduct';
import { useGlobalState } from '../../state';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const [store] = useGlobalState('data');

  return (
    <div className={styles.products}>
      <FavouriteProduct />
      <CardList cards={store} />
    </div>
  );
};
