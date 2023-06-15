import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/Contact'
import filterReducer from './reducers/Filter'

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
