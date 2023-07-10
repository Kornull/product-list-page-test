import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useGlobalState } from '../../../state';
import { FoodDataType, STATE_DATA_CALLS } from '../../../types';

import styles from './LikeButton.module.scss';

type Props = {
  product: FoodDataType;
};

export const LikeButton = ({ product }: Props) => {
  const [favorites, setFavourites] = useGlobalState(STATE_DATA_CALLS.FAVOURITE);

  const clickLiked = (ev: React.MouseEvent): void => {
    ev.preventDefault();
    if (!favorites.includes(product)) {
      setFavourites([...favorites, product]);
    } else {
      const newFavourites = favorites.filter((data) => data.id !== product.id);
      setFavourites([...newFavourites]);
    }
  };

  return (
    <CardActions
      disableSpacing
      className={styles.buttonLike}
      onClick={(ev) => clickLiked(ev)}
    >
      <IconButton
        aria-label="add to favourites"
        style={{ padding: 0 }}
      >
        <FavoriteIcon
          className={styles.iconLiked}
        />
      </IconButton>
    </CardActions>
  );
};
