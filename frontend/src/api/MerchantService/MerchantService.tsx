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
  description: string;
  code: string;
}

const getMerchants = (): ApiResponse<MerchantType[]> => {
  return useApi<MerchantType[]>('/merchants', { method: 'GET' });
};

const getMerchantsById = (id: number): ApiResponse<MerchantType> => {
  return useApi<MerchantType>(`/merchants/${id}`, { method: 'GET' });
};

const createMerchant = (merchantData: MerchantType): ApiResponse<MerchantType> => {
  return useApi<MerchantType>('/merchants', {
    method: 'POST',
    data: merchantData,
  });
};

export const MerchantService = {
  getMerchants,
  getMerchantsById,
  createMerchant,
};
