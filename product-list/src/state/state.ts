import { createGlobalState } from 'react-hooks-global-state';

import { API_CALLS, FoodDataType, STATE_DATA_CALLS } from '../types';

const getData = async (): Promise<FoodDataType[]> => {
  try {
    const response = await fetch(`${API_CALLS.ALL_PRODUCTS}`);
    const res: FoodDataType[] = await response.json();

    return res;
  } catch (er) {
    return [];
  }
};

const data = await getData();

const isLiked =
  localStorage
    .getItem(STATE_DATA_CALLS.LIKED)
    ?.split(',')
    .map((like) => +like) || [];

type InitialType = {
  data: FoodDataType[];
  openImg: boolean;
  favourite: FoodDataType[];
  isLiked: number[];
  product: FoodDataType | null;
};

export const InitialState: InitialType = {
  data,
  openImg: false,
  isLiked,
  favourite: isLiked.length ? data.filter((product) => isLiked.includes(product.id)) : [],
  product: null,
};

export const { useGlobalState, setGlobalState } = createGlobalState(InitialState);
