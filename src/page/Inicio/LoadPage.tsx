import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
`;

const LoadingContainer = styled.div<{ isLoading: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: ${({ isLoading }) => (isLoading ? fadeIn : fadeOut)} 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingBar = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #007bff;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p<{ isLoading: boolean }>`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  animation: ${({ isLoading }) => (isLoading ? fadeIn : fadeOut)} 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
`;

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <LoadingContainer isLoading={isLoading}>
      <LoadingBar />
      <LoadingText isLoading={isLoading}>Carregando, aguarde um momento...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;