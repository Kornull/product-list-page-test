import { useGlobalState } from '../../state';

import { FavouriteProduct } from '../../components/UI/FavouriteProduct';
import { LikeButton } from '../../components/UI/LikeButton';
import { ImageButton } from '../../components/UI/ImageButton';
import { ImageView } from '../../components/UI/ImageView';

import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  const [product] = useGlobalState('product');
  const [isOpen, setIsOpen] = useGlobalState('openImg');

  return (
    <>
      <FavouriteProduct />
      <div className={styles.product}>
        {product !== null && (
          <>
            <div className={styles.productImg}>
              <div className={styles.productImgContainer}>
                <ImageView
                  isOpen={isOpen}
                  name={product.name}
                  url={product.src}
                />
              </div>
              <ImageButton
                isOpen={isOpen}
                changeView={setIsOpen}
              />
            </div>
            <div className={styles.productDescription}>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <div className={styles.productInfo}>
                <h2 className={styles.productPrice}>{product.price}$</h2>
                <LikeButton
                  product={product}
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
