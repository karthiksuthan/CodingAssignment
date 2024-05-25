import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PlaceholderPoster, Posters} from '../../assets/images';
import ListItem from '../ListItem';

type Props = {
  data: any[];
  listSize: number;
  listEndCallback: (pageNum: number) => void;
  loading: boolean;
};

const renderItem = ({item, index}) => <ListItem item={item} index={index} />;

const ListingComponent = (props: Props) => {
  const handleScrollEnd = () => {
    console.log('scrollendFired');
    if (!props?.loading && props?.data?.length < props?.listSize) {
      console.log('inside if to call');
      props?.listEndCallback(props?.data?.length / 20 + 1);
    }
  };
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        horizontal={false}
        data={props?.data}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={handleRefresh}
        //     colors={['#FFF']}
        //     tintColor={'#OOO'}
        //   />
        // }
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
        onEndReached={handleScrollEnd}
        onEndReachedThreshold={0.9}
        // ListEmptyComponent={<EmptyListView />}
      />
    </View>
  );
};

export default ListingComponent;
