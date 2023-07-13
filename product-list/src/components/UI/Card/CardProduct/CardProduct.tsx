import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { Link } from 'react-router-dom';

import { returnStringLen } from '../../../../helpers';
import { API_CALLS, FoodDataType } from '../../../../types';

import { LikeButton } from '../../../Buttons/LikeButton';

import styles from './CardProduct.module.scss';

type Props = {
  card: FoodDataType;
};

export const CardProduct = ({ card }: Props) => {
  return (
    <Link to={`/product/${card.id}`}>
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
            {returnStringLen(card.name, 16)}
          </span>
          <div className={styles.cardPriceBlock}>
            <span className={styles.cardPrice}>${card.price}</span>
            <LikeButton product={card} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
