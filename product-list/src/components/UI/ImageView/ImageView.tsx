import ReactImageMagnify from 'react-image-magnify';

import { API_CALLS } from '../../../types';

type Props = {
  isOpen: boolean;
  name: string;
  url: string;
};

export const ImageView = ({ isOpen, name, url }: Props) => {
  return (
    <>
      {isOpen ? (
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: `${name}`,
              isFluidWidth: true,
              src: `${API_CALLS.DEFAULT_LINK}${url}`,
            },
            largeImage: {
              src: `${API_CALLS.DEFAULT_LINK}${url}`,
              width: 1200,
              height: 1800,
            },
          }}
        />
      ) : (
        <img
          src={`${API_CALLS.DEFAULT_LINK}${url}`}
          alt={`${name}`}
        />
      )}
    </>
  );
};
