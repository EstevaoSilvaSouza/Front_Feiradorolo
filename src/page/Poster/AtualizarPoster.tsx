import React, { ChangeEvent, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../context/Api";
import { AuthContext } from "../../context/Auth.context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Container,
  FormContainer,
  FormGroup,
  SubmitButton,
  LeftColumn,
  RightColumn,
  FileInput,
  FileInputLabel,
  ImagePreview,
  ImagePreviewWrapper,
} from "./AtualziarPoster.styled";
import { IframeHTMLAttributes } from "react";

interface PosterData {
    Message: string | null;
    Data: {
      Id: number | null;
      Description: string | null;
      Tag: string | null;
      Name: string | null;
      City: string | null;
      PhoneCustom: string | null;
      Value: string | null;
      Category: string | null;
      createdAt: string | null;
      IdUser: number | null;
      Images: {
        Id: number | null;
        UrlImage: string | null;
      }[] | null;
      User: {
        Id: number | null;
        Name: string | null;
        Phone: string | null;
        Uf: string | null;
      } | null;
    } | null;
  }

const AtualizarPoster = () => {
  const { nome, Id } = useParams();
  const [img, setImg] = useState<any>(null);
  const [Data,setData] = useState<PosterData>();
  const { Token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    const Fr = new FileReader();
    try {
      if (e.target.files) {
        Fr.addEventListener("load", (e) => {
          setImg(e.target?.result);
        });

        Fr.readAsDataURL(e.target.files[0]);
      }
    } catch (error) {
      return;
    }
  };

  const sendImage = async () => {
    if(img === null || img.lenght <=0){
        toast.info("Não a imagem para enviar", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          return ;
    }
    try {
      const { data } = await Api.post(
        "image/add",
        {
          base64: img?.split("data:image/jpeg;base64,")[1],
          IdPoster: Number(Id),
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      if (data) {
        toast.success("Imagem adicionada com sucesso", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        navigate(`/anuncio/${nome}/${Id}`);
      }
    } catch (error) {
      toast.warning("Falha ao adicionar imagem", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log(error);
    }
  };

  const loadData = async () => {
    const {data} = await Api.post('poster/findby',{Id});

    if(data.Data){
        setData(data)
    }
  }

  React.useEffect(() => {
        loadData();
  },[])

  return (
    <>
     <iframe width="560" height="315" src="//mixdrop.co/e/n0d6m7k7bjvqd1" frameBorder="0" allowFullScreen></iframe>
      <h1 style={{textAlign:'center', fontSize:'20px'}}>Atualizar Anuncio {Data?.Data?.Name}</h1>
      <Container>

     
        <FormContainer>
          <LeftColumn>
          <FormGroup>
            <label htmlFor="Image">Imagens do Anuncio [ {Data?.Data?.Images?.length} ] - Maximo [ 5 ]</label>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <ImagePreviewWrapper>
                {img ? (
                    <ImagePreview src={img} alt="Imagem do anúncio" />
                ) : (
                    <div className="image-placeholder">Imagem</div>
                )}
                </ImagePreviewWrapper>
                <FileInput type="file" id="Image" onChange={handleInputFile} />
                <FileInputLabel $inputColor="#007bff" htmlFor="Image">Adicionar Imagem</FileInputLabel>
                <FileInputLabel onClick={sendImage} $inputColor="#43e975">Enviar Imagem</FileInputLabel>
            </div>
            </FormGroup>
          </LeftColumn>
          <RightColumn>
            <FormGroup>
              <label htmlFor="Name">Nome do anuncio</label>
              <input
                name="Name"
                type="text"
                disabled
                placeholder="Nome do produto"
                value={Data?.Data?.Name ? Data?.Data?.Name : ''}
                // onChange={}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Description">Descrição</label>
              <input
                name="Description"
                type="text"
                disabled
                placeholder="Descrição do produto"
                value={Data?.Data?.Description ? Data?.Data?.Description : ''}
                // onChange={}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Tag">Tag</label>
              <input
                name="Tag"
                disabled
                type="text"
                value={Data?.Data?.Tag ? Data?.Data?.Tag : ''}
                placeholder="Tag do produto separe o , exemplo novocarro,novamoto"
                // onChange={}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="City">Cidade</label>
              <input
                name="City"
                disabled
                type="text"
                value={Data?.Data?.City ? Data?.Data?.City : ''}
                placeholder="Cidade"
                // onChange={}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="PhoneCustom">Telefone</label>
              <input
                // ref={}
                // type="text"
                disabled
                name="PhoneCustom"
                value={Data?.Data?.PhoneCustom ? Data?.Data?.PhoneCustom : ''}
                // mask='(99) 9 9999-9999'
                placeholder="Digite telefone exemplo (+55) 9 1234-1111"
                // maskChar="_"  // Substitua "_" pelo caractere que você deseja usar para preencher
                // value={Data?.PhoneCustom ? Data.PhoneCustom : ''}
                // onChange={}
              />
            </FormGroup>
            <FormGroup>
              <label id="cate" key={"cate"} htmlFor="Category">
                Categoria
              </label>
              <select
                name="Category"
                disabled
                // onChange={}
                defaultValue={"0"}
              >
                <option key={"one"} id="one" value="0" disabled>
                  Selecione a Categoria
                </option>
              </select>
            </FormGroup>
            <SubmitButton type="button">Salvar Anúncio</SubmitButton>
          </RightColumn>
        </FormContainer>
      </Container>
    </>
  );
};

export default AtualizarPoster;