import  {configureStore} from '@reduxjs/toolkit';
import templateReducer from './reducers/templateReducer';
import globalReducer from './reducers/globalReducer';
import userReducer from './reducers/userReducer';
import uploadReducer from './reducers/uploadReducer';

export const store = configureStore({
    reducer: {
        templateReducer,
        globalReducer,
        userReducer,
        uploadReducer
    }
  })


export type RootState = ReturnType<typeof store.getState>