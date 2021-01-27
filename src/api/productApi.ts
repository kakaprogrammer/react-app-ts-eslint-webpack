import { AxiosInstance } from 'axios';
import axiosClient from './axiosClient';

const productApi = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAll: (params: unknown): Promise<any> => {
    const url = '/products';
    return axiosClient.get(url, {params});
  },
  get: (id: string): Promise<AxiosInstance> => {
    const url = `/products/${id}`;
    return axiosClient.get(url)
  }
}

export default productApi;