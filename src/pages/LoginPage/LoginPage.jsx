import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../../redux/operations';
import { selectAuthentificated } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);
  const formRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    //   dispatch(
    //     loginUserThunk({
    //       email,
    //       password,
    //     })
    //   );
    // };
    dispatch(
      loginUserThunk({
        email,
        password,
      })
    ).then(() => {
      if (authenticated) {
        formRef.current.reset();
      }
    });
  };

  if (authenticated) return <Navigate to="/flowers" />;

  return (
    <div>
      <h1>Login Into Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input name="userEmail" type="email" required />
        </label>
        <br />
        <label>
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
