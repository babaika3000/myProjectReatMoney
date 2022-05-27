import * as React from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {RequireAuth} from "./Components/Hoc/RequireAuth";
import {getToken} from "./utils/localStorage";
import {useEffect} from "react";
import {userAuth} from "./app/Rudesers/authReduser";
import {PublicProvide} from "./Components/Hoc/PublicProvide";

import Registration from "./Components/Pages/Registaration/Registration";
import LoginPage from "./Components/Pages/LoginPage/Login";
import UserPage from "./UserPage/UserPage";

import './App.css';

function App() {

  const token = getToken()
  const isAuth = useSelector((state) => state?.usersAuth?.isAuth)
  const dispatch = useDispatch();



  useEffect(() => {
    if (token) {
      dispatch(userAuth(true))
    } else {
      dispatch(userAuth(false))
    }
  }, [token])

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={
          <PublicProvide>
            <LoginPage/>
          </PublicProvide>}/>}/>
        <Route path='/registr' element={
          <PublicProvide>
            <Registration/>
          </PublicProvide>}/>
        <Route path='/userPage' element={
          <RequireAuth>
            <UserPage/>
          </RequireAuth>}/>
      </Routes>
      <div>
      </div>
    </div>
  );
}

export default App;
