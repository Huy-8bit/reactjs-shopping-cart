import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import cartReducer from "./ducks/cart";
import productsReducer from "./ducks/products";
import App from "./App";
import productsData from "./data/products";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRdf9qSdv4bjsxeU5hW8hOBTD6QOayBas",
  authDomain: "reactjs-shopping-cart-59899.firebaseapp.com",
  projectId: "reactjs-shopping-cart-59899",
  storageBucket: "reactjs-shopping-cart-59899.appspot.com",
  messagingSenderId: "429174978135",
  appId: "1:429174978135:web:011966dac607f937cc9512",
  measurementId: "G-4GPN76K6L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

let store = createStore(
  rootReducer,
  {
    products: productsData, // initial store values
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
