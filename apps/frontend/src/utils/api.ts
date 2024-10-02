import useAlertStore from '@/store/useAlertStore';

const SERVER_ADDRESS = 'http://localhost:4000/api';
const ALERT_DURATION = 2000;

function handleError<T>(serverError: IErrorResponseData<T>) {
  if (serverError?.error) {
    const openAlert = useAlertStore.getState().openAlert;
    openAlert('error', serverError.error, ALERT_DURATION);
  }
}

async function fetchAPI<T>(endpoint: string, options: RequestInit = {}, params?: TFetchParams): Promise<T> {
  let url = `${SERVER_ADDRESS}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  if (params) {
    const queryParams = new URLSearchParams(
      Object.entries(params).reduce(
        (acc, [key, value]) => {
          if (value !== undefined) {
            acc[key] = String(value);
          }
          return acc;
        },
        {} as Record<string, string>,
      ),
    ).toString();
    url += `?${queryParams}`;
  }

  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorData: IErrorResponseData<T> = await response.json();

      if (errorData.error) {
        handleError(errorData);
        const error = new Error(errorData.error || 'An unknown error occurred') as Error & {
          errorData?: IErrorResponseData<T>;
        };
        error.errorData = errorData;
        throw error;
      } else {
        // errorData.error가 없으면 예외를 던짐
        throw new Error(errorData.message || 'An unknown error occurred');
      }
    }
    return response.json() as Promise<T>;
  } catch (error) {
    const openAlert = useAlertStore.getState().openAlert;

    if ((error as Error).message.includes('NetworkError')) {
      openAlert('error', 'Network error, please check your connection', ALERT_DURATION);
    } else if ((error as Error).message.includes('500')) {
      openAlert('error', 'Internal Server Error', ALERT_DURATION);
    } else {
      openAlert('error', (error as Error).message || 'Fetch failed', ALERT_DURATION);
    }

    throw error;
  }
}

export default fetchAPI;
