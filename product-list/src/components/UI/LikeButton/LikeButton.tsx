import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styles from './LikeButton.module.scss';

type Props = {
  idProduct: number;
  styleButton: string
};

export const LikeButton = ({ idProduct, styleButton }: Props) => {
  const clickLiked = (ev: React.MouseEvent) => {
    console.log(typeof idProduct, idProduct);
    ev.preventDefault();
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
