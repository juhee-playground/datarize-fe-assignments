import fetchAPI from '@/utils/api';

const API_URL = '/customers';

interface IGetCustomersParams {
  sort?: string;
  name?: string;
}

export const getCustomers = ({ sort, name }: IGetCustomersParams): Promise<ICustomers[]> => {
  const params: Record<string, string | undefined> = {};

  if (sort) {
    params.sortBy = sort;
  }

  if (name) {
    params.name = name;
  }

  return fetchAPI<ICustomers[]>(`${API_URL}`, {}, params);
};

export const getCustomerPurchaseDetails = (id: number): Promise<ICustomerPurchaseDetails[]> => {
  return fetchAPI<ICustomerPurchaseDetails[]>(`${API_URL}/${id}/purchases`);
};
