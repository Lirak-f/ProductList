import { apiRequest } from "./Api"


interface ImgObj{
  src:string
}

interface ProductInput{
  name:string,
  regular_price: string,
  images: ImgObj[]
}

export const update = async (id:number, data:ProductInput) =>
  apiRequest<ProductInput>(
    'put',
    'products/'+id,
    data
  );
