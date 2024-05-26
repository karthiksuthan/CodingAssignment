import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles';

type Props = {
    text: string;
}

const ListEmpty = (props:Props) => {
  return (
      <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{props?.text}</Text>
    </View>
  )
}

export default ListEmpty