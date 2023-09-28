import styled, {keyframes} from "styled-components";
import { Link } from 'react-router-dom';

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const DivHeader = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 85px; /* Aumente o valor para criar espaço para a DivMessage */
  margin-bottom: 15px;
  border-radius: 15px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  position: relative; /* Adicione esta propriedade para ajustar o z-index */
  z-index: 1; /* Ajuste o z-index para ficar sobre a DivMessage */
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const MenuLauch = styled.img`
  left: 20px;
  width: 50px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 30px;
    height: auto;
  }
`;

const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const DivMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, #008000, #FFFF00);

  height: 70px;
  align-items: center;
  z-index: 0;
  animation: ${waveAnimation} 2s infinite; /* Aplica a animação às letras */

  @media (max-width: 768px) {
    text-align: center;
  }
`;


export const AMessage = styled.h3`
  color: #6124d8;

  &:hover {
    text-decoration: underline;
  }
`;

export const Lista = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 10%;
    padding: 10px;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 50px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  animation: ${bounceAnimation} 2s backwards; /* Aplica a animação de oscilação */
  animation: ${bounceAnimation} 2s forwards; /* Aplica a animação de oscilação */

  @media (max-width: 768px) {
    margin-top: 15px;
    width: 90%;
  }
`;


export const LinkS = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  color: #000;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #f28000;
    text-decoration: underline;
  }

  &:active {
    color: #000000;
  }
`;

export const InputSeachMenu = styled.input`
  height: 50px;
  width: 100%;
  max-width: 580px;
  font-weight: 500;
  text-align: center;
  font-size: 15px;
  border-radius: 10px;
  margin-right: 20px;

  &::placeholder {
    color: #f28000;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const BtnSearch = styled.button`
  border-radius: 50px;
  font-size: 20px;
  height: 45px;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  font-weight: bolder;
  font-size:15px;
  border: none;
  background-color: #f28000;
  width: 50px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #df7400;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
`;

export const BtnEntrar = styled.button`
  border-radius: 50px;
  font-size: 20px;
  height: 45px;
  padding: 10px;
  border: 1px solid #cfd4dd;
  cursor: pointer;
  background-color: #fff;
  width: auto;
  font-size:15px;
  min-width: 150px;
  transition: border-color 0.3s;

  &:hover {
    border: 1px solid #f28000;
    text-decoration: underline;
    text-decoration-color: #f28000;
  }
`;

export const BtnSair = styled.button`
  border-radius: 50px;
  font-size: 20px;
  height: 45px;
  padding: 10px;
  color: #fff;
  font-size:15px;
  border: 1px solid #cfd4dd;
  cursor: pointer;
  background-color: #ff3f3f;
  width: auto;
  min-width: 150px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff0000;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
`;


export const BtnAnucio = styled.button`
  border-radius: 50px;
  font-size: 20px;
  height: 45px;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  font-size:15px;
  font-weight: bolder;
  border: none;
  background-color: #ffbf1a;
  width: auto;
  min-width: 150px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #df7400;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    padding: 15px;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  animation: ${pulseAnimation} 2s infinite; /* Aplica uma animação de pulsação suave */
`;

export const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #f28000; /* Cor diferente, você pode escolher a cor desejada aqui */
  margin-right: 10px;
`;