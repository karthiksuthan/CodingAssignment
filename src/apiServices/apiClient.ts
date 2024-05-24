import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import Config from 'react-native-config';

const API_BASE = Config.API_URL ?? '';

const apiCall = async (page: number) => {
  const netInfo = await NetInfo.fetch();
  if (netInfo.isConnected) {
    let pageurl = API_BASE + page + '.json';
    try {
      const header /*: HeaderType*/ = {
        'Content-Type': 'application/json',
      };
      console.log('API Request', pageurl);
      const config = {
        method: 'get',
        url: pageurl,
        headers: header,
      };
      console.log('Network Request config', config);
      const response = await axios(config);
      console.log('API Reponse', response);
      return {
        ...response?.data,
      };
    } catch (err) {
      const errorResponse = err;
      console.log(pageurl, ' api error ;', errorResponse);
      return errorResponse;
    }
  } else {
    throw 'network error';
  }
};

export default apiCall;
