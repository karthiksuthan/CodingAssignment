import React, {useEffect, useRef, useState} from 'react';
import apiCall from '../../apiServices/apiClient';
import {CustomHeader, ListingComponent} from '../../components';
import {getSearchFilteredArray} from '../../utils/searchUtils';
import {movieListItemType} from '../../types';
import { LOADING_STATUS } from '../../constants/Enums';
import { hideSplashScreen } from '../../utils/layoutUtils';

const ListingScreen = () => {
  const [movieList, setMovieList] = useState<Array<movieListItemType>>([]);
  const [searchedList, setSearchedList] = useState<Array<movieListItemType>>([],);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loadingFlag, setLoading] = useState<number>(0);
  const [headerText, setHeaderText] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const initialLoad = useRef(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (pageNum: number = 1) => {
    try {
      setLoading(LOADING_STATUS.loading);
      const response = await apiCall(pageNum);
      // console.log('resp',response)
      if (response?.content?.length) {
        let tempList = response?.content;
        setMovieList(oldArr =>
          pageNum === 1 ? tempList : [...oldArr, ...tempList],
        );
        setTotalItems(response?.['total-content-items']);
        setHeaderText(response?.title);
      }
      setLoading(LOADING_STATUS.loadingSuccess);
    } catch (error) {
      setLoading(LOADING_STATUS.loadingError);
      
    }
    finally {
      if (initialLoad.current) {
        initialLoad.current = false;
        hideSplashScreen();
      }
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text) {
      const filteredArray = getSearchFilteredArray(text, movieList);
      setSearchedList(filteredArray);
    }
  };

  return (
    <>
      <CustomHeader
        title={headerText}
        searchKey={searchText}
        onSearchTextChange={handleSearch}
      />
      <ListingComponent
        loading={loadingFlag}
        data={searchText ? searchedList : movieList}
        listSize={totalItems}
        listEndCallback={fetchData}
      />
    </>
  );
};

export default ListingScreen;
