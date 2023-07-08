import { FavouriteProduct } from '../../components/UI/FavouriteProduct/FavouriteProduct';
import { useGlobalState } from '../../state';
import { API_CALLS } from '../../types';

import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  const [product] = useGlobalState('product');

  console.log('product: ', product);
  return (
    <>
      <FavouriteProduct />
      <div className={styles.about}>
        {product !== null && (
          <>
            <div className={styles.aboutImg}>
              <img
                src={`${API_CALLS.DEFAULT_LINK}${product.src}`}
                alt=""
              />
            </div>
            <div className={styles.aboutDescription}>
              <p>{product.name}</p>
              <div className="">{product.price}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
