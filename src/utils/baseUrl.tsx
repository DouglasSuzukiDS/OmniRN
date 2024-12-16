import axios from "axios";

export const baseUrl = axios.create({
   baseURL: 'http://192.168.56.1:3001'
})