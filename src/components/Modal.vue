<template>
  <Transition
    name="mene"
    v-show="trorf.open"
    :class="{ active: trorf.open, disappear: !trorf.open }"
    class="modal"
  >
    <div class="obyect">
      <img
        class="close-button"
        @click="closeTrorf"
        src="@/assets/img/close-button.svg"
        alt=""
      />
      <img class="master" src="@/assets/img/master.png" alt="" />
      <div class="otpr">
        <div class="nasvyazi">
          <img src="@/assets/img/zeltrava.svg" alt="" />
          <p class="cvazlo">сейчас на связи</p>
        </div>
        <p class="cal">Вызвать мастера</p>
        <input
          @keydown="lup"
          class="yput2"
          type="text"
          v-model="pol"
          placeholder="Ваше имя"
        />
        <Nomer2 class="nomervtoy" />
        <p class="looh">
          Нажимая кнопку «Отправить», вы соглашаетесь на обработку персональных
          данных и подтверждаете свое совершеннолетие в соответствии с
          <span class="pzda">политикой конфиденциальности</span>.
        </p>
      </div>
      <div class="back">
        <button @click="otpravka" class="subru">Отправить</button>
      </div>
    </div>
  </Transition>
  <Name @disrupt="handleDisrupt" v-if="trorf.name" />
</template>

<script setup>
import Name from '@/components/Name.vue'
import Nomer2 from "@/components/Nomer2.vue";
import { ref, onMounted, watchEffect } from "vue";
import { useTrorf } from "@/store/trorf";
const trorf = useTrorf();
let pol = ref("");
const closeTrorf = () => {
  trorf.open = false;
  document.querySelector("body").classList.remove("dwe");
};
const thh = ref(false);
const handleDisrupt = () => {
  thh.value = true
}
function handleOutsideClick(event, alt) {
  const isModal = event.target.closest(".modal");
  const isNomer = event.target.closest(".subb");
  const isClose = event.target.closest(".close-button");
  const isOtpr = event.target.closest(".subru");
  if ((isNomer || isModal, trorf.yes === true )) {
    document.querySelector("body").classList.add("dwe");
  }
  if (trorf.yes == true) {
    document.querySelector("body").classList.add("dwe");
  }
  if (
    (trorf.open,
    (!isModal && !isNomer) || isClose || (isOtpr && pol.value !== ""))
  ) {
    trorf.open = false;
    document.querySelector("body").classList.remove("dwe");
  }
}
const otpravka = (event) => {
  if (pol.value !== "") {
    trorf.otpr = true;
    trorf.toroy = false;
    trorf.open = false;
    setTimeout(() => {
      trorf.otpr = false;
    }, 1600);
  }
  if (pol.value == "") {
    trorf.toroy = true;
    trorf.name = true;
    setTimeout(() => {
      trorf.name = false;
    }, 5000);
  }
};
watchEffect(() => {
  if (pol.value.length === 1) {
    pol.value = pol.value.toUpperCase();
  }
});
const lup = (event) => {
  if (
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9" ||
    event.key === "1" ||
    event.key === "0"
  ) {
    event.preventDefault();
  }
};
onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});
</script>

<style lang="scss" scoped></style>
