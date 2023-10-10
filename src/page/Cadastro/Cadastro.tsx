import { useContext,  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../context/Api";
import { AuthContext } from "../../context/Auth.context";
import { BackButton, DivMain, ErrorMessage, FormButton, FormContainer, FormInput } from "./Cadastro.styled";
const Cadastro = () => {

    const [payload,setPayload] = useState({});
    const navigate = useNavigate();
    const {Token} = useContext(AuthContext);
    const [error, setError] = useState<any>();

    const submit = async () => {
        await Api.post('/user/register',payload,{headers:{Authorization:`Bearer ${Token}`}, 
        })
        .then((e) => {
            setError('Conta cadastrada com sucesso.')
            setTimeout(() => {
                navigate('/login')
            },1000)
        }).catch((error):any => {
            setError("Ocorreu um erro durante o registro.");
            setTimeout(() => {
              navigate('/nova-conta',{replace:true,preventScrollReset:true})
          },500)
            return;
        })
    }

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPayload({...payload, [e.target.name]:e.target.value})
        console.log(payload);
    }
    const backPage = (page:string) => {
        navigate(page);
    }

    return (
        <DivMain>
        <FormContainer>
          <div>
            <FormInput
              onChange={handleInput}
              type="text"
              name="Name"
              placeholder="Nome completo"
            />
            <FormInput
              onChange={handleInput}
              type="numeric"
              name="Phone"
              placeholder="Telefone"
            />
          </div>
          <div>
            <FormInput
              onChange={handleInput}
              type="text"
              name="Email"
              placeholder="Email"
            />
            <FormInput
              onChange={handleInput}
              type="password"
              name="Password"
              placeholder="Senha"
            />
          </div>
          <div>
            <FormInput
              onChange={handleInput}
              type="text"
              name="City"
              placeholder="Cidade"
            />
            <FormInput
              onChange={handleInput}
              type="text"
              name="Uf"
              placeholder="UF"
            />
          </div>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <div>
            <FormButton onClick={submit}>Criar conta</FormButton>
            <BackButton onClick={() => backPage("/")}>
              Retornar à página inicial
            </BackButton>
          </div>
        </FormContainer>
      </DivMain>
    );
}

export default Cadastro;