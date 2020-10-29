import AsyncStorage from '@react-native-community/async-storage'

import validateAccessToken from "./validateAccessToken";
import fetchAccessToken from "./fetchAccessToken";

export default async function fetchWithCredentials(method = "POST", url, body) {
  let accessToken = await AsyncStorage.getItem("accessToken");
  const refreshToken = await AsyncStorage.getItem("refreshToken");
  const isValid = await validateAccessToken(accessToken);
 
  if (!isValid){
    accessToken = await fetchAccessToken(refreshToken);
    AsyncStorage.setItem("accessToken", accessToken);
  }

  let options = {
    method: method,
    headers: {
      authorization: `bearer ${accessToken}`,
      "content-type": "application/json",
    },
    
  };
  if(body && method != 'GET'){
   options = {...options, body: JSON.stringify(body),} 
  }
  
  return await fetch(url,options);
}
