import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { returnStringLen } from 'src/helpers';
import { API_CALLS, FoodDataType, STATE_DATA_CALLS } from 'src/types';

import { LikeButton } from 'src/components/Buttons/LikeButton';

import { useGlobalState } from 'src/state';

import styles from './CardProduct.module.scss';

type Props = {
  card: FoodDataType;
};

export const CardProduct = ({ card }: Props) => {
  const [, setProduct] = useGlobalState(STATE_DATA_CALLS.PRODUCT);

  const handleClick = () => {
    setProduct(card);
  };
  return (
    <Link to={`/product/${card.name}`} onClick={handleClick}>
      <Card sx={{ maxWidth: 262, borderRadius: 7, boxShadow: 'none' }} className={styles.card}>
        <CardMedia
          component="img"
          image={`${API_CALLS.DEFAULT_LINK}${card.src}`}
          alt={card.name}
          className={styles.cardImage}
        />
        <CardContent className={styles.cardDescriptionBlock} style={{ padding: 0 }}>
          <span className={styles.cardDescription}>{returnStringLen(card.name, 16)}</span>
          <div className={styles.cardPriceBlock}>
            <span className={styles.cardPrice}>${card.price}</span>
            <LikeButton product={card} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
