<template>
  <div class="detail-box text-center mt-4 p-4">
    <h5>{{ list_item[id].title }}</h5>
    <p>{{ list_item[id].content }}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    list_item: Array,
    id: Number,
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