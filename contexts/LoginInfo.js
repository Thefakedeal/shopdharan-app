import React, {useState, useEffect, useContext} from "react";
import AsyncStorage from '@react-native-community/async-storage'
import fetchAccessToken from '../helperFunctions/fetchAccessToken'

const loadingContext = React.createContext();
const isLoggedInContext = React.createContext();
const refreshTokenContext = React.createContext();
const accessTokenContext = React.createContext();
const continueWithoutLoginContext = React.createContext();

export function useLoading() {
  return useContext(loadingContext);
}

export function useAccessToken() {
  const [accessToken, setAccessToken] = useContext(accessTokenContext);
  return { accessToken, setAccessToken };
}

export function useRefreshToken() {
  const [refreshToken, setRefreshToken] = useContext(refreshTokenContext);
  return { refreshToken, setRefreshToken };
}

export function useIsLoggedIn() {
  return useContext(isLoggedInContext);
}

export function useContinueWithoutLogin() {
    const [continueWithoutLogin, setContinueWithoutLogin] = useContext(
      continueWithoutLoginContext
    );
    return { continueWithoutLogin, setContinueWithoutLogin };
}

export function LoginInfo({children}) {
    const [loading, setLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [continueWithoutLogin, setContinueWithoutLogin] = useState(false)
    const [refreshToken, setRefreshToken] = useState('')
    const [accessToken, setAccessToken] = useState('')

    useEffect(()=>{
        AsyncStorage.getItem('refreshToken')
          .then((token)=>{
            setRefreshToken(token)
          })
          .catch(err=>{
            setRefreshToken('')
          })
    },[])

    useEffect(() => {
        if (!refreshToken) {
          setLoading(false);
          setIsLoggedIn(false);
          return;
        }
        fetchAccessToken(refreshToken)
          .then((accessToken) => {
            setAccessToken(accessToken);
            setLoading(false);
            setIsLoggedIn(true);
            AsyncStorage.setItem('refreshToken', JSON.stringify(refreshToken))
          })
          .catch((err) => {
            setLoading(false);
            setIsLoggedIn(false);
          });
      }, [refreshToken]);

      return (
        <loadingContext.Provider value={loading}>
          <isLoggedInContext.Provider value={isLoggedIn}>
              <refreshTokenContext.Provider value={[refreshToken, setRefreshToken]}>
                <accessTokenContext.Provider value={[accessToken, setAccessToken]}>
                  <continueWithoutLoginContext.Provider
                    value={[continueWithoutLogin, setContinueWithoutLogin]}
                  >
                    {children}
                  </continueWithoutLoginContext.Provider>
                </accessTokenContext.Provider>
              </refreshTokenContext.Provider>
          </isLoggedInContext.Provider>
        </loadingContext.Provider>
      );
}
