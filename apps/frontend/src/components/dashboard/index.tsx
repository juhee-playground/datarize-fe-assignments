import { useEffect, useState } from 'react';

import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { getCustomerPurchaseDetails, getCustomers } from '@/api/customers';
import WidgetCard from '@/components/common/Card/WidgetCard';
import TextField from '@/components/common/Input/TextField';
import Button from '@/components/common/Button';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';

import OrderList from './OrderList';
import { Actions, ErrorWrapper, ErrorText } from './Index.styles';
import ModalDetails from './ModalDetails';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [customers, setCustomers] = useState<ICustomers[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<ICustomers[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAsc, setIsAsc] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [details, setDetails] = useState<ICustomerPurchaseDetails[]>([]);

  useLockBodyScroll(isOpen);

  const fetchCustomers = async () => {
    try {
      setIsLoading(true);

      const response = await getCustomers({});

      setCustomers(response);
      setFilteredCustomers(response);
    } catch (e) {
      setErrorMessage((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredData = customers.filter(customer => customer.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredCustomers(filteredData);
  };

  const toggleSort = () => {
    const sortedData = [...filteredCustomers].sort((a, b) => {
      const compareValue = isAsc ? a.totalAmount - b.totalAmount : b.totalAmount - a.totalAmount;
      return compareValue;
    });
    setIsAsc(!isAsc);
    setFilteredCustomers(sortedData);
  };

  const handleOnClick = (id: number) => {
    setIsOpen(true);
    fetchCustomerDetails(id);
  };

  const fetchCustomerDetails = async (id: number) => {
    try {
      setIsLoading(true);

      const response = await getCustomerPurchaseDetails(id);
      setDetails(response);
    } catch (e) {
      setErrorMessage((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
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
            <TextField
              placeholder='이름 검색'
              isIcon
              icon={<SearchOutlined />}
              iconPosition='preffix'
              value={searchQuery}
              onChange={handleSearch}
              onEnterKeyPress={handleSearch}
            />
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
            <OrderList loading={isLoading} items={filteredCustomers} clickRow={handleOnClick} />
          )}
        </WidgetCard>
        {isOpen && (
          <ModalDetails
            isLoading={isLoading}
            info={details}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </div>
    </>
  );
}
