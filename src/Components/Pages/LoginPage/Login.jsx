import React from 'react';
import * as yup from "yup";

import { useFormik } from 'formik';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUsers} from "../../../features/thunks/login";

import  './Login.modules.css'


const LoginPage = () => {
  const loginError = useSelector((state) => state.login.login);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = async () => {
    if (email && password && !formik.errors.password) {
      await login(email, password);
      navigate('/userPage');
    }
  }
  const login = async (email, password) => {
    await dispatch(loginUsers(email, password));
  }

  const homeSchema = yup.object({
    password: yup.string().required('ВВеди пароль').min(6,'нужно больше 3х сиволов'),
    email: yup.string().email('Invalid email address').required('Obligatory field')
  })


  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema:homeSchema,
    onSubmit,
  });
  const email = formik.values.email;
  const password = formik.values.password
  return (
    <div className={'Home__page'}>
      <div className={'Login__form'}>
        <span className={'Home__text'}>Ваш страница </span>
        <form onSubmit={formik.handleSubmit}>
          <input
            className={'input__home'}
            id="email"
            name="email"
            type="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder={"Email Address"}
          />
          {formik.touched.email ? <div className={'Home__page-error'}>{formik.errors.email}</div> : null}
          <input
            className={'input__home'}
            id="password"
            name="password"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder={"Password"}
          />
          {formik.touched.password ?
            <div className={'Home__page-error'}>{
              formik.errors.password}</div> : null}

          <button className={'input__home-button'} type="submit"><strong>Sing in</strong></button>

        <div> Or registraeted</div>
        <button className={'input__home-button'} onClick={()=>{navigate('/registr');}}><strong>Create account</strong></button>
        </form>
      </div>
      <div className={'login__info'}>
      <span className={'home__text'}>
         {loginError ? (
           <div className={"Error_Login"}><h1>{loginError}</h1></div>
         ) : null}
        Что то новое, и, интересное
      </span>
      </div>
    </div>
  );
};

export default LoginPage
