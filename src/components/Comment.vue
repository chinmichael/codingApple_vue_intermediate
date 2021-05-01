<template>
  <div class="comment-box text-center mt-4 p-4">
    <h5>댓글창 제작</h5>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {},
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
.comment-box {
  background-color: white;
  border-radius: 5px;
}
.comment-box h5 {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: olivedrab;
}

.comment-box p {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: grey;
}
</style>

