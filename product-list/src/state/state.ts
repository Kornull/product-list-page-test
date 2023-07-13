import { createGlobalState } from 'react-hooks-global-state';

import { API_CALLS, FoodDataType } from '../types';

type InitialType = {
  data: FoodDataType[];
  openImg: boolean;
  favourite: FoodDataType[];
  isLiked: number[];
  product: FoodDataType | null;
};

export const InitialState: InitialType = {
  data: [],
  openImg: false,
  favourite: [],
  isLiked: [],
  product: null,
};

export const { useGlobalState, setGlobalState } =
  createGlobalState(InitialState);
