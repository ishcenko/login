import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from '../../redux/operations';
import { selectAuthentificated } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);
  const formRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value.trim();
    const email = form.elements.userEmail.value.trim();
    const password = form.elements.userPassword.value.trim();

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    ).then(() => {
      if (!authenticated) {
        formRef.current.reset();
      }
    });
  };

  if (authenticated) return <Navigate to="/flowers" />;

  return (
    <div>
      <h1>Register Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input name="userName" type="text" required minLength={2} />
        </label>
        <br />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
