import { createGlobalState } from 'react-hooks-global-state';

import { API_CALLS, FoodDataType } from '../types';

const getData = async () => {
  const response = await fetch(`${API_CALLS.ALL_PRODUCTS}`);
  if (!response.ok) return [];

  return await response.json();
};

type InitialType = {
  data: FoodDataType[];
  product: FoodDataType | null;
};

export const InitialState: InitialType = {
  data: await getData(),
  product: null,
};

export const { useGlobalState } = createGlobalState(InitialState);
