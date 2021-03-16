import { apiRequest } from "./Api"
import { log } from "util"
interface ImgObj{
  src:string
}

interface ProductInput{
  name:string,
  regular_price: string,
  images: ImgObj[]
}
interface ProductResponse {
  data: ProductInput[]
}

export const add = async (data: ProductInput) =>
  apiRequest<ProductInput, ProductResponse>(
    'post',
    'products',
    data,
  );