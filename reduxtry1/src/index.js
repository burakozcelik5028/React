import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import allReducers from './Redux/Reducers/index';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Redux/Sagas'
import { applyMiddleware, compose } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
}

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare]; //we are making array here, because we can add another middlewares later into this array if we need to

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = compose(applyMiddleware(...middleware))
(configureStore)
({reducer: persistedReducer,
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
});

sagaMiddleWare.run(rootSaga);

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
