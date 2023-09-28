import styled, {keyframes} from "styled-components";

// Estilização do componente Box
export const Box = styled.div`
  margin: 0 auto;
  width: 99%;
  height: auto;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

// Estilização do componente Title
export const Title = styled.h1`
  text-align: center;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

// Estilização do componente ButtonLoad
export const ButtonLoad = styled.button`
  width: 250px;
  height: 50px;
  background-color: #ffbf1a;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #ffa500;
  }
`;

// Estilização do componente CardBtns
export const CardBtns = styled.div`
  width: 290px;
  padding: 15px;
  margin: 10px;
  padding-bottom: 10px;
  border:1px solid #35343426;
  border-radius: 10px;
  cursor: pointer;
  animation: 0.5s all ease;

  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    /* Estilos para telas menores */
    h3 {
      font-size: 16px;
    }
  }
`;

export const ImageCard = styled.img`
  width: 255px;
  height: 250px;
  border-radius: 20px;
  margin-bottom: 10px;
  border-bottom: 5px solid #000000;
 

  @media (max-width: 768px) {
    height: 150px;
    width: 100%;
  }
`;

const backgroundAnimation = keyframes`
  0% {
    background-color: #4CAF50; /* Verde */
  }
  50% {
    background-color: #388E3C; /* Verde mais escuro */
  }
  100% {
    background-color: #4CAF50; /* Verde */
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const sparkAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-10px);
    opacity: 0;
  }
`;

export const NewTag = styled.p`
  background-color: #4CAF50; /* Verde */
  color: #fff; /* Branco */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  position: relative; /* Para posicionar faíscas */
  animation: ${backgroundAnimation} 2s infinite, ${pulseAnimation} 2s infinite; /* Combinação de animações */

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 5px;
    background-color: #6FCF97; /* Verde oliva claro */
    opacity: 1;
    animation: ${sparkAnimation} 0.5s infinite alternate; /* Animação de faíscas */
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;




