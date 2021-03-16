import { apiRequest } from "./Api"

interface ProductId{
  id: number
}

export const deleteProduct = async (id: number) =>
  apiRequest<ProductId>(
    'delete',
    'products/'+id,
  );