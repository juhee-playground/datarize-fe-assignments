import fetchAPI from '@/utils/api';

const API_URL = '/purchase-frequency';

interface IGetPurchaseParams {
  from?: Date;
  to?: Date;
}

export const getPurchaseData = ({ from, to }: IGetPurchaseParams): Promise<any> => {
  const params = new URLSearchParams();

  if (from) {
    params.append('from', from.toISOString());
  }

  if (to) {
    params.append('to', to.toISOString());
  }

  return fetchAPI<any>(`${API_URL}?${params.toString()}`);
};
