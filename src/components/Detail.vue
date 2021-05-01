<template>
  <div class="detail-box text-center mt-4 p-4">
    <h5>{{ list_item[$route.params.id].title }}</h5>
    <p @click="$router.push($route.params.id + '/comment')">
      <!--detail기준이라 id도 같이 넣어야함 변수넣기는 편하네-->
      {{ list_item[$route.params.id].content }}
    </p>
    <!--router-link뿐 아니라 click이벤트에 $router(라우터관련 기능모은 변수).push('경로')로 이동 가능
    $router(페이지 이동관련 기능)와 $route(현재 URL정보)구분을 잘 해야함-->
  </div>
  <router-view></router-view>
  <!--Detail의 nested view를 보여줄 장소-->
</template>

<script>
export default {
  name: "Detail",
  props: {
    list_item: Array,
    //id: Number,
  },
};
</script>

<style>
div,
p,
h5 {
  box-sizing: border-box;
}
.text-center {
  text-align: center;
}
.detail-box {
  background-color: white;
  border-radius: 5px;
}
.detail-box h5 {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: olivedrab;
}

.detail-box p {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: grey;
}
</style>

<!-- 5/1 컴포넌트 저장은 components안에 세부 폴더 만들어서 저장해도됨 짜피 경로 세팅하니까
                                                          (css 같은거 외부 첨부시키기도 가능하단 소리)

    이미 router-link는 그렇다치고 router-view의 경우 스타일링은 div로 감싸서 div를 통해 스타일링

    5/1 : URL 파라미터
    머 과제에 한것처럼 router-link에 to를 바인딩해서 :to="{name:"" param:{:}}"한뒤 라우터에서 name 지정과 props true해도 되지만
    
    그것보다 간편히 그리고 일반적으로 url주소로 자원식별을 하기 위해
    router부분에는 '/자원/식별자'를 한뒤

    가져오는 컴포넌트에서 $route(라우터 관련 URL 정보를 전부 담고 있음)을 통해 가져옴
    $route.params.찾으려는 식별자
    보내는 쪽은 routerlink에서 to를 바인딩하여 :to="'/detail/' + a.number" 이런식으로 '문자열주소' + 파라미터로

    라우터 관련 에러는 보통 터미널에 표기되지 않고 사일런트하게 넘어가서 ?? 상황 발생
    이 경우 브라우저 개발자도구 콘솔창에 warning으로 표기되기에(warning이라 보통 실행은 되서 넘어감)
    그쪽으로 확인
  
-->