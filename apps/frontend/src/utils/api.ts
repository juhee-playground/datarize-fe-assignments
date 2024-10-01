import useAlertStore from '@/store/useAlertStore';

const SERVER_ADDRESS = 'http://localhost:4000/api';
const ALERT_DURATION = 5000;

const logOnDev = (message: string) => {
  if (import.meta.env.VITE_APP_NODE_ENV === 'dev') {
    console.log(message);
  }
};

function handleError<T>(serverError: IErrorResponseData<T>) {
  if (serverError?.message) {
    const openAlert = useAlertStore.getState().openAlert;
    openAlert('error', serverError.message, ALERT_DURATION);
  }
}

async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${SERVER_ADDRESS}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, fetchOptions);

    logOnDev(`🚀 [API] ${fetchOptions.method?.toUpperCase()} ${url} | Response ${response.status}`);

    if (!response.ok) {
      const errorData: IErrorResponseData<T> = await response.json();
      handleError(errorData);

      throw new Error(errorData.message || 'An unknown error occurred');
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
