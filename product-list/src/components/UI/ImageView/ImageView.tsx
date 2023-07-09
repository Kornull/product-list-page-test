import ReactImageMagnify from 'react-image-magnify';

import { API_CALLS } from '../../../types';

type Props = {
  isOpen: boolean;
  name: string;
  url: string;
};

export const ImageView = ({ isOpen, name, url }: Props) => {
  const urlImage = `${API_CALLS.DEFAULT_LINK}${url}`;

  return (
    <>
      {isOpen ? (
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: `${name}`,
              isFluidWidth: true,
              src: urlImage,
            },
            largeImage: {
              src: urlImage,
              width: 1200,
              height: 1800,
            },
          }}
        />
      ) : (
        <img
          src={urlImage}
          alt={`${name}`}
        />
      )}
    </>
  );
};
