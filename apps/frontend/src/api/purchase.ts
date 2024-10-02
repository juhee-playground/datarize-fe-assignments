import fetchAPI from '@/utils/api';

const API_URL = '/purchase-frequency';

interface IGetPurchaseParams {
  from: Date;
  to: Date;
}

export const getPurchaseData = ({ from, to }: IGetPurchaseParams): Promise<IPurchaseData[]> => {
  const isoFrom = from.toISOString();
  const isoTo = to.toISOString();

  return fetchAPI<IPurchaseData[]>(`${API_URL}`, {}, { from: isoFrom, to: isoTo });
};
