<template>
  <div class="mt-4 p-4 text-center intro-box">
    <h5>Vue 공부용 페이지입니다</h5>
    <p>-Vue.js로 제작함-</p>
  </div>
</template>

<script>
export default {
  name: "Intro",
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