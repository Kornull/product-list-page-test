import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { API_CALLS, FoodDataType, STATE_DATA_CALLS } from '../../../../types';
import { useGlobalState } from '../../../../state';
import { LikeButton } from '../../../Buttons/LikeButton';

import styles from './FavouriteCard.module.scss';

type Props = {
  card: FoodDataType;
};

export const FavouriteCard = ({ card }: Props) => {
  const [product, setProduct] = useGlobalState(STATE_DATA_CALLS.PRODUCT);

  const handleClickCard = (): void => {
    setProduct(card);
  };

  const stingLength = (num: number): string => {
    if (card.name.length > num) return `${card.name.slice(0, 18)}...`;

    return card.name;
  };

  return (
    <Link
      to={`/product/${card.name}`}
      onClick={handleClickCard}
    >
      <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={styles.favouriteImg}>
          <CardMedia
            component="img"
            sx={{ width: 78, height: 78 }}
            image={`${API_CALLS.DEFAULT_LINK}${card.src}`}
            alt="Live from space album cover"
          />
        </div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <CardContent
            sx={{ flex: '1 0 auto' }}
            style={{ paddingBottom: '6px' }}
          >
            <Typography
              component="div"
              variant="h6"
              fontSize={16}
            >
              {stingLength(18)}
            </Typography>
            <Typography
              className={styles.favourite}
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <div className={styles.favouriteDescr}>
                <span className={styles.favouritePrice}>${card.price}</span>
                <LikeButton product={card} />
              </div>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};
