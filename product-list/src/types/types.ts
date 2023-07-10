export type FoodDataType = {
  id: number;
  name: string;
  price: number;
  src: string;
};

export enum API_CALLS {
  DEFAULT_LINK = 'https://testbackend.nc-one.com',
  ALL_PRODUCTS = 'https://testbackend.nc-one.com/image',
}

export enum STATE_DATA_CALLS {
  DATA = 'data',
  PRODUCT = 'product',
  OPEN_IMG = 'openImg',
  FAVOURITE = 'favourite',
}
