import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { API_CALLS, FoodDataType, STATE_DATA_CALLS } from '../../../../types';
import { useGlobalState } from '../../../../state';

type Props = {
  card: FoodDataType;
};

export const FavouriteCard = ({ card }: Props) => {
  const [product, setProduct] = useGlobalState(STATE_DATA_CALLS.PRODUCT);

  const handleClickCard = () => {
    setProduct(card);
  };
  return (
    <Link
      to={`/product/${card.name}`}
      onClick={handleClickCard}
    >
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 78, height: 78 }}
          image={`${API_CALLS.DEFAULT_LINK}${card.src}`}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography
              component="div"
              variant="h6"
            >
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box
            sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>
    </Link>
  );
};
