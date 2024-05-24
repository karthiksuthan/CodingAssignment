import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TEXT_STRINGS } from '../../constants/String'

const CustomHeader = () => {
  return (
    
    <View>
      <Text style={styles.text}>{TEXT_STRINGS.headerPlaceholder}</Text>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
  }
})