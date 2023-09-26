import {createStore} from"redux";

import rootes from './Reducer/Reducer2'
import { useEffect } from "react";
function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
    rootes,
    loadFromLocalStorage()
    
)
store.subscribe(() => saveToLocalStorage(store.getState()));

export default  store;