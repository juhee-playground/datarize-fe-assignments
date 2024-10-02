import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import { getPurchaseData } from '@/api/purchase';
import WidgetCard from '@/components/common/Card/WidgetCard';

import BarChart from './BarChart';
import { DateRangePicker } from './DatePicker';
import { ErrorText, ErrorWrapper } from '../widgetCustomers/Index.styles';

const today = dayjs();
const oneMonthAgo = today.subtract(1, 'month');

const WidgetPurchaseContainer = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [purchaseData, setPurchaseData] = useState<IPurchaseData[]>([]);
  const [dateRange, setDateRange] = useState({
    start: oneMonthAgo.toDate(),
    end: today.toDate(),
  });

  const fetchPurchaseData = async (from: Date, to: Date) => {
    try {
      setIsLoading(true);
      const response = await getPurchaseData({ from, to });
      setPurchaseData(response);
    } catch (e) {
      setErrorMessage((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDatePicker = (startDate: Date, endDate: Date) => {
    setDateRange({ start: startDate, end: endDate });
    fetchPurchaseData(startDate, endDate);
  };

  useEffect(() => {
    fetchPurchaseData(dateRange.start, dateRange.end);
  }, [dateRange]);

  return (
    <WidgetCard>
      <DateRangePicker from={dateRange.start} to={dateRange.end} onChange={handleDatePicker} />

      {errorMessage ? (
        <ErrorWrapper>
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorWrapper>
      ) : (
        <BarChart loading={isLoading} data={purchaseData} />
      )}
    </WidgetCard>
  );
};

export default WidgetPurchaseContainer;
