import useApi, { ApiResponse } from '../useApi/useApi';

export interface MerchantType {
  id: number;
  name: string;
  type: number;
  discounts: Discount[];
  image: string;
}

export interface Discount {
  id: number;
  title: string;
  code: string;
  description: string;
  merchant_id: number;
}

const getMerchants = (): ApiResponse<MerchantType[]> => {
  return useApi<MerchantType[]>('/merchants', { method: 'GET' });
};

const getMerchantsById = (id: number): ApiResponse<MerchantType> => {
  return useApi<MerchantType>(`/merchants/${id}`, { method: 'GET', withCredentials: true });
};

const createMerchant = (merchantData: MerchantType): ApiResponse<MerchantType> => {
  return useApi<MerchantType>('/merchants', {
    method: 'POST',
    data: merchantData,
  });
};

// got some rule of hook error when trying to use this :[
const updateMerchant = (id: number, merchantData: MerchantType): ApiResponse<MerchantType> => {
  return useApi<MerchantType>(`/merchants/${id}`, { method: 'PUT', data: merchantData, withCredentials: true });
};

export const MerchantService = {
  getMerchants,
  getMerchantsById,
  createMerchant,
  updateMerchant,
};
