import { apiRequest } from "./Api"

export interface ProductType{
  id:number,
  regular_price:string,
  name:string,
  images:string,
}

export interface ProductResponse {
  id:number,
  regular_price:string,
  name:string,
  images:[{ src: string }],
  categories:[{name:string}]
}
interface ImgObj{
  src:string
}

interface ProductInput{
  name:string,
  regular_price: string,
  images: ImgObj[]
}
interface ProductId{
  id: number
}
interface ImgObj{
  src:string
}

interface ProductInput{
  name:string,
  regular_price: string,
  images: ImgObj[]
}
interface ProductResponses {
  data: ProductInput[]
}

export const add = async (data: ProductInput) =>
  apiRequest<ProductInput, ProductResponses>(
    'post',
    'products',
    data,
  );
export const deleteProduct = async (id: number) =>
  apiRequest<ProductId>(
    'delete',
    'products/'+id,
  );

export const update = async (id:number, data:ProductInput) =>
  apiRequest<ProductInput>(
    'put',
    'products/'+id,
    data
  );
export const getProducts = async ()=>apiRequest<undefined,ProductResponse[]>("get","products")
export const getProduct = async (id:number)=>apiRequest<undefined,ProductResponse>("get","products/"+id)