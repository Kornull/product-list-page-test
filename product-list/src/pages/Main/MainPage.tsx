import { useEffect } from 'react';

import CardProduct from '../../components/UI/CardProduct';
import { useGlobalState } from '../../state/state';

export const MainPage = () => {
  const [store, setStore] = useGlobalState('data');

  useEffect(() => {
    console.log(store);
  }, []);
  return (
    <>
      {store.map((card) => (
        <CardProduct key={card.id} card={card} />
      ))}
      <div>MainPage</div>
    </>
  );
};
