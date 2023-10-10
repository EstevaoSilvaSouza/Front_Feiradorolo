import { Route, Routes } from 'react-router-dom';
import Container from '../components/layout/container/container';
import Index from '../page/Inicio/Index';
import HeaderTop from '../components/layout/headerTop/headertop';
import AuthPage from '../hook/AuthPage';
import Login from '../page/Login/Login';
import MeusPoster from '../page/Poster/MeusPoster';
import NovoPoster from '../page/Poster/NovoPoster';
import VisualizarPoster from '../page/Poster/VisualizarPoster';
import AutalizarPoster from '../page/Poster/AtualizarPoster';
import Cadastro from '../page/Cadastro/Cadastro';

const RouterMain = () => {
    return (
        <>
            <HeaderTop/>
                <Container>
                    <Routes>
                    <Route path='/' element={<Index/>}/>
                        <Route path='/' element={<AuthPage/>}>
                            <Route path='/meus-anuncios' element={<MeusPoster/>}/>
                            <Route path='/novo-anuncio' element={<NovoPoster/>}/>
                            <Route path='/atualizar-anuncio/:nome/:Id' element={<AutalizarPoster/>}/>
                        </Route>
                        <Route path='/anuncio/:nome/:id' element={<VisualizarPoster/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/nova-conta' element={<Cadastro/>}/>
                        <Route path='*' element={<><h1>PAGINA NÃO ENCONTRADA</h1></>}/>
                    </Routes>
                </Container>
        </>
    )
}

export default RouterMain;