import React from "react";
import { ILogin } from "../page/Login/Login";

export interface ILoginResponse {
    Message:string,
    Date:string,
    token:string
}

interface IContext {
    Auth:boolean | null;
    Token:string | null;
    loginAuth:(payload:ILogin) => Promise<ILoginResponse | null>;
    logout:() => void ;
}

export const AuthContext = React.createContext<IContext>(null!);