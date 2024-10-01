import Button from '@/components/common/Button';
import Loading from '@/components/common/Loading';
import ImageBox from '@/components/common/ImageBox';
import { addCommasToNumber } from '@/utils/number';

import * as S from './ModalDetails.styles';

interface Props {
  isLoading: boolean;
  items: ICustomerPurchaseDetails[];
  onClose: () => void;
}

export default function ModalDetails({ isLoading, items, onClose }: Props) {
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
            {isLoading ? (
              <Loading />
            ) : (
              <S.ListWrapper>
                {items.length !== 0
                  ? items.map((item, index) => {
                      const { date, imgSrc, price, product, quantity } = item;
                      return (
                        <S.ListItem key={index}>
                          <span>{date}</span>
                          <span>
                            <ImageBox path={imgSrc} alt={`${product}-image`} width={80} height={80} />
                          </span>
                          <span>{product}</span>
                          <span>{quantity}</span>
                          <span>{addCommasToNumber(price)}</span>
                        </S.ListItem>
                      );
                    })
                  : '구매한 내역이 없습니다.'}
              </S.ListWrapper>
            )}
          </S.Content>
        </S.Container>
      </S.ModalScrollPaper>
    </S.ModalWrapper>
  );
}
