<template>
  <div class="naim" @click="cr">
    <p>Вы не ввели имя!</p>
    <img
      src="@/assets/img/close-button.svg"
      width="25"
      @click="otcr()"
      alt=""
    />
  </div>
</template>

<script setup>
import { useTrorf } from "@/store/trorf";
import { ref } from "vue";
const trorf = useTrorf();
const otcr = () => {
  trorf.name = false;
};
const cr = () => {
  $emit("disrupt");
};
</script>

<style lang="scss" scoped>
</style>