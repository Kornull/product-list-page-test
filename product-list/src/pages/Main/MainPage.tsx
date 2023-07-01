import { useGlobalState } from 'src/state';

import { CardList } from 'src/components/UI/Card/CardList';

export const MainPage = () => {
  const [store, setStore] = useGlobalState('data');

  return (
    <>
      <CardList cards={store} />
    </>
  );
};
