import React from 'react';
import { motion } from 'framer-motion';
import {
  BackButton,
  BackHome,
  BoxNotFoundPage,
  ContainerNotFoundPage,
  TitleNotFoundPage,
  TextPosition,
  Text404,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <ContainerNotFoundPage>
      <BoxNotFoundPage>
        <TextPosition>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 20 }}
          >
            <TitleNotFoundPage>404</TitleNotFoundPage>
          </motion.div>
        </TextPosition>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          <Text404>
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </Text404>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <BackButton>
            <BackHome to="/">Back to home</BackHome>
          </BackButton>
        </motion.div>
      </BoxNotFoundPage>
    </ContainerNotFoundPage>
  );
};

export default NotFound;
