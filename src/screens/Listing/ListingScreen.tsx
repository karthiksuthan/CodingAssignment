import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import apiCall from '../../apiServices/apiClient'
import { CustomHeader } from '../../components'

const ListingScreen = () => {

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async()=>{
    try {
      
    const response = await apiCall(5);
    console.log('resp',response)
    } catch (error) {
      console.log('error',error)
    }
  }

  return (
    <>
    <CustomHeader />
    <View>
      <Text>ListingScreen</Text>
    </View>
    </>
  )
}

export default ListingScreen;