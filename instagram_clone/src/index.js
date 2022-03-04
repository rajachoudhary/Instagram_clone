import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux";

import App from "./App";
import { UserDataContextProvider } from "./Context/UserDataContext";

ReactDOM.render(
  <React.StrictMode>
    <UserDataContextProvider>
      <Provider store={store}>
       <BrowserRouter>
         <App />
       </BrowserRouter>
      </Provider>
    </UserDataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// "https://json-server-skb-assignment.herokuapp.com/userDetails"
