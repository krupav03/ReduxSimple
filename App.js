import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CounterView from "./src/Counterview";

function App () {
  return(
    <Provider store={store}>
     <CounterView/>
    </Provider>
  )
}

export default App;
