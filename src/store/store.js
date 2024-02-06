import { counterReducer } from './counterToolkit/counterReducer';
import { configureStore } from '@reduxjs/toolkit';
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

export const store = configureStore({ reducer });
export const persistor = persistStore(store);
