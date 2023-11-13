<template>
  <form class="forrm">
    <div class="ushdr">
      <div @click="str(trorf.selectedImage)" class="dyvv">
        <img class="rew" :src="trorf.selectedImage" alt="" />
        <img src="@/assets/img/vec.svg" alt="" />
      </div>
      <transition name="medo">
        <div class="drsh" v-if="strany">
          <div class="d">
            <img
              class="melche"
              v-show="trorf.selectedImage !== img1"
              :src="img1"
              @click="str(img1)"
              alt=""
            />
            <img
              class="melche"
              v-show="trorf.selectedImage !== img2"
              :src="img2"
              @click="str(img2)"
              alt=""
            />
            <img
              class="melche"
              v-show="trorf.selectedImage !== img3"
              :src="img3"
              @click="str(img3)"
              alt=""
            />
          </div>
        </div>
      </transition>
    </div>
    <input
      class="yput"
      type="text"
      v-model="trorf.inp"
      @keypress="limitInput"
      required
      :placeholder="nomm[1]"
      :maxlength="max"
      readonly
    />
  </form>
</template>
<script setup>
import { ref, computed, watchEffect } from "vue";
import img1 from "@/assets/img/rawa.svg";
import img2 from "@/assets/img/uzb.jpg";
import img3 from "@/assets/img/kanada.png";
import { useTrorf } from "@/store/trorf"
const trorf = useTrorf()



const strany = ref(false);
const nomm = computed(() => {
  if (trorf.selectedImage === img1)
    return {
      1: "+7(999)123-45-67",
      2: "+7()",
    };
  else if (trorf.selectedImage === img2)
    return {
      1: "+998(99)123-45-67",
      2: "+998()",
    };
  else
    return {
      1: "+1(778)123-45-67",
      2: "+1()",
    };
});
let max = computed(() => {
  if (trorf.selectedImage === img1) return 14;
  else if (trorf.selectedImage === img2) return 15;
  else return 14;
});

const limitInput = (event) => {
  let keyCode = event.keyCode ? event.keyCode : event.which;
  if (keyCode < 48 || keyCode > 57) {
    event.preventDefault();
  }
};
const inputValue = ref("");
watchEffect(() => {
  inputValue.value = nomm.value[2];
});
const str = (image) => {
  trorf.selectedImage = image;
};
document.addEventListener("click", handleOutsideClick);
function handleOutsideClick(event) {
  const isMoscow = event.target.closest(".dyvv");
  if (!isMoscow) {
    strany.value = false;
  }
}
</script>

<style lang="scss" scoped>

</style>