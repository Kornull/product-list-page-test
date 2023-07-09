import ReactImageMagnify from 'react-image-magnify';

import { API_CALLS } from '../../../types';

import styles from './ImageView.module.scss';
type Props = {
  isOpen: boolean;
  name: string;
  url: string;
};

export const ImageView = ({ isOpen, name, url }: Props) => {
  const urlImage = `${API_CALLS.DEFAULT_LINK}${url}`;

  return (
    <>
      <ReactImageMagnify
        className={isOpen ? styles.open : styles.close}
        {...{
          smallImage: {
            alt: `${name}`,
            isFluidWidth: true,
            src: urlImage,
          },
          largeImage: {
            src: urlImage,
            width: 600,
            height: 600,
          },
        }}
      />
      <img
        className={isOpen ? styles.close : styles.open}
        src={urlImage}
        alt={`${name}`}
      />
    </>
  );
};
