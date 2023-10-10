import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../context/Api";
import { AuthContext } from "../../context/Auth.context";
import  axios from "axios";
const Cadastro = () => {

    const [payload,setPayload] = useState({});
    const navigate = useNavigate();
    const {Token} = useContext(AuthContext);

    const submit = async () => {
        await Api.post('/user/register',payload,{headers:{Authorization:`Bearer ${Token}`}, 
        
        })
        .then((e) => {
            console.log(e);
        }).catch((error):any => {
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
        <div>
            <div>
                <input onChange={handleInput} type="text" name='Name' placeholder="Nome completo"/>
                <input onChange={handleInput} type="numeric" name='Phone' placeholder="Telefone"/>
            </div>
            <div>
                <input onChange={handleInput} type="text" name='Email' placeholder="Email"/>
                <input onChange={handleInput} type="password" name='Password' placeholder="Senha"/>
            </div>
            <div>
                <input onChange={handleInput}  type="text" name='City' placeholder="Cidade"/>
                <input onChange={handleInput} type="text" name='Uf' placeholder="UF"/>
            </div>

            <div>
                <button onClick={submit}>Criar conta</button>
                <button onClick={() => backPage('/')}>Retorna pagina inicial</button>

            </div>
        </div>
    )
}

export default Cadastro;