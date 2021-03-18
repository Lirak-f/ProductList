import Axios from 'axios';
const axios = Axios.create({
  auth:{
    username:"ck_aca9a6a04fcda6f51674a745e171f66fde1c4a1e",
    password:"cs_459f997fe88e7d29a5b117902b9cd94b20009de8"
  }
})
export async function apiRequest<D = {}, R = unknown>(
  method: 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch',
  path: string,
  input?: D,
  options?: any
) {
  const res = await axios.request<R>({
    url: `${process.env.REACT_APP_API_URL}/${path}`,
    method: method,
    data: input,
    headers: options,
  });
  return res.data;
}

export * from './User';
export * from './Products';



