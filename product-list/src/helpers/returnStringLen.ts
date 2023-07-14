export const returnStringLen = (data: string, len: number): string => {
  return data.length > len ? `${data.slice(0, len)}...` : data;
};
