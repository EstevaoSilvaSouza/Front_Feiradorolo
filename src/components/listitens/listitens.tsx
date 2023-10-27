import { Box, ButtonLoad, CardBtns, NewTag } from "./listitens.styled";
import imagebanner from '../../banner.png'
import React from "react";
import { Api } from "../../context/Api";
import LazyImage from "../image/lazyimage";
import Loading from "../../page/Inicio/LoadPage";
import { useNavigate} from 'react-router-dom'
import { format } from "date-fns";
import { SectionTitle } from "../../page/Inicio/index.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

interface ItensLoad {
    Count: number,
    CountPage: number,
    Data: any,
}

interface ListItens {
    Url?:string | null;
    TitleMenu?:string | null;
    Token?:string | null;
    page?:string | null;
}

const ListenItens = ({Url, TitleMenu,Token,page}: ListItens) => {
    const [take, setTake] = React.useState<number>(0);
    const [load, setLoad] = React.useState(true);
    const [Data, setData] = React.useState<ItensLoad>({
        Count: 0,
        CountPage: 0,
        Data: [],
    });
    const btnRef = React.useRef<HTMLButtonElement>(null!);
    const navigate = useNavigate();

    const redirectViewPage = (id:string,nome:string,desc:string) => {
        navigate(`/anuncio/${nome.split(' ').join('-')}_${desc.split(' ').join('-')} /${id}`);
    }

    const redirectUpdatePage = (id:string,nome:string,desc:string) => {
        navigate(`/atualizar-anuncio/${nome.split(' ').join('-')}_${desc.split(' ').join('-')} /${id}`);
    }

    const abortController2 = new AbortController();
    const signal2 = abortController2.signal;
    React.useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const loadItens = async () => {
            try {
              const { data } = await Api.get(Url!, {
                headers: {
                  Authorization: Token ? `Bearer ${Token}` : null,
                },
                signal,
              });
          
              if (data.Data) {
                setLoad(!load);
                setData(prev => ({
                    ...prev,
                    Data: [...prev.Data, ...data.Data], // Adicione os elementos diretamente
                }));
                setTake(take + 15);
              }
            } catch (error:any) {
              return null;
            }
          };

        loadItens();
        return () => {
            abortController.abort();
        }
    },[take])

    
    return (
        <>
                  <SectionTitle>{TitleMenu}</SectionTitle>
       <Box>
        {load ?
            <Loading isLoading={load}/>
        :
           <>
            {Data?.Data?.map((e:any) => (
                        <CardBtns key={e.Id} onClick={() => page === 'view' ? redirectViewPage(e.Id,e.Name,e.Description) : redirectUpdatePage(e.Id,e.Name,e.Description)}>
                        <LazyImage src={e?.Images?.length >= 1 ? e?.Images[0]?.UrlImage : imagebanner} alt="pl"/>
                        <h5>{e?.Name}</h5>
                        <h5>R$ {e?.Value}</h5>
                        <h5>{e?.City} - {format(new Date(e?.createdAt), "dd/MM/yyyy HH:mm")}</h5>
                        <h5>
                            <FontAwesomeIcon icon={faEye} /> {e?.Count}
                        </h5>
                        { page === "view" && (<NewTag>Novo</NewTag>)}
                        </CardBtns>
                    ))}
        </>
        }
       
       
        
       </Box>
       <Box>
       <ButtonLoad  type="button" ref={btnRef} onClick={() => setTake(take + 15)}>Carregar mais</ButtonLoad>
       </Box>
       </>
    )
}

export default ListenItens;