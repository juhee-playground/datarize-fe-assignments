import Loading from '@/components/common/Loading';
import { ListContainer, Item } from './OrderList.styles';

interface IListProps {
  loading: boolean;
  items: ICustomers[];
}

const OrderList = ({ loading, items }: IListProps) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <ListContainer>
      <Item>
        <span>이름</span>
        <span>총 구매 횟수</span>
        <span>총 구매 금액</span>
      </Item>
      {items.map(item => (
        <Item key={item.id}>
          <span>{item.name}</span>
          <span>{item.count}</span>
          <span>{item.totalAmount}</span>
        </Item>
      ))}
    </ListContainer>
  );
};

export default OrderList;
