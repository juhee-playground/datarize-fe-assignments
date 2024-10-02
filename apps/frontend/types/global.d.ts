declare global {
  type TFetchParams = Record<string, string | number | boolean | undefined>;
  type TAlertType = 'success' | 'error' | 'warning' | 'info';
  type TButtonType = 'button' | 'submit' | 'reset';
  type TButtonVariant = 'text' | 'contained' | 'outlined' | 'fab';

  interface IErrorResponseData<T = unknown> {
    data?: T;
    message?: string;
    status?: string;
  }

  interface IDefaultResponse {
    message: string;
  }

  interface ICustomers {
    id: number;
    name: string;
    count: number;
    totalAmount: number;
  }

  interface ICustomerPurchaseDetails {
    date: string;
    imgSrc: string;
    price: number;
    product: string;
    quantity: number;
  }

  interface IPurchaseData {
    range: string;
    count: number;
    [key: string]: string | number;
  }
}

export {};
