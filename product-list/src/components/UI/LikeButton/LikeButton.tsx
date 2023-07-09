import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useGlobalState } from '../../../state';

import { FoodDataType } from '../../../types';

import styles from './LikeButton.module.scss';

type Props = {
  styleButton: string;
  product: FoodDataType;
};

export const LikeButton = ({ styleButton, product }: Props) => {
  const [favorites, setFavourites] = useGlobalState('favourite');

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
      className={styleButton}
      onClick={(ev) => clickLiked(ev)}
    >
      <IconButton
        aria-label="add to favorites"
        style={{ padding: 0 }}
      >
        <FavoriteIcon className={styles.icon} />
      </IconButton>
    </CardActions>
  );
};
