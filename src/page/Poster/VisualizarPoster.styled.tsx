import styled, { keyframes } from 'styled-components';

// Animação de rotação
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ProductContainer = styled.div`
  max-width: 1200px; /* Aumente o tamanho máximo para se assemelhar à página OLX */
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap; /* Permita que os elementos quebrem a linha */
  gap: 20px;
`;

export const ProductInfo = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  max-height:100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
   /* Reduza a largura máxima para acomodar a descrição */
  margin-bottom: 20px; /* Adicione espaço entre os produtos */
`;

export const ProductImage = styled.div`
  display: 1;

  cursor: pointer;
  width:560px;
  max-width: 100%; /* Aproveite ao máximo o espaço disponível */
  transition: transform 0.3s ease;
  //border:1px solid #000000;
  padding:10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius:5px;
  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #25d366;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width:auto;
  cursor: pointer;
  margin-top: 100px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #128c7e;
  }
`;

export const WhatsAppIcon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;

  img {
    max-width: 100%;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const LoadingAnimation = styled.div`
  border: 6px solid transparent;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

export const Description = styled.p`
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  text-align:center;
  font-weight:700;
  margin-top: 10px;
`;

export const ImgCard = styled.img`
  width:560px;
  height:200px;
`;
export const ImgModalOnly = styled.img`
  width:auto;
  height:auto;
`;

export const Price = styled.p`
  background-color: #FFBF1A;
  color: #fff;
  padding: 10px;
  width:auto;
  font-weight:bold;
  color:#fff;
  border-radius: 8px;
  margin-top: 10px;
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  flex-direction: row; /* Agora a galeria será exibida em coluna */
  align-items: center; /* Centraliza as miniaturas horizontalmente */
  gap: 10px;
  margin-top: 10px;
  
`;
export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row; /* As miniaturas e as setas serão exibidas em linha */
  align-items: center;
  justify-content: center;
  gap: 20px; /* Espaço entre as miniaturas e as setas */
  margin-top: 20px;
`;

export const ImageThumbnailContainer = styled.div`
  cursor: pointer;
  flex: 0 0 auto; /* Não deixe as miniaturas crescerem além de seu tamanho original */
  margin-right: 10px; /* Espaço entre as miniaturas */
  border: 2px solid #f7f7f7;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:last-child {
    margin-right: 0; /* Remova a margem da última miniatura */
  }

  &:hover {
    border-color: #25d366;
  }
`;

export const ImageThumbnail = styled.img`
  max-width: 80px;
  max-height: 80px;
  border-radius: 5px;
  display: block; /* Remova o espaço extra abaixo das miniaturas */
`;

