import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import apiCall from '../../apiServices/apiClient';
import {CustomHeader, ListingComponent} from '../../components';
import {ColorPallette} from '../../assets/colors';

const ListingScreen = () => {
  const [movieList, setMovieList] = useState([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (pageNum: number = 3) => {
    try {
      const response = await apiCall(pageNum);
      console.log('resp', response);
      if (Array.isArray(response?.['content-items']?.content)) {
        let tempList = response?.['content-items']?.content;
        setMovieList(oldArr =>
          pageNum === 1 ? tempList : [...oldArr, ...tempList],
        );
        setTotalItems(response?.['total-content-items']);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <CustomHeader />
      <ListingComponent data={movieList} />
    </>
  );
};

export default ListingScreen;
