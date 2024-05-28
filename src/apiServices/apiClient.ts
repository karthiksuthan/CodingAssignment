import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import Config from 'react-native-config';
import Toast from 'react-native-simple-toast';

const API_BASE = Config.API_URL ?? '';

const apiCall = async (page: number) => {
  const netInfo = await NetInfo.fetch();
  if (netInfo.isConnected) {
    let pageurl = API_BASE + page + '.json';
    try {
      const header /*: HeaderType*/ = {
        'Content-Type': 'application/json',
      };
      // console.log('API Request', pageurl);
      const config = {
        method: 'get',
        url: pageurl,
        headers: header,
      };
      console.log('Network Request config', config);
      const response = await axios(config);
      console.log('API Reponse', response);
      if (Array.isArray(response?.data?.page?.['content-items']?.content))
        return {
          content: response?.data?.page?.['content-items']?.content,
          'total-content-items': response?.data?.page?.['total-content-items'],
          title:response?.data?.page?.title,
        };
      else throw 'malformed data';
    } catch (err) {
      const errorResponse = err;
      console.log(pageurl, ' api error ;', errorResponse);
      Toast.show('Error while fetching data', 2000);
      throw err;
    }
  } else {
      Toast.show('No network access', 3000);
      throw ' no network';
  }
};

export default apiCall;
