import React  from 'react';
import {useFormik} from 'formik';
import './Home.modules.css'
import {registerUser} from "../../../features/thunks/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import * as yup from 'yup'


const Registration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const register = (data) => dispatch(registerUser(data))
  const onSubmit = async (data) => {
        await register(data);
        console.log('@@@@', "cccccc");
        navigate('/userPage')
      }
  const homeSchema = yup.object({
    username: yup.string().required("Заполни!").min(3,'нужно больше 3х сиволов'),
    password: yup.string().required('ВВеди пароль').min(6,'нужно больше 3х сиволов'),
    email: yup.string().email('Invalid email address').required('Obligatory field')

  })

  // useEffect(()=>{
  // },[])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema:homeSchema,
    onSubmit,
  });
  const username = formik.values.username;
  const email = formik.values.email;
  const password = formik.values.password
  return (
    <div className={'Home__page'}>
      <div className={'Login__form'}>
        <span className={'Home__text'}>Зарегистрируйтесь </span>
        <form onSubmit={formik.handleSubmit}>
          <input
            className={'input__home'}
            id="username"
            name="username"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className={"Error_UserName"}>{formik.errors.username}</div>
          ) : null}

          {/*{formik.touched.username ?*/}
          {/*  <div className={'Home__page-error'}>{formik.errors.username}</div> : null}*/}
          <input
            className={'input__home'}
            id="password"
            name="password"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password ?
            <div className={'Home__page-error'}>{
              formik.errors.password}</div> : null}


          <input
            className={'input__home'}
            id="email"
            name="email"
            type="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email ? <div className={'Home__page-error'}>{formik.errors.email}</div> : null}
          <button className={'input__home-button'}
                  type="submit"><strong>Create account</strong></button>
        </form>
          <div> Or registraeted</div>
          <button className={'input__home-button'} onClick={()=>{navigate('/login');}}><strong> Sing in</strong></button>


      </div>
      <div className={'login__info'}>
      <span className={'home__text'}>

        Что то новое, и, интересное
      </span>
      </div>
    </div>
  );
};
export default Registration
