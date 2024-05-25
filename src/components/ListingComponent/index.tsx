import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PlaceholderPoster, Posters} from '../../assets/images';
import ListItem from '../ListItem';

type Props = {
  data: any[];
};

const renderItem = ({item, index}) => <ListItem item={item} index={index} />;

const ListingComponent = (props: Props) => {
  return (
    <View>
      <FlatList
        data={props?.data}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={handleRefresh}
        //     colors={['#FFF']}
        //     tintColor={'#OOO'}
        //   />
        // }
        horizontal={false}
        // onScrollBeginDrag={() => setIsScrolling(true)}rr
        // onScrollEndDrag={() => setIsScrolling(false)}
        // scrollEventThrottle={16}
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrap}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item.name + index + item.item?.['poster-image']
        }
        // onEndReached={}
        // onEndReachedThreshold={0.5}
        // ListEmptyComponent={<EmptyListView />}
      />
    </View>
  );
};

export default ListingComponent;
