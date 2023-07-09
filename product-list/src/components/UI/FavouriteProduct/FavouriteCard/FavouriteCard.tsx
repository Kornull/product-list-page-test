import { useEffect } from 'react';

import { useGlobalState } from '../../../../state';

export const FavouriteCard = () => {
  const [product] = useGlobalState('product');
  useEffect(() => {
    console.log(product);
  }, [product]);
  return <div>FavouriteCard</div>;
};
