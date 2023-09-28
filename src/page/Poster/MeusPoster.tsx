import React from "react"
import ListenItens from "../../components/listitens/listitens"
import { AuthContext } from "../../context/Auth.context"

const MeusPoster = () => {

    const {Token } = React.useContext(AuthContext);
    
    return (
        <div>
            <ListenItens Url={"poster/my-posters?take=0&limit=15"} TitleMenu={'Meus Anuncios'} Token={Token} page={'update'}/>
        </div>
    )
}

export default MeusPoster;