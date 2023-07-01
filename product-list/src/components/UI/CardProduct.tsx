import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { API_CALLS, FoodDataType } from '../../types';

import styles from './CardProduct.module.scss';

type Props = {
  card: FoodDataType;
};

export default function RecipeReviewCard({ card }: Props) {
  return (
    <Card
      sx={{ maxWidth: 262, borderRadius: 7, boxShadow: 'none' }}
      className={styles.card}
    >
      <CardMedia
        // ={{ margin: 0 }}
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
          {card.name.length > 34
            ? `${card.name.slice(0, 34)}...`
            : `${card.name}`}
        </span>
        <div className={styles.cardPriceBlock}>
          <span className={styles.cardPrice}>${card.price}</span>
          <CardActions
            disableSpacing
            className={styles.cardButtonLike}
          >
            <IconButton
              aria-label="add to favorites"
              style={{ padding: 0 }}
            >
              <FavoriteIcon className={styles.cardButtonLikeIcon} />
            </IconButton>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}
