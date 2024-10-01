declare global {
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
}

export {};
