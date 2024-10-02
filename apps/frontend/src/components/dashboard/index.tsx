import WidgetCustomersContainer from './widgetCustomers';
import WidgetPurchaseContainer from './widgetPurchaseChart';

import { Container } from './Index.styles';

export default function Dashboard() {
  return (
    <Container>
      <WidgetPurchaseContainer />
      <WidgetCustomersContainer />
    </Container>
  );
}
