import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { ListEmptyProps } from '../../types';

const ListEmpty = (props: ListEmptyProps) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{props?.text}</Text>
    </View>
  );
};

export default ListEmpty