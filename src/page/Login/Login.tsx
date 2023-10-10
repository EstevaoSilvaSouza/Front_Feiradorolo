import React  from "react";
import {AuthContext} from '../../context/Auth.context';
import { Box, BoxLogin, ImgLogo, InputLogin, BtnLogin, DivInpt, DivInpts } from "./Login.styled";
import LogoLogin from '../../logoLogin.gif'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface ILogin {
    Email?:string ;
    Password?:string ;
}

const Login = () => {
    const [user,setUser] = React.useState<ILogin | undefined>();
    const {loginAuth} = React.useContext(AuthContext);
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate();
    const submit = async () => {
        await loginAuth(user!).then((e) => {
           if(e?.token){
            toast.success("Logado com sucesso", {
                position: toast.POSITION.TOP_CENTER,
                autoClose:2000,
              });
            navigate("/meus-anuncios")
           }})}

    const register = () => {
        navigate('/nova-conta')
    }

    return (
        <Box>
            <h1 style={{marginTop:'10px'}}>Acesse a sua conta</h1>
            <ImgLogo src={LogoLogin}/>
            <BoxLogin>
              
                <DivInpt>
                    <label htmlFor="Email">Email</label>
                    <InputLogin id="Email" name='Email' type="email" required placeholder="Email de acesso" onChange={handleInput}/>
                </DivInpt>
                <DivInpt>
                    <label htmlFor="Password">Password</label>
                    <InputLogin id='Password' name='Password' type="password" required placeholder="Senha de acesso" onChange={handleInput}/>
                </DivInpt>
                <DivInpts>
                    <BtnLogin type="button" onClick={submit}>Acessar</BtnLogin>
                    <BtnLogin type="button" onClick={register}>Registrar</BtnLogin>    
                </DivInpts>
                
            </BoxLogin>
        </Box>
    )
}

export default Login;