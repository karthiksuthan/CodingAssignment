import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'

const ListingScreen = () => {

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=()=>{
    
  }

  return (
    <View>
      <Text>ListingScreen</Text>
    </View>
  )
}

export default ListingScreen;