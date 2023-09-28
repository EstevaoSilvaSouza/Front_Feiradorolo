import React from "react";
import { AMessage, BtnAnucio, BtnEntrar, BtnSair, BtnSearch, DivHeader, DivMessage, InputSeachMenu, LinkS, Lista, LogoContainer, LogoText, MenuItem, MenuLauch, MobileMenu } from "./styleheadertop";
import { AuthContext } from "../../../context/Auth.context";
import Menu from '../../../menu.png'
const HeaderTop = () => {
    const {Auth, logout} = React.useContext(AuthContext);
    const [toggle,setToggle] = React.useState(true);

    const LoginRedirect = (name:string) => {
        window.location.href = `/${name}`;
    }

    return (
        <div>
            <DivMessage>
                <a style={{textDecoration:"none"}} href="/"><AMessage>Maior Site de Feira do Rolo do Brasil, compartilhe com amigos e redes sociais</AMessage></a>
            </DivMessage>
            <DivHeader>
                    <Lista>
                    <LogoContainer>
      <LogoText>Feira do Rolo</LogoText>
    </LogoContainer>
                    <MenuItem>
                        <MenuLauch src={Menu} onClick={() => setToggle(!toggle)}/>
                    </MenuItem>
                    {toggle && (
                        <>
                    <MenuItem>
                        <InputSeachMenu name="teste" type="search" placeholder="Buscar 'Apartamento' 'Carro' 'Tv' "/>
                        <BtnSearch type="button">🔍</BtnSearch>
                    </MenuItem>

                    <MenuItem>
                        <LinkS to={'/'}> 🐲 Inicio</LinkS>
                    </MenuItem>
                    <MenuItem>
                        <LinkS to={'/meus-anuncios'}>  Meus Anúncios</LinkS>
                    </MenuItem>
                    <MenuItem>
                        <LinkS to={'/notificao'} >Notificações</LinkS>
                    </MenuItem>
                    <MenuItem>
                    {Auth ? <BtnEntrar>Painel</BtnEntrar> : <BtnEntrar onClick={()=> LoginRedirect('login')}>Entrar</BtnEntrar>}
                    </MenuItem>
                    <MenuItem>
                       <BtnAnucio onClick={()=> LoginRedirect('novo-anuncio')}>Anunciar</BtnAnucio>
                    </MenuItem>
                    <MenuItem>
                    {Auth ? <BtnSair onClick={() => logout()}>Sair</BtnSair> : null}

                    </MenuItem>
                    </>
                    )}
                    </Lista>

                    
                </DivHeader>
        </div>
       
    )
}

export default HeaderTop;