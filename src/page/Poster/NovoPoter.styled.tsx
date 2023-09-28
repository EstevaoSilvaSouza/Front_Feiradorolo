// NovoPosterStyles.js
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const FormContainer = styled.div`
  width: 70%;
  padding: 50px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  select { /* Estilo para input e select */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%; /* Preencher a largura do pai */
  }

  select { /* Estilo específico para o select */
    appearance: none; /* Remove a seta padrão do select em alguns navegadores */
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6' fill='%23007bff' viewBox='0 0 12 6'%3E%3Cpath d='M6 5.293L.354.646a1 1 0 111.415-1.414L6 3.464l4.232-4.232a1 1 0 111.415 1.414L6 5.293z'/%3E%3C/svg%3E") no-repeat right center; /* Adicione uma seta personalizada no lado direito */
    background-size: 12px 6px;
    padding-right: 30px; /* Espaço para a seta personalizada */
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;