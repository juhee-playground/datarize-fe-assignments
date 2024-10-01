import fetchAPI from '@/utils/api';

const API_URL = '/customers';

interface IGetCustomersParams {
  sort?: string;
  name?: string;
}

export const getCustomers = ({ sort, name }: IGetCustomersParams): Promise<ICustomers[]> => {
  const params = new URLSearchParams();

  if (sort) {
    params.append('sortBy', sort);
  }

  if (name !== undefined) {
    params.append('name', name);
  }

  return fetchAPI<ICustomers[]>(`${API_URL}?${params.toString()}`);
};

export const getCustomerPurchaseDetails = (id: number): Promise<ICustomerPurchaseDetails[]> => {
  return fetchAPI<ICustomerPurchaseDetails[]>(`${API_URL}/${id}/purchases`);
};
