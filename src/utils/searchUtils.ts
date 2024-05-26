import {movieListItemType} from '../types';

export const getSearchFilteredArray = (
  searchKey: string,
  movieArray: Array<movieListItemType>,
) => {
  const casedKey = searchKey.toLowerCase();
  const filteredArray = movieArray.filter(item =>
    item?.name?.toLowerCase().includes(casedKey),
  );
  return filteredArray;
};
