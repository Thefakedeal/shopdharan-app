import React, { useState, useContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-community/async-storage";
const settingsContext = React.createContext();
const loadingContext = React.createContext();

export const ACTIONS = {
  SETALL: "setall",
  SETCITY: "setcity",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SETALL:
      return { ...action.payload };
    case ACTIONS.SETCITY:
      return { ...state, city_id: action.payload };
    default:
      return state;
  }
}

export function useSettings() {
  const [settings, dispatch] = useContext(settingsContext);
  return { settings, dispatch };
}

export function useLoading() {
  return useContext(loadingContext);
}

export function Settings({ children }) {
  const [loading, setLoading] = useState(true);
  const [settings, dispatch] = useReducer(reducer, {
    city_id: "",
  });

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem("settings")
      .then((settings) => {
        if (settings) {
          dispatch({
            type: ACTIONS.SETALL,
            payload: JSON.parse(settings),
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <loadingContext.Provider value={loading}>
      <settingsContext.Provider value={[settings, dispatch]}>
        {children}
      </settingsContext.Provider>
    </loadingContext.Provider>
  );
}
