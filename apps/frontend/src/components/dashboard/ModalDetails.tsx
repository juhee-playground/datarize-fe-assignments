import Button from '@/components/common/Button';
import { addCommasToNumber } from '@/utils/number';

import * as S from './ModalDetails.styles';

interface Props {
  isLoading: boolean;
  info: ICustomerPurchaseDetails[];
  onClose: () => void;
}

export default function ModalDetails({ isLoading, info, onClose }: Props) {
  console.log(info);
  return (
    <S.ModalWrapper>
      <S.Overlay onClick={onClose}></S.Overlay>
      <S.ModalScrollPaper>
        <S.Container>
          <S.Header>
            <h2>구매 상세내역</h2>
            <Button variant='text' color='black' onClick={onClose}>
              닫기
            </Button>
          </S.Header>
          <S.Content>
            {isLoading && <p>Loading...</p>}
            <S.ListWrapper>
              {info
                ? info.map((item, index) => {
                    const { date, imgSrc, price, product, quantity } = item;
                    return (
                      <S.ListItem key={index}>
                        <span>{date}</span>
                        <span>
                          <img src={imgSrc} alt={`${product}-image`} width={100} height={100} />
                        </span>
                        <span>{quantity}</span>
                        <span>{product}</span>
                        <span>{addCommasToNumber(price)}</span>
                      </S.ListItem>
                    );
                  })
                : '구매한 내역이 없습니다.'}
            </S.ListWrapper>
          </S.Content>
        </S.Container>
      </S.ModalScrollPaper>
    </S.ModalWrapper>
  );
}
