import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ContainerNotFoundPage = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 4s ease-in;
`;

export const BoxNotFoundPage = styled.div`
  text-align: center;
`;

export const TitleNotFoundPage = styled.h1`
  font-size: 10rem;
  animation: ${fadeIn} 1.5s ease-in;
`;

export const TextPosition = styled.div`
  margin-bottom: 20px;
`;

export const Text404 = styled.p`
  color: red;
  font-size: 24px;
  font-size: 1.5rem;
  margin-bottom: 20px;
  animation: ${fadeIn} 2s ease-in;
  margin-bottom: 50px;
`;

export const BackButton = styled.div`
  animation: ${fadeIn} 5s ease-in;
  margin-bottom: 50px;
`;

export const BackHome = styled(Link)`
  display: block;
  width: 150px;
  margin-bottom: 24px;
  align-items: center;
  text-align: center;
  padding: 18px 32px;
  border-radius: 16px;
  border: 1px solid transparent;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  text-decoration: none;
  background-color: #9b9fe0;

  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  &:hover {
    color: #fff;
    /* font-size: 24px; */
    background-color: #00008b;
  }
  &:focus {
    background-color: #00008f;

    font-size: 1rem;
    color: #007bff;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

// import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

// export const ContainerNotFoundPage = styled.div`
//   display: block;
//   width: 100vh;
//   height: 80vh;
//   background-color: #f7f6f9;
//   margin-left: auto;
//   margin-top: 90px;
//   margin-right: auto;
//   margin-bottom: 32px;
// `;

// export const BoxNotFoundPage = styled.div`
//   width: 450px;
//   margin-top: 50px;
//   margin-right: auto;
//   margin-left: auto;
//   padding-top: 50px;
// `;

// export const TitleNotFoundPage = styled.h1`
//   font-family: Inter;
//   font-size: 180px;
//   font-weight: 900;
//   line-height: 1.5;
//   letter-spacing: 0em;
//   margin: 0;
//   text-align: left;
//   color: #000f8b;
//   text-shadow: 0px 9.4px 57.7px rgba(0, 0, 0, 0.07),
//     0px 47px 355px rgba(0, 0, 0, 0.07);
// `;

// export const TextPosition = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 252px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// export const Text404 = styled.p`
//   color: rgba(248, 4, 4, 0.7);

//   text-align: center;
//   font-family: Inter;
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 1.29;
//   width: 400px;
//   margin-top: 28px;
//   margin-bottom: 28px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// export const BackButton = styled.button`
//   display: flex;
//   margin-bottom: 24px;
//   padding: 18px 32px;
//   border-radius: 16px;
//   border: 1px solid transparent;
//   box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

//   background-color: #00055b;

//   margin-left: auto;
//   margin-right: auto;
//   cursor: pointer;

//   &:hover {
//     background-color: #00008b;
//   }
//   &:focus {
//     background-color: #00008f;
//   }
// `;
// export const BackHome = styled(NavLink)`
//   text-align: center;
//   font-family: Inter;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1.29;
//   color: #ffffff;
//   letter-spacing: -0.28px;
//   text-decoration: none;
// `;
