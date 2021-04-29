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
              <a class="nav-link active" aria-current="page" href="#">List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Detail</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="mt-4 p-4 text-center intro-box">
        <h5>Vue 공부용 페이지입니다</h5>
        <p>-Vue.js로 제작함-</p>
      </div>
      <List v-bind:list_item="list_inform"></List>
    </div>
  </div>
  <!--The template root requires exactly one element 막기 위해 하나의 div로 감쌈-->
</template>

<script>
import List from "./components/List.vue";
import { list_inform } from "./assets/content_list";

export default {
  name: "App",
  data() {
    return {
      list_inform: list_inform,
    };
  },
  components: {
    List: List,
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
.intro-box {
  background-color: white;
  border-radius: 5px;
}
.intro-box p {
  margin: 0;
}
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