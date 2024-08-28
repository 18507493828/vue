<template>
  <div class="hello">
    <TabView :tabArr="tabArr" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="testView">nihao</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
// import { getOperateByUserId } from "./request/fetch";
import TabView from "@/components/TabView.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import { showToast } from "vant";
// import { Colors } from "@/utils/Colors";

const tabArr = [{ title: "标题1" }, { title: "标题2" }, { title: "标题3" }];

onMounted(() => {
  console.log("nihao");
  // const colors = Colors.redColor;
  // showToast("uuu344");
  // getOperateByUserId().then((res) => {
  //   console.log("nihao", res);
  // });
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.testView {
  width: 20px;
  color: aquamarine;
  flex-direction: row;
  /* background-color: red; */
}
</style>
