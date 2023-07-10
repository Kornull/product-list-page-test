import { useEffect } from 'react';

import { IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

import styles from './ImageButton.module.scss';

type Props = {
  isOpen: boolean;
  changeView: (u: React.SetStateAction<boolean>) => void;
};

export const ImageButton = ({ isOpen, changeView }: Props) => {
  const handleClick = () => {
    changeView(!isOpen);
  };

  useEffect(() => {
    changeView(false);
  }, []);

  return (
    <IconButton
      aria-label="look"
      size="large"
      color="default"
      onClick={handleClick}
    >
      <ZoomInIcon
        fontSize="large"
        className={`${styles.action} ${isOpen ? styles.success : ''}`}
      />
    </IconButton>
  );
};
