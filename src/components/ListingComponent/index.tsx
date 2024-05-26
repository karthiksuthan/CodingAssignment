import {FlatList, RefreshControl, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import ListItem from '../ListItem';
import ListEmpty from './ListEmpty';
import {TEXT_STRINGS} from '../../constants/String';
import {LOADING_STATUS} from '../../constants/Enums';
import {movieListItemType} from '../../types';

type Props = {
  data: any[];
  listSize: number;
  listEndCallback: (pageNum: number) => Promise<void>;
  loading: 1 | 2 | 3;
};

const renderItem = ({
  item,
  index,
}: {
  item: movieListItemType;
  index: number;
}) => <ListItem item={item} index={index} />;

const ListingComponent = (props: Props) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleScrollEnd = () => {
    console.log('scrollendFired');
    if (
      props?.loading !== LOADING_STATUS.loading &&
      props?.data?.length < props?.listSize
    ) {
      // console.log('inside if to call');
      props?.listEndCallback(props?.data?.length / 20 + 1);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await props?.listEndCallback(1);
    setRefreshing(false);
  };

  return (
    <View style={styles.listWrap}>
      <FlatList
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item.name + index + item.item?.['poster-image']
        }
        showsVerticalScrollIndicator={false}
        numColumns={3}
        horizontal={false}
        data={props?.data}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['red']}
            tintColor={'blue'}
          />
        }
        // onScrollBeginDrag={() => setIsScrolling(true)}rr
        // onScrollEndDrag={() => setIsScrolling(false)}
        // scrollEventThrottle={16}
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrap}
        onEndReached={handleScrollEnd}
        onEndReachedThreshold={0.7}
        ListEmptyComponent={
          <ListEmpty
            text={
              props?.loading === LOADING_STATUS.loadingError
                ? TEXT_STRINGS.somethingWentWrong
                : TEXT_STRINGS.ListEmpty
            }
          />
        }
      />
    </View>
  );
};

export default ListingComponent;
