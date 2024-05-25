import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import apiCall from '../../apiServices/apiClient';
import {CustomHeader, ListingComponent} from '../../components';
import {ColorPallette} from '../../assets/colors';

const ListingScreen = () => {
  const [movieList, setMovieList] = useState([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loadingFlag, setLoading] = useState<boolean>(false);
  console.log();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (pageNum: number = 1) => {
    try {
      setLoading(true);
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
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomHeader />
      <ListingComponent
        loading={loadingFlag}
        data={movieList}
        listSize={totalItems}
        listEndCallback={fetchData}
      />
    </>
  );
};

export default ListingScreen;
