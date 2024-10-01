import { Container, Header } from './WidgetCard.styles';

interface IWidgetProps {
  title?: string;
  children: React.ReactNode;
}

const WidgetCard = ({ title, children }: IWidgetProps) => {
  return (
    <Container>
      {title ? <Header>{title}</Header> : null}
      {children}
    </Container>
  );
};

export default WidgetCard;
