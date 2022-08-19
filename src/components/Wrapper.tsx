import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode;
}

const Body = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;

`

const Container = styled(motion.div)`
  height: 370px;
  width: 300px;
  background-color: hsl(213, 19%, 18%);
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  padding: 1rem;
  border-radius: 15px;
  color: white;
  text-align: center;

  p {
    color: hsl(217, 12%, 63%);
  }


  @media (max-width: 968px){
    & {
      width: 270px;
      height: 350px;
    }
  }
`;

const Wrapper = ({ children }: Props) => {
  return (
    <Body>
    <Container
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
    >
      {children}
    </Container>
    </Body>
  );
};

export default Wrapper;
