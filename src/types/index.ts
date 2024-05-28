export interface movieListItemType {
  name: string;
  'poster-image': string;
}

export type CustomHeaderProps = {
  title: string;
  onSearchTextChange: (text: string) => void;
  searchKey: string;
};

export type AnimatedHeaderProps = {
  title: string;
  searchText: string;
  isSearchActive: boolean;
  onSearchTextChange: (text: string) => void;
  callback: () => void;
};

export type ListingComponentProps = {
  data: any[];
  listSize: number;
  listEndCallback: (pageNum: number) => Promise<void>;
  loading: 1 | 2 | 3;
};

export type ListEmptyProps = {
  text: string;
};

export type ListItemProps = {index: number; name: string; image: string};