import { FavouriteProduct } from 'src/components/UI/FavouriteProduct';
import { ImageView } from 'src/components/UI/ImageView';
import { ImageButton } from 'src/components/Buttons/ImageButton';
import { LikeButton } from 'src/components/Buttons/LikeButton';

import { useGlobalState } from 'src/state';
import { STATE_DATA_CALLS } from 'src/types';

import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  const [product] = useGlobalState(STATE_DATA_CALLS.PRODUCT);
  const [isOpen, setIsOpen] = useGlobalState(STATE_DATA_CALLS.OPEN_IMG);

  return (
    <>
      <FavouriteProduct />
      <div className={styles.product}>
        {product !== null && (
          <>
            <div className={styles.productImg}>
              <div className={styles.productImgContainer}>
                <ImageView isOpen={isOpen} name={product.name} url={product.src} />
              </div>
              <ImageButton isOpen={isOpen} changeView={setIsOpen} />
            </div>
            <div className={styles.productDescription}>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <div className={styles.productInfo}>
                <h2 className={styles.productPrice}>{product.price}$</h2>
                <LikeButton product={product} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
