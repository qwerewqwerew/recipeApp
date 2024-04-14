# 레시피 소개 리액트 앱

## App 의 구조

```md #
    src/
     ├─── App.js
     ├─── common.scss
     └───  scss/ (partial 파일들)
     │	    │
     │	    ├─── _init.scss (변수,믹스인 등 초기값 정의)
     │	    ├─── _layout.scss (레이아웃 정의)
     │	    ├─── _typo.scss (폰트정의 )
     │	    └─── _util.scss (기타 요소정의)
     │
     ├─── components/ (UI요소를 리턴하는 컴포넌트파일)
     │		│
     │		├─── Home.js 메인컴포넌트
     │		├─── Category.js 카테고리 컴포넌트
     │		├─── List.js 리스팅컴포넌트
     │		├─── Title.js 제목컴포넌트
     │		└─── Detail.js 상세정보 컴포넌트
     │
     └─── routes /  (라우팅 설정 파일)
     │ 		│
     │ 		└─── Router.js 라우터와 링크설정
     │
     └─── context /  (전역데이터 설정)
      		│
      		└─── RecipeContext.js (전역저장소 설치)
```
