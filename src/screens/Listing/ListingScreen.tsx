import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import apiCall from '../../apiServices/apiClient';
import {CustomHeader, ListingComponent} from '../../components';
import {ColorPallette} from '../../assets/colors';
import {getSearchFilteredArray} from '../../utils/searchUtils';
import {movieListItemType} from '../../types';
import {LOADING_STATUS} from '../../constants/Enums';

const ListingScreen = () => {
  const [movieList, setMovieList] = useState<Array<movieListItemType>>([]);
  const [searchedList, setSearchedList] = useState<Array<movieListItemType>>([],);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loadingFlag, setLoading] = useState<number>(0);
  const [headerText, setHeaderText] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (pageNum: number = 1) => {
    try {
      setLoading(LOADING_STATUS.loading);
      const response = await apiCall(pageNum);
      console.log('resp', response);
      if (response.length) {
        let tempList = response;
        setMovieList(oldArr =>
          pageNum === 1 ? tempList : [...oldArr, ...tempList],
        );
        setTotalItems(response?.['total-content-items']);
        setHeaderText(response?.title);
      }
      setLoading(LOADING_STATUS.loadingSuccess);
    } catch (error) {
      console.log('error', error);
      setLoading(LOADING_STATUS.loadingError);
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
