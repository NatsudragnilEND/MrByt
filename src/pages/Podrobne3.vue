<template>
  <div class="vsa">
    <div class="fed">
      <h3 class="easi">БЫСТРО И ПРОСТО</h3>
      <h1>РЕМОНТ ХОЛОДИЛЬНИКА <img class="gitsh" :src="brand" alt=""></h1>
      <div class="dost">
        <img src="@/assets/img/run.svg" alt="" />
        <p class="zascock">Выезд мастера от 30 минут</p>
      </div>
      <Nomer />
    </div>
    <img class="wew" src="@/assets/img/fridge.png" alt="" />
  </div>
 <div class="container">
    <h1 class="looks looks2 looks3">Сколько стоит?</h1>
    <p class="oznak">
      Что бы сориентироваться в стоимости ремонт. стоит точно определить
      проблему неисправности вашей техники.
    </p>
    <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
    <div :class="{ popr: popr, pod: posl }" class="pcheli">
      <div class="neispr">
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Перемораживает</p>
          <div class="sldog">
            <p class="pone">Замена бункера дозатора / Замена разбрызгивателя</p>
            <p class="vashne">от 230 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Сильно шумит</p>
          <div class="sldog">
            <p class="pone">Чистка фильтров / Замена датчика уровня воды</p>
            <p class="vashne">от 250 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Намерзает лёд</p>
          <div class="sldog">
            <p class="pone">
              Замена вентилятора сушки / Замена нагревательного элемента
            </p>
            <p class="vashne">от 200 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Не морозит</p>
          <div class="sldog">
            <p class="pone">Устранение засора в системе / Ремонт платы</p>
            <p class="vashne">от 240 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Выдает ошибку</p>
          <div class="sldog">
            <p class="pone">Замена шланга / Замена уплотнительной резинки</p>
            <p class="vashne">от 200 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Не включается</p>
          <div class="sldog">
            <p class="pone">
              Замена электронного модуля / Ремонт электронного модуля
            </p>
            <p class="vashne">от 450 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Утечка фреона</p>
          <div class="sldog">
            <p class="pone">
              Замена датчика температуры / Замена нагревательный элемент
            </p>
            <p class="vashne">от 250 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Протекает</p>
          <div class="sldog">
            <p class="pone">Чистка фильтров / Замена разбрызгивателя</p>
            <p class="vashne">от 280 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Бьет током</p>
          <div class="sldog">
            <p class="pone">
              Ремонт сетевого фильтра / Ремонт электродвигателя
            </p>
            <p class="vashne">от 200 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem" @click="openTrorf">
          <p class="whatdd">Не работает морозилка</p>
          <div class="sldog">
            <p class="pone">Замена датчика уровня воды / Чистка фильтров</p>
            <p class="vashne">от 190 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="irem-kl">
      <button class="tozhtaking" @click="nuladno">
        {{ neisprcht }}
      </button>
    </div>
    <div class="ishoimai">
      <div class="isho">
        <p class="viesd">Выезд мастера</p>
        <div class="bisp">
          <img src="@/assets/img/checkcirc.png" alt="" />
          <p class="npis">БЕСПЛАТНО</p>
        </div>
      </div>
      <div class="isho">
        <p class="viesd">Диагностика</p>
        <div class="bisp">
          <img src="@/assets/img/checkcirc.png" alt="" />
          <p class="npis">БЕСПЛАТНО</p>
        </div>
      </div>
      <div class="isho">
        <p class="viesd">Гарантия на 1 год</p>
        <div class="bisp">
          <img src="@/assets/img/checkcirc.png" alt="" />
          <p class="npis">БЕСПЛАТНО</p>
        </div>
      </div>
    </div>
    <Joski />
    <div class="brands container">
      <h1 class="looks looks2 looks3">Какие бренды обслуживаем?</h1>
      <p class="oznak">
        Оказываем постгарантийный ремонт техники всех марок, наши мастера имею
        авторизацию популярных брендов.
      </p>
      <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
      <div class="grit">
        <img class="grittt" @click="changeBrand(index)" v-for="(brand, index) in brands" :key="index" :src="brand.img" alt="" />
      </div>
    </div>
  </div>
  <Podrobne />
  <Modal />
  <Whyusxz />
  <Mastera />
  <Gossip />
  <Nizhniy class="masre" />
</template>

<script setup>
import Nizhniy from "@/components/Nizhniy.vue";
import Gossip from "@/components/Gossip.vue";
import Podrobne from "@/components/Podrobne.vue";
import Nomer from "@/components/Nomer.vue";
import Mastera from "@/components/Mastera.vue";
import Joski from "@/components/Joski.vue";
import Whyusxz from "@/components/Whyusxz.vue";
import Modal from "@/components/Modal.vue";
import { ref, watchEffect } from "vue";
import { useTrorf } from "@/store/trorf.js";
const trorf = useTrorf()
import brands from "@/brands/brands3";

let neisprcht = ref("Все неисправности");
let popr = ref(true);
const nuladno = () => {
  neisprcht.value == "Все неисправности"
    ? (neisprcht.value = "Скрыть")
    : (neisprcht.value = "Все неисправности");
  popr.value = !popr.value;
};
let posl = ref(false);

watchEffect(() => {
  if (neisprcht.value == "Скрыть") {
    posl.value = true;
  } else {
    posl.value = false;
  }
});
let brand = ref(null)
const changeBrand = (index) => {
  window.scrollTo({
    top: 0,
  });
  brand.value = brands[index].img
}
</script>

<style lang="scss" scoped>
</style>