<template>
    <div class="container">
        <div class="belief">
      <h1 class="looks looks2">Остались вопросы?</h1>
      <p class="oznak">
        Часто для принятия правильного решения, стоит собрать больше информации, ниже ответы на самые популярные вопросы
      </p>
      <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
      <div class="qleft">
        <div class="ntdaun">
          <div class="iren-container">
            <div @click="changeSlide" class="iren">
              <p class="zaduv">Сколько стоит диагностика?</p>
              <img :class="{ rotat: rotate }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
          <div class="iren-container">
            <div @click="changeSlide2" class="iren">
              <p class="zaduv">Какие документы оставит мастер?</p>
              <img :class="{ rotat: rotate2 }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide2" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
          <div class="iren-container">
            <div @click="changeSlide3" class="iren">
              <p class="zaduv">Сколько действует гарантия?</p>
              <img :class="{ rotat: rotate3 }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide3" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
          <div class="iren-container">
            <div @click="changeSlide4" class="iren">
              <p class="zaduv">Как происходит оплата?</p>
              <img :class="{ rotat: rotate4 }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide4" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
          <div class="iren-container">
            <div @click="changeSlide5" class="iren">
              <p class="zaduv">Сколько стоит выезд мастера?</p>
              <img :class="{ rotat: rotate5 }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide5" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
        </div>
        <img class="ytvs" src="@/assets/img/masterimg.png" alt="" />
      </div>
      <div class="niz">
        <img class="vishee" src="@/assets/img/payment.svg" alt="" />
        <div class="pozh">
          <p class="npozh">Если у вас остались какие-либо вопросы или есть пожелания:</p>
          <div class="inps">
            <input class="inpp" @keyup="changee" v-model="input2" type="text" placeholder="Ваше имя" />
            <Nomer3 />
          </div>
          <p class="loohe">
            Нажимая кнопку «Отправить», вы соглашаетесь на обработку персональных данных и подтверждаете свое
            совершеннолетие в соответствии с
            <span class="pzda">политикой конфиденциальности</span>.
          </p>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import Nomer3 from "../components/Nomer3.vue";
import { useTrorf } from "@/store/trorf";
const trorf = useTrorf();
let input2 = ref("");
const changee = () => {
  trorf.input2 = input2.value;
};
watchEffect(() => {
  input2.value = trorf.input2
})

let slide = ref(false);
let rotate = ref(false);
const changeSlide = () => {
  slide.value = !slide.value;
  rotate.value = !rotate.value;
};
let slide2 = ref(false);
let rotate2 = ref(false);
const changeSlide2 = () => {
  slide2.value = !slide2.value;
  rotate2.value = !rotate2.value;
};
let slide3 = ref(false);
let rotate3 = ref(false);
const changeSlide3 = () => {
  slide3.value = !slide3.value;
  rotate3.value = !rotate3.value;
};
let slide4 = ref(false);
let rotate4 = ref(false);
const changeSlide4 = () => {
  slide4.value = !slide4.value;
  rotate4.value = !rotate4.value;
};
let slide5 = ref(false);
let rotate5 = ref(false);
const changeSlide5 = () => {
  slide5.value = !slide5.value;
  rotate5.value = !rotate5.value;
};
</script>

<style lang="scss" scoped>
    .vishee {
  width: 450px;
  margin-right: 30px;
}
.inps {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}
.inpp {
  color: #3e3e3e;
  font-family: Proxima Nova;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 294px;
  height: 40px;
  flex-shrink: 0;
  width: 294px;
  height: 60px;
  flex-shrink: 0;
  background: #fff;
  padding-left: 20px;
  border-radius: 5px;
}
.npozh {
  color: #3e3e3e;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.pozh {
  background: #fed036;
  padding: 30px;
  border-radius: 7px;
}
.niz {
  display: flex;
  justify-content: center;
  align-items: center;
}
.iren {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 100px;
  .zaduv {
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 35px;
  }
  padding-right: 15px;
}
.ytvs {
  max-width: 35%;
}
.eeo {
  transition: 0.3s;
}
.rotat {
  transform: rotate(-90deg);
}
.qleft {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}
.priory {
  color: #3e3e3e;
  font-family: Proxima Nova;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 83%;
  text-align: center;
  padding: 30px;
  background: #edf3f6;
}
.rilmnoga {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    width: 320px;
  }
  margin-top: 25px;
}
.rilmnogadd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    box-shadow: 6px 9px 20px rgba(0, 0, 0, 0.349);
    width: 460px;
  }
  margin-top: 25px;
}
.margin {
  width: 100%;
  margin-top: 35px;
}
.belief {
  margin-top: 40px;
}
.img {
  width: 100%;
  margin-top: 20px;
}
</style>