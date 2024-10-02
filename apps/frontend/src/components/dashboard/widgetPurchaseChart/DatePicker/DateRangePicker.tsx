import { useState } from 'react';

import dayjs from 'dayjs';

import { Container, DateInput, Label, Separator, PickerGroup, PickerContainer } from './styles';
import { handleDateChange } from './util';

interface IDateRangePickerProps {
  from: Date | null;
  to: Date | null;
  onChange: (startDate: Date, endDate: Date) => void;
}

const DateRangePicker = ({ from, to, onChange }: IDateRangePickerProps) => {
  const [startDate, setStartDate] = useState<string>(from ? dayjs(from).format('YYYY-MM-DD') : '');
  const [endDate, setEndDate] = useState<string>(to ? dayjs(to).format('YYYY-MM-DD') : '');

  return (
    <Container>
      <PickerGroup>
        <Label>시작날짜</Label>
        <PickerContainer>
          <DateInput
            type='date'
            value={startDate}
            onChange={handleDateChange(setStartDate, onChange, startDate, endDate, true)}
            max={endDate}
          />
        </PickerContainer>
      </PickerGroup>
      <Separator>~</Separator>
      <PickerGroup>
        <Label>종료날짜</Label>
        <PickerContainer>
          <DateInput
            type='date'
            value={endDate}
            onChange={handleDateChange(setEndDate, onChange, startDate, endDate, false)}
            min={startDate}
          />
        </PickerContainer>
      </PickerGroup>
    </Container>
  );
};

export default DateRangePicker;
