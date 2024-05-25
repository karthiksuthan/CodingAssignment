import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PlaceholderPoster, Posters } from '../../assets/images';
import { styles } from './styles';

const ListItem = ({ index, item, separators }) => {
    const [isLongText, setLongText] = useState<boolean>(false);
    const checkTextLength = (e) => {
        if (e.nativeEvent.lines.length > 1) {
            setLongText(true);
       }
    }
    return(
  <View style={styles.container}>
    <Image
      source={Posters?.[item?.['poster-image']] ?? PlaceholderPoster}
      style={styles.posterImage}
    />
            { <Text onTextLayout={checkTextLength} style={styles.name} numberOfLines={1}>{item?.name}</Text>
     }
  </View>
)};

export default ListItem