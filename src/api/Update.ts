import { apiRequest } from "./Api"

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

export const update = async (id: number) =>
  apiRequest<ProductInput, ProductResponse>(
    'post',
    'products'+id
  );