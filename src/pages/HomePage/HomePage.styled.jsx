import styled from 'styled-components';

export const DescriptionSectionStyled = styled.section`
  width: 1280px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  margin-bottom: 50px;
  background: rgba(100, 219, 255, 0.432);
`;

export const Caption = styled.div`
  display: block;
  font-weight: 400;
  font-size: 56px;
  text-align: center;
  text-shadow: 1px 1px 1px #73ff00;
  margin-top: 50px;
  margin-bottom: 50px;
  text-decoration-line: underline;
  text-decoration-color: red;
  text-decoration-style: double;
`;

export const Title = styled.h2`
  color: crimson;
  margin-top: 72px;
  padding-left: 24px;
  font-size: 26px;
  font-style: italic;
  text-decoration-line: underline;
  text-decoration-color: #080129c7;
  text-decoration-style: double;
  text-decoration-thickness: 3px;
`;

export const Chapter = styled.p`
  display: block;
  font-size: 24px;
  text-indent: 32px;
  line-height: 1.5;
  letter-spacing: 1px;
  white-space: pre-wrap;
`;

export const Image = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
`;
