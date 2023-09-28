import  { useState, useEffect } from "react";
import CardBtns from "../../components/card/cardBtns";
import {  DivMenuFly, SectionTitle } from "./index.styled";
import imageBaner from '../../banner.png';
import ListenItens from "../../components/listitens/listitens";
import { DivImage, ImageBan } from "../../style-app";
import "react-multi-carousel/lib/styles.css";
import { Api } from "../../context/Api";
import CarouselIndex from "./Carousel";
import Loading from "./LoadPage";

interface Top10Itens {
  Automoveis: any[];
  TecnologiaeInformatica: any[];
}

const Index = () => {
  const Card: { id: number; img: string; title: string }[] = [
    {
      id: 1,
      img: imageBaner,
      title: "Tecnologia e TV",
    },
    {
      id: 2,
      img: imageBaner,
      title: "Tecnologia e TV",
    },
    {
      id: 3,
      img: imageBaner,
      title: "Tecnologia e TV",
    },
    {
      id: 4,
      img: imageBaner,
      title: "Tecnologia e TV",
    },
    {
      id: 5,
      img: imageBaner,
      title: "Tecnologia e TV",
    },
    {
      id: 6,
      img: imageBaner,
      title: "Tecnologia e TV",
    },
    {
      id: 7,
      img: imageBaner,
      title: "Tecnologia e TV",
    },
    {
      id: 8,
      img: imageBaner,
      title: "Tecnologia e TV",
    },
    // ... Outros itens do cartão
  ];

  const [data, setData] = useState<Top10Itens>();
  const [isLoadingData, setIsLoadingData] = useState(true); 

  const LoadItens = async () => {
    try {
      const { data } = await Api.get('poster/top10');
      setData(data?.list);
    } catch (error) {
      console.error("Erro ao carregar os dados", error);
    } finally {
      setIsLoadingData(false); // Independentemente de sucesso ou erro, definimos isLoadingData como false
    }
  };

  useEffect(() => {
    LoadItens();
  }, []);


  return (
    <div>
      {isLoadingData ? ( // Exibe a barra de carregamento enquanto os dados estão sendo carregados
        <Loading isLoading={isLoadingData}  /> 
      ) : (
        <>
          <DivImage>
            <ImageBan src={imageBaner} onClick={() => alert("clicado")} />
          </DivImage>
          <DivMenuFly>
            {Card.map((e) => (
              <CardBtns img={e.img} title={e.title} key={e.id} id={e.id} />
            ))}
          </DivMenuFly>
          <SectionTitle>Mais recentes Automóveis</SectionTitle>
          <CarouselIndex data={data?.Automoveis} />
          <SectionTitle>Mais recentes Tecnologia e Informática</SectionTitle>
          <CarouselIndex data={data?.TecnologiaeInformatica} />
          <ListenItens Url={`poster/list?take=0&limit=15`} TitleMenu={'Mais recentes na Feira do Rolo'} page={'view'} />

        </>
      )}
    </div>
  );
};

export default Index;




