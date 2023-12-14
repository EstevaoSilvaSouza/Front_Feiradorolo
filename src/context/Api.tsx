import axios from "axios";

export const Api = axios.create({
    baseURL:"https://apifeira-do-rolo.onrender.com/"
   // baseURL:"http://10.10.10.50:8081/"
})