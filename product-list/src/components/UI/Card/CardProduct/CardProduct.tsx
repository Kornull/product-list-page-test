import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { Link } from 'react-router-dom';

import { API_CALLS, FoodDataType } from '../../../../types';

import { useGlobalState } from '../../../../state';

import { LikeButton } from '../../LikeButton/LikeButton';

import styles from './CardProduct.module.scss';

type Props = {
  card: FoodDataType;
};

export const CardProduct = ({ card }: Props) => {
  const [product, setProduct] = useGlobalState('product');

  const handleClickCard = () => {
    setProduct(card);
  };

  return (
    <Link
      to={`/product/${card.name}`}
      onClick={handleClickCard}
    >
      <Card
        sx={{ maxWidth: 262, borderRadius: 7, boxShadow: 'none' }}
        className={styles.card}
      >
        <CardMedia
          component="img"
          image={`${API_CALLS.DEFAULT_LINK}${card.src}`}
          alt={card.name}
          className={styles.cardImage}
        />
        <CardContent
          className={styles.cardDescriptionBlock}
          style={{ padding: 0 }}
        >
          <span className={styles.cardDescription}>
            {card.name.length > 16
              ? `${card.name.slice(0, 14)}...`
              : `${card.name}`}
          </span>
          <div className={styles.cardPriceBlock}>
            <span className={styles.cardPrice}>${card.price}</span>
            <LikeButton
              styleButton={styles.cardButtonLike}
              product={card}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
