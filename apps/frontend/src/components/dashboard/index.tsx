import { useEffect, useState } from 'react';

import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { getCustomers } from '@/api/customer';
import WidgetCard from '@/components/common/Card/WidgetCard';
import TextField from '@/components/common/Input/TextField';
import Button from '@/components/common/Button';

import OrderList from './OrderList';
import { Actions, ErrorWrapper, ErrorText } from './Index.styles';

export default function Dashboard() {
  const [customers, setCustomers] = useState<ICustomers[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAsc, setIsAsc] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await getCustomers({});

      setCustomers(response);
    } catch (e) {
      setErrorMessage((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSort = () => {
    setIsAsc(!isAsc);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          width: '100%',
          whiteSpace: 'pre-line',
        }}
      >
        <WidgetCard>
          <Actions>
            <TextField placeholder='이름 검색' isIcon icon={<SearchOutlined />} iconPosition='preffix' />
            <Button
              variant='outlined'
              color='black'
              aria-label={`정렬순서: ${isAsc ? '오름차순' : '내림차순'}`}
              aria-live='assertive'
              onClick={toggleSort}
            >
              {isAsc ? '오름차순 ▲' : '내림차순 ▼'}
            </Button>
          </Actions>
          {errorMessage !== null ? (
            <ErrorWrapper>
              <ErrorText>{errorMessage}</ErrorText>
            </ErrorWrapper>
          ) : (
            <OrderList loading={isLoading} items={customers} />
          )}
        </WidgetCard>
      </div>
    </>
  );
}
