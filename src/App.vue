<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <!--와이드 container-->
        <a class="navbar-brand" href="#">Vue Study</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"
                ><router-link to="/">Home</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"
                ><router-link to="/list">List</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Detail</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <!-- <div class="mt-4 p-4 text-center intro-box">
        <h5>Vue 공부용 페이지입니다</h5>
        <p>-Vue.js로 제작함-</p>
      </div> -->
      <div class="link-list text-center mt-3 p-2 mb-0">
        <router-link to="/">홈으로</router-link>
        <router-link to="/list">리스트 페이지</router-link>
      </div>
      <router-view v-bind:list_item="list_inform"></router-view>
      <!-- <List v-bind:list_item="list_inform"></List> 이제 url을 이용한 라우터를 통해 list를 위 router-view영역에서 보여줌-->
    </div>
  </div>
  <!--The template root requires exactly one element 막기 위해 하나의 div로 감쌈-->
</template>

<script>
//import List from "./components/List.vue";
import { list_inform } from "./assets/content_list";

export default {
  name: "App",
  data() {
    return {
      list_inform: list_inform,
    };
  },
  components: {
    //List: List, 라우터로 함
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
/* .intro-box {
  background-color: white;
  border-radius: 5px;
}
.intro-box p {
  margin: 0;
} */
</style>

<!--4/29 vue 강의 2단계 시작 : 까먹진 않았겠지 vue create 프로젝트
                               >> 목표 : 라우터(페이지를 나눠서 이동시키기 위함)

    4/29 : vue에서 bootstrap 라이브러리 사용 + 데이터바인딩, props 복습

    1. 부트스트랩 설치(참고로 부트스트랩 5버전은 explorer 아예 안됨)
    case 1) index.html에 기존처럼 CDN을(css, js) 첨부하던 파일 저장 후 저장 경로를 통해 첨부하던 하면 됨

    case 2) npm으로 설치
    (npm(node package manager) : JS프로그래밍 언어를 위한 패키지 관리자 / JS 런타임환경 Node.js의 기본 패키지 관리자 (그래서 Node.js설치하는거))
    터미널에서(해당 프로젝트 폴더에서 해야함!! + npm run serve 등의 작업을 하던 node 터미널을 끄고 powershell터미널로 해야함)

    bootstrap 5버전 : npm install bootstrap@next @popperjs/core
              4버전 : npm install bootstrap jquery popper.js

    main.js에 2가지를 import (import 'bootstrap'  import 'bootstrap/dist/css/bootstrap.min.css')

    정확한 명령어는(바뀔 수 있으므로) bootstrap 홈페이지의 getting start의 download의 npm파트 (yarn은 yarn add bootstrap@next)
-->

<!-- 4/29 : 데이터 가져오기 연습
     asset에 js파일로 리스트 저장(강의에서 제공)
     export default = []로 가도 좋고
     let 변수명으로 지정하고 위에 export{변수명}으로 해서 데이터 세팅

     데이터를 가져오고자 하는 컴포넌트에 import {export한 변수명} from 경로
     data(){}에 변수명: export한 데이터 변수명 대입
-->

<!-- 4/30 : 매우매우 중요한 vue-router (컴포넌트 url 이동을 위함) / 오늘은 몸상태가 안좋으므로 1강만... ㅠ

     router 설치 : (물론 npm run serve중이면 터미널 종료 먼저)
                 : npm install vue-router@4  (vue3과 호환)
                 : vue cli 버전 확인 package.json의 의존성 리스트를 확인
                 : 만약 버전이 2버전이면 vue add vue-next 명령어로 업그레이드한다 (만약 그냥 npm install vue-router로 설치했음 위로 다시 입력해 업그레이드)

                 import { createApp } from 'vue';
                 import App from './App.vue';

                 createApp(App).mount('#app'); >> 사이에 use(라우터)가 들어가 끼어들기로 컴포넌트 세팅을 해준다.

                 >> vue3으로 가면 기존 vue생성자 함수 대신에 createApp()함수를 사용하는걸 확인할 수 있음

                 : main.js에서 라우터세팅 createApp(App).use('생성한 라우터 명').mount('#app')
                 : src에 생성한 라우터 명.js 만든 담에 import시키자

     main.js에 지정한 router.js파일에서 복사한 기본 세팅의 필요한 컴포넌트 import및 path설정 후

     App.vue에서 해당 컴포넌트를 보여줄 <router-view>를 지정하자(angular의 router-outlet이라고 생각)

     이제 라우터를 통해 컴포넌트 이동을 하므로 App.vue에서 List를 임포트하여 쓰지 않음 >> props로 데이터가 옮기지를 않음
     /list url접속시 저 router-view가 기존의 List가 된다 생각 router-view태그에 v-bind로 데이터를 옮긴다

     angular가 a태그에 router-link프로퍼티를 달았다면 vue는 아예 router-link 태그에 작성하면됨(a와 비슷)
     <router-link to="/list">리스트 페이지</router-link> 이런식으로
     <a><router-link></router-link></a> 이런식으로 anchor 사이에 넣을 수도 있음
-->