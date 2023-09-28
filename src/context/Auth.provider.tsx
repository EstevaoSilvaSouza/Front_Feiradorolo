import React, { Children } from "react"
import { ILogin } from "../page/Login/Login";
import { AuthContext, ILoginResponse } from "./Auth.context";
import { Api } from "./Api";

export const AuthProvider = ({children}:{children:JSX.Element | JSX.Element[]}) => {
    const [Auth, setAuth] = React.useState<boolean | null>(null);
    const [Token, setToken] = React.useState<string | null>(null);

    React.useEffect(() => {
        const token = window.localStorage.getItem('XToken-AuthGuard')
        if(token){
            validateAuth(token);
        }
    },[])

    const logout = () => {
        window.localStorage.clear();
        setAuth(false);
        window.location.href = "/login";

    }

    const validateAuth = async (token:string) => {
        try{
            const {data} = await Api.post("user/validate",{Token:token});
            if(data.Token) {
                setAuth(true);
                setToken(data.Token);
                window.localStorage.setItem('XToken-AuthGuard',data.Token);
            }
        }
        catch(error){
            window.localStorage.clear();
            return null
        }
       
    }    

    const loginAuth = async (payload:ILogin):  Promise<ILoginResponse | null> => {
        try{
            const { data} = await Api.post('/user/auth',payload);
            if(data.token){
                setAuth(true);
                setToken(data.token);
                window.localStorage.setItem('XToken-AuthGuard',data.token);
            }
            return data ? data : null;
        }
        catch(error){
            return null;
        }
    };

    return (
        <AuthContext.Provider value={{Auth,Token,loginAuth,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
