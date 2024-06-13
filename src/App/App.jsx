import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import { StyledNavLink } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from '../redux/authReducer';
import { logoutUserThunk, refreshUserThunk } from '../redux/operations';
import NotFound from 'pages/NorFound/NotFound';
import { ButtonLogOut } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Flowers = lazy(() => import('pages/Flowers/Flowers'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <>
              <StyledNavLink to="/flowers">Flowers</StyledNavLink>
              <ButtonLogOut onClick={handleLogOut}>Log Out</ButtonLogOut>
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
              <StyledNavLink to="/404">404</StyledNavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="404" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
