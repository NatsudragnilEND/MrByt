<template>
  <form class="forrm">
    <div class="ushdr">
      <div @click="str(selectedImage)" class="dyvv">
        <img class="rew" :src="selectedImage" alt="" />
        <img src="@/assets/img/vec.svg" alt="" />
      </div>
      <transition name="medo">
        <div class="drsh" v-if="strany">
          <div class="d">
            <img
              class="melche"
              v-show="selectedImage !== img1"
              :src="img1"
              @click="str(img1)"
              alt=""
            />
            <img
              class="melche"
              v-show="selectedImage !== img2"
              :src="img2"
              @click="str(img2)"
              alt=""
            />
            <img
              class="melche"
              v-show="selectedImage !== img3"
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
      v-model="inputValue"
      @keypress="limitInput"
      required
      @keydown="preventInputClear"
      :placeholder="nomm[1]"
      :maxlength="max"
      @keyup.enter="opentrorf"
      @input="preventInputClear"
    />
    <button @click.prevent="opentrorf" class="subb">Отправить</button>
  </form>
  <transition name="mene" class="ninit" v-if="nit"> <p>{{ trorf.input2 == '' ? 'Вы не ввели имя' : 'Неверный номер' }}</p></transition>
  <transition name="mene" class="ninit" v-if="fefe"> <p>Отправлено</p></transition>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import img1 from "@/assets/img/rawa.svg";
import img2 from "@/assets/img/uzb.jpg";
import img3 from "@/assets/img/kanada.png";
import { useTrorf } from "@/store/trorf";
const trorf = useTrorf();
let fefe = ref(false)
const opentrorf = () => {
    console.log(trorf.input2);
  if (inputValue.value.length > 13 && trorf.input2 !== '') {
    inputValue.value = ''
    trorf.input2 = ''
    fefe.value = true
    setTimeout(() => {
        fefe.value = false;
    }, 1600);
  } else if (trorf.input2 == ''){
    nit.value = true;
    setTimeout(() => {
      nit.value = false;
    }, 1600);
  }
  else {
    nit.value = true;
    setTimeout(() => {
      nit.value = false;
    }, 1600);
  }
  return (trorf.yes = false);
};
let nit = ref(false);
const selectedImage = ref(img1);
const strany = ref(false);
const nomm = computed(() => {
  if (selectedImage.value === img1)
    return {
      1: "+7(999)123-45-67",
      2: "+7 ",
    };
  else if (selectedImage.value === img2)
    return {
      1: "+998(99)123-45-67",
      2: "+998 ",
    };
  else
    return {
      1: "+1(778)123-45-67",
      2: "+1 ",
    };
});
let max = computed(() => {
  if (selectedImage.value === img1) return 14;
  else if (selectedImage.value === img2) return 15;
  else return 14;
});

const limitInput = (event) => {
  let keyCode = event.keyCode ? event.keyCode : event.which;
  if (keyCode < 48 || keyCode > 57) {
    event.preventDefault();
  }
  if (selectedImage.value === img1 || selectedImage.value === img3) {
    if (inputValue.value.length == 6) inputValue.value = inputValue.value + " ";
    if (inputValue.value.length == 2) inputValue.value = inputValue.value + " ";
  }
  if (selectedImage.value === img2) {
    if (inputValue.value.length == 7) inputValue.value = inputValue.value + " ";
    if (inputValue.value.length == 4) inputValue.value = inputValue.value + " ";
  }
};

const inputValue = ref("");

watchEffect(() => {
  inputValue.value = nomm.value[2];
  trorf.selectedImage = selectedImage.value;
});

const preventInputClear = (event) => {
  if(inputValue.value.split("")[0] !== '+') inputValue.value = nomm.value[2];
  if (selectedImage.value === img1 || selectedImage.value === img3) {
    if (
      (inputValue.value.length < 4 &&
        event.key === "Backspace" &&
        inputValue.value !== nomm.value[2]) ||
      inputValue.value == ""
    ) {
      inputValue.value = nomm.value[2];
      event.preventDefault();
    }
  }
  if (selectedImage.value === img2) {
    if (
      (inputValue.value.length < 6 &&
        event.key === "Backspace" &&
        inputValue.value !== nomm.value[2]) ||
      inputValue.value == ""
    ) {
      inputValue.value = nomm.value[2];
      event.preventDefault();
      
    }
  }
};
const str = (image) => {
  selectedImage.value = image;
  strany.value = true;
};

document.addEventListener("click", handleOutsideClick);
function handleOutsideClick(event) {
  const isMoscow = event.target.closest(".dyvv");
  if (!isMoscow) {
    strany.value = false;
  }
}
</script>

<style lang="scss" scoped></style>