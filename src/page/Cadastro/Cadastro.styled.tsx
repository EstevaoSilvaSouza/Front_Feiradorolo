import styled from "styled-components";

export const DivMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top:15px;
  padding:20px;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 30px; /* Aumentei o padding para maior espaçamento interno */
  border-radius: 10px; /* Aumentei o raio das bordas */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Aumentei o efeito de sombra */
  width: 400px; /* Aumentei a largura do formulário */
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px; /* Aumentei o padding para maior espaçamento interno */
  margin: 10px 0; /* Aumentei a margem entre os inputs */
  border: 1px solid #ccc;
  border-radius: 5px; /* Aumentei o raio das bordas */
  font-size: 16px;
`;

export const FormButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px; /* Aumentei o padding para maior espaçamento interno */
  margin-top: 15px; /* Aumentei a margem superior */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  text-decoration: underline;
  margin-top: 10px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;