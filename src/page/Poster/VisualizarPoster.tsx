import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  ProductContainer,
  ProductInfo,
  ProductImage,
  Button,
  Modal,
  ModalContent,
  CloseButton,
  WhatsAppIcon,
  LoadingContainer,
  LoadingAnimation,
  Description,
  ImageGallery,
  Price,
  ImgCard,
  ImageThumbnail,
  ImageThumbnailContainer,
  GalleryContainer,
  ImgModalOnly, // Novo componente para envolver a galeria e as setas
} from './VisualizarPoster.styled';

import img1 from '../../banner.png';
import { Api } from '../../context/Api';

interface Image {
  Id?: number;
  UrlImage?: string;
}

interface User {
  Id?: number;
  Name?: string;
  Phone?: string;
  Uf?: string;
}

interface Data {
  Id?: number;
  Description?: string;
  Tag?: string;
  Name?: string;
  City?: string;
  PhoneCustom?: string;
  Value?: string;
  Category?: string;
  createdAt?: string;
  Images: Image[];
  User?: User;
}

interface ResponseData {
  Message?: string;
  Data?: Data;
}


const VisualizarProduto = () => {
  const { id } = useParams();
  const [showLargeImage, setShowLargeImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState<ResponseData>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const loadIten = async () => {
    const {data} = await Api.post('poster/findby',{Id:id});

    if(data.Data){
      setData(data);
      setIsLoading(false);
    }
  }

  const sendWhats = (value:string) => {
    window.open(`https://wa.me/${value.split(' ').join('').split('-').join('')}`, '_blank');
  }
  useEffect(() => {
    loadIten()
  }, []);



  const toggleLargeImage = () => {
    setShowLargeImage(!showLargeImage);
  };



  return (
    <>
    <ProductContainer>
      {isLoading ? (
        <LoadingContainer>
          <LoadingAnimation />
        </LoadingContainer>
      ) : (
        <>
          <ProductImage>
            <ImgCard
              src={Data?.Data?.Images[currentImageIndex]?.UrlImage ? Data?.Data?.Images[currentImageIndex]?.UrlImage : img1}
              alt={Data?.Data?.Name}
              onClick={toggleLargeImage}
            />
              <GalleryContainer>
            <ImageGallery>
              {Data?.Data?.Images.map((imageUrl, index) => (
                <ImageThumbnailContainer
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setShowLargeImage(true);
                  }}
                >
                  <ImageThumbnail
                    src={imageUrl.UrlImage}
                    alt={`Imagem ${index + 1}`}
                  />
                </ImageThumbnailContainer>
              ))}
            </ImageGallery>

            {showLargeImage && (
              <Modal onClick={toggleLargeImage}>
                <ModalContent>
                  <CloseButton onClick={toggleLargeImage}>&times;</CloseButton>
                  <ImgModalOnly 
                    src={Data?.Data?.Images[currentImageIndex]?.UrlImage ? Data?.Data?.Images[currentImageIndex]?.UrlImage : img1}
                    alt={Data?.Data?.Name}
                  />
                </ModalContent>
              </Modal>
            )}
          </GalleryContainer>

          </ProductImage>

          <ProductInfo>
            <h1>{Data?.Data?.Name}</h1>
            <h2>{Data?.Data?.City}</h2>
            <h3>{Data?.Data?.User?.Name}</h3>
            <Price>{`Preço: R$ ${Data?.Data?.Value}`}</Price>
            <Button onClick={() => sendWhats(Data?.Data?.PhoneCustom!)}>
              <WhatsAppIcon /> Contatar via WhatsApp
            </Button>
          </ProductInfo>

        </>
      )}
     
    </ProductContainer>
    <Description>{Data?.Data?.Description}</Description>
    </>
  );
};

export default VisualizarProduto;