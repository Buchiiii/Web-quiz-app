import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/fonts/static/Rubik-Italic.ttf";
import "./assets/fonts/static/Rubik-Medium.ttf";
import "./assets/fonts/static/Rubik-Regular.ttf";
import "./assets/fonts/Rubik-Italic-VariableFont_wght.ttf";
import "./assets/fonts/Rubik-VariableFont_wght.ttf";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
