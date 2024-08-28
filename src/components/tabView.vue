<!-- eslint-disable vue/valid-v-for -->
<template>
  <van-tabs v-model:active="active" @click-tab="emitChildEvent">
    <van-tab v-for="item in props.tabArr">
      <div>{{ item.title }}</div>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, defineEmits } from "vue";

const props = defineProps<{ tabArr?: any[] }>();

const emit = defineEmits(["childEvent"]);
//@ts-ignore
const emitChildEvent = () => {
  emit("childEvent", active);
};

const active = ref(0);
// import { showToast } from "vant";
// import { Colors } from "@/utils/Colors";

onMounted(() => {
  console.log(props.tabArr);
});
</script>

<style>
.testView {
  width: 20px;
  color: aquamarine;
  flex-direction: row;
  /* background-color: red; */
}
</style>
