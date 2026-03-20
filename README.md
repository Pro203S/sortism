# sortism

![license](https://img.shields.io/npm/l/sortism) ![stars](https://img.shields.io/github/stars/Pro203S/sortism)

자신에게 맞는 방법으로 배열을 정렬해보세요!  
이 모듈에는 여러가지의 정렬 방식이 있습니다.  
자신에게 맞는 정렬을 사용하시면 됩니다.  

## 사용법

1. 패키지 설치
```sh
npm i sortism

bun i sortism
```

2. 모듈 가져오기
```typescript
import sortism from 'sortism';
```

3. 정렬 사용하기
```typescript
const arr = [5,2,3,1,4];

// 버블 정렬, 오름차순
// 1,2,3,4,5
sortism(arr).bubble("ascending");

// 선택 정렬, 내림차순
// 5,4,3,2,1
sortism(arr).selection("descending");
```

지금 바로 설치해서 사용해보세요!
