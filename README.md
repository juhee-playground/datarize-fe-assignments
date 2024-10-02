# 과제 설명

## 과제 실행 방법

```cmd
cd apps
yarn install
yarn start-server
yarn start-client
```

## ✔ 개발스택

> 코어 스택: React, TypeScript
>
> 스타일링: StyledComponent
>
> 상태관리: Zustand

## ✔ 과제특이사항

- api 1번 확인할 때 backend random 구문이 계속 에러만 보여줌. 개발할 때는 0.1로 바꿔서 작업했습니다.

```
 if (Math.random() <= 1) {
    throw new Error('Intentional error occurred')
  }
```

- api 3번 오타인것 같습니다. customer => customers 로 변경하여 작업

## ✔ 정책

**차트 날짜 선택 정책**

- default값을 오늘 날짜 기준으로 한달동안으로 설정

## ✔ 커밋 유형 정책

[커밋 유형 의미]

> Feat: 새로운 기능 추가
>
> Fix: 버그 수정
>
> Doc: 문서 수정
>
> Style: 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
>
> Chore: 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
>
> Design: CSS 등 사용자 UI 디자인 변경

**커밋 유형 뒤에는 `:` 를 붙인 뒤 작업 내용을 적는다**

```shell
git commit -m "feat: add components"
```
