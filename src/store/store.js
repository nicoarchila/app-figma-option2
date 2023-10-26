import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const login = "login";
const products = "products";
const details = "details";
const payment = "payment";
const transactionCost = "transactionCost";
const productSelected = "productSelected";
const paymentConfig = "paymentConfig";
const closeSession = "closeSession";

const STORE_KEY = 'reduxStore';

// Define your initial 
const initState = window.localStorage.getItem(STORE_KEY);
const initS = {
  data: { login: {
      state: false
    }
  },
};

let initialState = initS;

if(initState) {
  try {
    initialState = JSON.parse(initState);
  }
  catch(e) {
    console.log(e);
    localStorage.removeItem(STORE_KEY);
  }
};


// Create a reducer function
const reducer = (state = initialState, action) => {
  // Handle actions and update state
  // Return the updated state
  console.log(action, "action");
  let newState = state;
  switch (action.type) {
    case login:
      newState = { ...state, login: action.payload };
      break;
    case products:
      newState = { ...state, products: action.payload };
      break;
    case details:
      newState = { ...state, details: action.payload };
      break;
    case payment:
      newState = { ...state, payment: action.payload };
      break;
    case transactionCost:
      newState = { ...state, transactionCost: action.payload };
      break;
    case productSelected:
      newState = { ...state, productSelected: action.payload };
      break;
    case paymentConfig:
      newState = { ...state, paymentConfig: action.payload };
      break;
    case closeSession:
      newState = initS;
      localStorage.removeItem(STORE_KEY);
      break;
    default:
      newState = { ...state };
      break;
  }

  window.localStorage.setItem(STORE_KEY, JSON.stringify(newState));
  return newState;
};

// Create the Redux store
const store = createStore(reducer, composeWithDevTools());

console.log(store.getState());

export default store;
