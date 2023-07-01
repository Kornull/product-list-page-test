import { createGlobalState } from 'react-hooks-global-state';

import { API_CALLS, FoodDataType } from '../types';

const getData = async () => {
  const response = await fetch(`${API_CALLS.ALL_PRODUCTS}`);
  if (!response.ok) return [];

  return await response.json();
};

type InitialType = {
  data: FoodDataType[];
};

export const InitialState: InitialType = {
  data: await getData(),
};

const { useGlobalState } = createGlobalState(InitialState);

export { useGlobalState };
