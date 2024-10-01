import Loading from '@/components/common/Loading';
import { ListContainer, ItemHeader, Item } from './OrderList.styles';

interface IListProps {
  loading: boolean;
  items: ICustomers[];
  clickRow: (id: number) => void;
}

const OrderList = ({ loading, items, clickRow }: IListProps) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <ListContainer>
      <ItemHeader>
        <span>이름</span>
        <span>총 구매 횟수</span>
        <span>총 구매 금액</span>
      </ItemHeader>
      {items.map(item => (
        <Item key={item.id} onClick={() => clickRow(item.id)}>
          <span>{item.name}</span>
          <span>{item.count}</span>
          <span>{item.totalAmount}</span>
        </Item>
      ))}
    </ListContainer>
  );
};

export default OrderList;
