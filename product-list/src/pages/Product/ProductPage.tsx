import { FavouriteProduct } from '../../components/UI/FavouriteProduct/FavouriteProduct';
import { LikeButton } from '../../components/UI/LikeButton/LikeButton';
import { useGlobalState } from '../../state';
import { API_CALLS } from '../../types';

import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  const [product] = useGlobalState('product');

  return (
    <>
      <FavouriteProduct />
      <div className={styles.product}>
        {product !== null && (
          <>
            <div className={styles.productImg}>
              <img
                src={`${API_CALLS.DEFAULT_LINK}${product.src}`}
                alt=""
              />
            </div>
            <div className={styles.productDescription}>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <div className={styles.productInfo}>
                <h2 className={styles.productPrice}>
                  Cost: <span>{product.price}$</span>
                </h2>
                <LikeButton
                  idProduct={product.id}
                  styleButton={styles.productButton}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
