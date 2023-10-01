import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/Auth.context";
import { Api } from "../../context/Api";
import {
  Container,
  FormContainer,
  FormGroup,
  SubmitButton,
} from "./NovoPoter.styled";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

interface IPoster {
  Name?: string;
  Description?: string;
  Tag?: string;
  City?: string;
  PhoneCustom?: string;
  Category?: string;
  Value?: string;
}

const NovoPoster = () => {
  const [Data, setData] = useState<IPoster | null>(null);
  const { Token } = useContext(AuthContext);

  const navigate = useNavigate();
  const ListCategory :string[] = ['Carro','Moto','Tecnologia e Informatica', 'Casa e Banho','Celular e Tablet'];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const inputMaskRef = React.useRef(null!);

  const submit = async () => {
    try{
        const { data } = await Api.post("poster/create", Data, {
            headers: { Authorization: `Bearer ${Token}` },
          });
          if (data) {
              toast.success("Anuncio criado com sucesso, adicione uma imagem agora", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose:2000,
                });
                navigate(`/atualizar-anuncio/${data.Name.split(' ').join('-')}_${data.Description.split(' ').join('-')} /${data.Id}`)
          }
          else{
            toast.info("Falha ao criar Anuncio", {
                position: toast.POSITION.TOP_CENTER,
                autoClose:2000,
              });
              navigate('/novo-anuncio')
          }
    }
    catch(error){
        toast.error("Erro sistemico ao criar anuncio", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:2000,
          });
          navigate('/novo-anuncio')
    }
   
  };

  return (
    <Container>
      <h1>Novo Anúncio</h1>
      <FormContainer>
        <FormGroup>
          <label htmlFor="Name">Nome do anuncio</label>
          <input
            name="Name"
            type="text"
            placeholder="Nome do produto"
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="Description">Descrição</label>
          <input
            name="Description"
            type="text"
            placeholder="Descrição do produto"
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="Tag">Tag</label>
          <input
            name="Tag"
            type="text"
            placeholder="Tag do produto separe o , exemplo novocarro,novamoto"
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="City">Cidade</label>
          <input
            name="City"
            type="text"
            placeholder="Cidade"
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
        <label htmlFor="PhoneCustom">Telefone</label>
        <InputMask
        ref={inputMaskRef}
        type="text"
        name='PhoneCustom'
        mask='(99) 9 9999-9999'
        placeholder="Digite telefone exemplo (+55) 9 1234-1111"
        maskChar="_"  // Substitua "_" pelo caractere que você deseja usar para preencher
        value={Data?.PhoneCustom ? Data.PhoneCustom : ''}
        onChange={handleInput}
        />
        </FormGroup>

        <FormGroup>
          <label htmlFor="Value">Valor</label>
          <input
            name="Value"
            type="number"
            placeholder="Valor do produto"
            onChange={handleInput}
          />
        </FormGroup>
        <FormGroup>
        <label id="cate" key={'cate'} htmlFor="Category">Categoria</label>
        <select
            name="Category"
            onChange={handleInput}
            defaultValue={"0"}
        >
            <option key={'one'} id="one" value="0" disabled>Selecione a Categoria</option>
            {ListCategory.map((e) => (
                <option key={e} id={e} value={e}>{e}</option>
            ))}
        </select>
        </FormGroup>
        <SubmitButton type="button" onClick={submit}>
          Criar anúncio
        </SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default NovoPoster;