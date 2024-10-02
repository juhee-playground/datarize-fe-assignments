import { useEffect, useState } from 'react';

import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { getCustomerPurchaseDetails, getCustomers } from '@/api/customers';
import Button from '@/components/common/Button';
import WidgetCard from '@/components/common/Card/WidgetCard';
import TextField from '@/components/common/Input/TextField';
import ModalDetails from '@/components/dashboard/widgetCustomers/ModalDetails';
import OrderList from '@/components/dashboard/widgetCustomers/OrderList';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';

import { Actions, ErrorWrapper, ErrorText } from './Index.styles';

const WidgetCustomersContainer = () => {
  const [customers, setCustomers] = useState<ICustomers[]>([]);
  const [details, setDetails] = useState<ICustomerPurchaseDetails[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [filteredCustomers, setFilteredCustomers] = useState<ICustomers[]>([]);
  const [isAsc, setIsAsc] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  const handleOnClick = (id: number) => {
    setIsOpen(true);
    fetchCustomerDetails(id);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
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
      {errorMessage ? (
        <ErrorWrapper>
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorWrapper>
      ) : (
        <OrderList loading={isLoading} items={filteredCustomers} clickRow={handleOnClick} />
      )}
      {isOpen && <ModalDetails isLoading={isLoading} items={details} onClose={() => setIsOpen(false)} />}
    </WidgetCard>
  );
};

export default WidgetCustomersContainer;
