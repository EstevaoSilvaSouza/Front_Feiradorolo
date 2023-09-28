import styled from "styled-components";

export const OuterDiv = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center; /* Centralize a DivMenuFly horizontalmente */
    align-items: center; /* Centralize a DivMenuFly verticalmente */
 
`;

export const DivMenuFly = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    justify-content: flex-start; /* Alinhe os itens à esquerda */
    align-items: center;
    width: 100%;
    border-radius:10px; /* Use 100% para preencher a largura do contêiner pai */
    overflow-x: auto; /* Ative o scroll horizontal quando necessário */
`;

export const CardDestaque = styled.div`
width: auto;
height: auto;
cursor: pointer;
margin: 10px;
background-color: #fff;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
border:1px solid #35343426;
border-radius: 10px;
padding:5px;

/* Efeito de sombreamento ao passar o mouse */
transition: box-shadow 0.3s ease; /* Adiciona uma transição suave */

/* Define a sombra inicial como zero (sem sombra) */
box-shadow: 0px 0px 0px transparent;

/* Quando o mouse passa por cima, aplica a sombra */
&:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Adapte o valor de sombra conforme necessário */
}
`;

export const ImgCardTop = styled.img`
    width:100%;
    height:200px;
    border-radius:10px;
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 25px;
  color: #333; /* Cor do texto */
`;
