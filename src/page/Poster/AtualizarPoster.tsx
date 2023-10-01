import { ChangeEvent, useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { Api } from "../../context/Api";
import { AuthContext } from "../../context/Auth.context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AutalizarPoster = () => {
    const {nome,Id} = useParams();
    const [img,setImg] = useState<any>();
    const {Token} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleInputFile = (e:ChangeEvent<HTMLInputElement>) =>{
        const Fr = new FileReader();
        try{
            if(e.target.files){
                Fr.addEventListener('load',(e) => {
                    setImg(e.target?.result);
                })
    
                Fr.readAsDataURL(e.target.files[0]); 
            }
        }
        catch(error){
            return
        }
       
    }
    
    const sendImage = async () => {
        try{
            const {data} = await Api.post("image/add",{
                base64:img?.split("data:image/jpeg;base64,")[1], 
                IdPoster:Number(Id)
            },{
                headers:{
                    Authorization:`Bearer ${Token}`
                }
            })

            if(data){
                toast.success("Imagem adicionada com sucesso", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:2000,
                  });
                navigate(`/anuncio/${nome}/${Id}`)
            }
        }
        catch(error){
            toast.warning("Falha ao adicionar imagem", {
                position: toast.POSITION.TOP_CENTER,
                autoClose:2000,
              });
            console.log(error);
        }
       
    }

    return (
        <>
            <h1>Atualizar poster {Id}</h1>
            

            <input type="file" id='teste' onChange={handleInputFile}/>

            {img && (
                 <img style={{width:'350px', height:'250px'}} src={img}/>
            )}
           

            <button type="button" onClick={sendImage}>Adicionar Imagem</button>
            
        </>
    )
}

export default AutalizarPoster;