import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth.context";
import { Box, Container, Title, Form, InputLogin, BtnLogin, BtnRegistro } from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface ILogin {
  Email?: string;
  Password?: string;
}

const Login = () => {
  const [user, setUser] = useState<ILogin | undefined>();
  const { loginAuth } = useContext(AuthContext);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const submit = async () => {
    await loginAuth(user!).then((e) => {
      if (e?.token) {
        toast.success("Logado com sucesso", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        navigate("/meus-anuncios");
      }
    });
  };

  const register = () => {
    navigate("/nova-conta");
  };

  return (
    <Box>
      <Container>
        <Title>Acesse a sua conta</Title>
        <Form>
          <div>
            <label htmlFor="Email">Email</label>
            <InputLogin
              id="Email"
              name="Email"
              type="email"
              required
              placeholder="Email de acesso"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <InputLogin
              id="Password"
              name="Password"
              type="password"
              required
              placeholder="Senha de acesso"
              onChange={handleInput}
            />
          </div>
          <div>
            <BtnLogin type="button" onClick={submit}>
              Acessar
            </BtnLogin>
            <BtnRegistro type="button" onClick={register}>
              Registrar
            </BtnRegistro>
          </div>
        </Form>
      </Container>
    </Box>
  );
};

export default Login;