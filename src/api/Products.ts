import { apiRequest } from "./Api"

export interface Product{
  img_url:string,
  description:string;
}
interface ProductResponse {
  data:Product[]
}

export const getProducts = async ()=>apiRequest<any,any>("get","products")