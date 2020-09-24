import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import styled from 'styled-components'
import CoinLottieData from './7843-flixxo-coins.json';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: CoinLottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <StyledWrapper>
      <NavBar />
      <TabWrapper>
        <Tab>
          <Divider />
        </Tab>
        <Tab />
      </TabWrapper>
      <Body>
        <LottieWrapper>
          <Lottie options={defaultOptions} />
        </LottieWrapper>
      </Body>
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div`
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;

const NavBar = styled.div`
  width: 100%;
  height: 44px;
  background-color: #FEE500;
`;

const TabWrapper = styled.div`
  width: 100%;
  height: 48px;
`;

const Tab = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 100%;
  border-bottom: 1px solid #111;
`;

const Divider = styled.div`
  position: absolute;
  background-color: #e9e9e9;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 24px;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 92px);
`;

const LottieWrapper = styled.div`
  position: absolute;
  /* width: 400px;
  height: 400px; */
  transform: rotate(-45deg);
  top: 300px;
  animation: move 2.5s infinite;

  @keyframes move {
  from {
    top: 300px;
  }

  to {
    top: -40px;
  }
}

`;
