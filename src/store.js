import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";
import { combineForms } from "react-redux-form";

// import { promiseMiddleware, localStorageMiddleware } from './middleware';

const createStoreWithMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(thunk);
    //return applyMiddleware(thunk,promiseMiddleware, localStorageMiddleware); If used other middlewares
  } else {
    // Additional logging during development.
    return applyMiddleware(createLogger());
  }
};

const initialUserState = {
  firstName: "",
  lastName: ""
};

const store = createStore(
  //   rootReducer,
  combineForms({
    user: initialUserState
  }),
  compose(
    createStoreWithMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
