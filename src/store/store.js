import { counterReducer } from './counterToolkit/counterReducer';
import { configureStore, isAction } from '@reduxjs/toolkit';
import { todoReducer } from './todoWithSlice/sliceTodo';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'todo',
  storage,
  whitelist: ['todo'],
};
const persistedReducer = persistReducer(persistConfig, todoReducer);

const reducer = {
  counter: counterReducer,
  todo: persistedReducer,
};

const customMiddl = store => {
  return next => {
    return action => {
      console.log('acion', action);
      return next(action);
    };
  };
};

export const store = configureStore({
  reducer,
  middleware: () => [customMiddl],
});
export const persistor = persistStore(store);
