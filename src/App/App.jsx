import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectAuthentificated } from '../redux/authReducer';
// import { logoutUserThunk, refreshUserThunk } from './redux/operations';
import { Loader } from 'components/Loader/Loader';
import { StyledNavLink } from './App.styled';
import Flowers from 'pages/Flowers/Flowers';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/Flowers/Flowers'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  // useEffect(() => {
  //   if (!token) return;

  //   dispatch(refreshUserThunk());
  // }, [token, dispatch]);

  // const handleLogOut = () => {
  //   dispatch(logoutUserThunk());
  // };

  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <>
              <StyledNavLink to="/flower">Flower</StyledNavLink>
              {/* <button onClick={handleLogOut}>Log Out</button> */}
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flower" element={<Flowers />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
