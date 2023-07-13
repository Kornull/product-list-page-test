import { useEffect } from 'react';
import { useParams } from 'react-router';

import { FavouriteProduct } from '../../components/UI/FavouriteProduct';
import { ImageView } from '../../components/UI/ImageView';
import { ImageButton } from '../../components/Buttons/ImageButton';
import { LikeButton } from '../../components/Buttons/LikeButton';

import { useGlobalState } from '../../state';
import { STATE_DATA_CALLS } from '../../types';

import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useGlobalState(STATE_DATA_CALLS.PRODUCT);
  const [data] = useGlobalState(STATE_DATA_CALLS.DATA);
  const [isOpen, setIsOpen] = useGlobalState(STATE_DATA_CALLS.OPEN_IMG);

  const updateProduct = () => {
    if (params.id !== 'undefined') {
      const el = data.filter((el) => `${el.id}` === params.id);
      setProduct(el[0]);
    }
  };

  useEffect(() => {
    updateProduct();
  }, [product]);

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
                <LikeButton product={product} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
