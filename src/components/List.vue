<template>
  <div>
    <div class="container mt-4 mb-0 p-1 list-head">
      <p class="text-center">Content List</p>
    </div>
    <div class="container mt-0 pl-4 pr-4 pb-4 list-body">
      <div
        class="content-list-box mt-4 p-4 text-center"
        v-for="(a, i) in list_item"
        :key="i"
      >
        <h5>
          <router-link :to="{ name: 'detail', params: { id: a.number } }">{{
            a.title
          }}</router-link
          ><!--detail이란 이름의 파라미터로 id를 보낸다고 생각-->
        </h5>
        <p>{{ a.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list_item: Array,
  },
};
</script>

<style>
.text-center {
  text-align: center;
}

.list-head {
  background-color: darkgray;
  border: 1px solid darkgray;
}
.list-head p {
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}
.list-body {
  border: 1px solid darkgray;
}

.content-list-box {
  background-color: white;
  border-radius: 5px;
}

.content-list-box h5 {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: olivedrab;
}

.content-list-box p {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: lightgrey;
}
</style>

<!-- 4/29 : 컴포넌트 추가 복습
     components 폴더 등에 .vue 파일 만들고
     export default{}에 name 세팅 (이건 그냥 되도록)

     보이고자 하는 컴포넌트(App.vue)에
     import에 name과 경로로 컴포넌트 로드
     components{}에 변수명과 대입 컴포넌트 작성
-->

<!-- 4/29 : props연습
     상위 컴포넌트에서 컴포넌트 프로퍼티에
     v-bind:를 통해 props변수명="data변수명"으로 받아옴

     export {} 안 props:{}에 받아옴 props변수명:자료형으로 세팅
-->