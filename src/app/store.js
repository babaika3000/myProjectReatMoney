import { configureStore} from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counter";
import authReducer from "./Rudesers/authReduser";
import UserDataReducer from "./Rudesers/UserDataReducer";
import LoginReducer from "./Rudesers/LoginReducer";
import transactionReducer from "./Rudesers/TransactionReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    transaction: transactionReducer,
    usersAuth:authReducer,
    userData:UserDataReducer,
    login:LoginReducer
  },
})


