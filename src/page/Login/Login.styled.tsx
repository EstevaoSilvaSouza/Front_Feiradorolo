import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
`;

export const BoxLogin = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%; /* Use uma porcentagem para ajustar ao tamanho da tela */
    max-width: 560px; /* Largura máxima para evitar expansão excessiva */
    border-bottom: 2px solid #000000;
    border-radius: 5px;
    padding: 10px;
    margin: 0 auto; /* Centraliza horizontalmente */
`;

export const ImgLogo = styled.img`
    width: 100%;
    max-width: 250px;
    height: auto;
`;

export const InputLogin = styled.input`
    width:400px;
    max-width: 500px;
    height: 40px;
    border-radius: 5px;
    margin: 15px;
    text-align: center;
    @media (max-width: 768px) {
        width:300px;
  }
`;

export const BtnLogin = styled.button`
    width: 100%;
    max-width: 250px;
    height: 50px;
    background-color: #F99D21;
    animation: 0.9s all ease;
    cursor: pointer;
    border-radius: 10px;
    &:hover,
    &:focus {
        background-color: #f28000;
    }
`;

export const DivInpt = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DivInpts = styled.div`
    display: flex;
    width:100%;
    padding:10px
`;