import axios from "axios";

export const Api = axios.create({
    baseURL:"https://apifeira-do-rolo.onrender.com/"
})