import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding:20px;
  min-height: 100vh;
  background-color: #f5f5f5; /* Cor de fundo clara */
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
  padding: 20px;
  background-color: #ffffff; /* Fundo branco */
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Sombra suave */
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #F99D21; /* Cor do botão */
  margin-top: 20px;
  animation: wave 2s infinite;
  display: inline-block;

  @keyframes wave {
    0%, 100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(5px);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputLogin = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc; /* Borda cinza */
  border-radius: 5px;
  margin: 15px 0;
  padding: 10px;
  font-size: 16px;
`;

export const BtnLogin = styled.button`
  width: 100%;
  height: 50px;
  background-color: #F99D21;
  color: #fff;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f28000;
  }
`;

export const BtnRegistro = styled.button`
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, #008000, #FFFF00);
  color: #fff;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2b800c;
  }
`;