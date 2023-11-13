<template>
  <div class="vsa">
    <div class="fed">
      <h3 class="easi">БЫСТРО И ПРОСТО</h3>
      <h1 class="ashad">РЕМОНТ СТИРАЛЬНОЙ МАШИНЫ <img class="gitsh" :src="brand" alt=""></h1>
      <div class="dost">
        <img src="@/assets/img/run.svg" alt="" />
        <p class="zascock">Выезд мастера от 30 минут</p>
      </div>
      <Nomer />
    </div>
    <img class="wew" src="@/assets/img/washer.png" alt="" />
  </div>
  <div class="container">
    <h1 class="looks looks2 looks3">Сколько стоит?</h1>
    <p class="oznak">
      Что бы сориентироваться в стоимости ремонт. стоит точно определить
      проблему неисправности вашей техники.
    </p>
    <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
    <div :class="{ popr: popr, pod: posl }" class="pchelil">
      <div class="neispr">
        <div class="irem">
          <p class="whatdd">Протекает вода</p>
          <div class="sldog">
            <p class="pone">Замена заливного шланга / Замена манжеты люка</p>
            <p class="vashne">от 240 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не отжимает</p>
          <div class="sldog">
            <p class="pone">Замена подшипников / Извлечение предмета</p>
            <p class="vashne">от 310 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не открывается</p>
          <div class="sldog">
            <p class="pone">Замена петель люка / Замена замка УБЛ</p>
            <p class="vashne">от 320 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Шумит</p>
          <div class="sldog">
            <p class="pone">Замена подшипников / Извлечение предмета</p>
            <p class="vashne">от 410 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не сливает</p>
          <div class="sldog">
            <p class="pone">
              Замена датчика уровня воды / Чистка фильтра слива
            </p>
            <p class="vashne">от 280 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не включается</p>
          <div class="sldog">
            <p class="pone">Замена сетевого шнура / Замена кнопки включения</p>
            <p class="vashne">от 360 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не греет</p>
          <div class="sldog">
            <p class="pone">Замена ТЭНа / Замена датчика уровня воды</p>
            <p class="vashne">от 340 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Рвет белье</p>
          <div class="sldog">
            <p class="pone">Замена подшипников / Извлечение предмета</p>
            <p class="vashne">от 410 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не набирает</p>
          <div class="sldog">
            <p class="pone">Замена заливного клапана / Замена замка УБЛ</p>
            <p class="vashne">от 220 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не запускается</p>
          <div class="sldog">
            <p class="pone">Чистка фильтра / Замена датчика температуры</p>
            <p class="vashne">от 180 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не запускается</p>
          <div class="sldog">
            <p class="pone">Чистка фильтра / Замена датчика температуры</p>
            <p class="vashne">от 180 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Долго стирает</p>
          <div class="sldog">
            <p class="pone">Замена ТЭНа / Замена датчика уровня воды</p>
            <p class="vashne">от 350 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не стирает</p>
          <div class="sldog">
            <p class="pone">Замена заливного шланга / Замена ТЭНа</p>
            <p class="vashne">от 220 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Засор</p>
          <div class="sldog">
            <p class="pone">Уcтранение засора / Чистка фильтра системы</p>
            <p class="vashne">от 150 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Отключается</p>
          <div class="sldog">
            <p class="pone">Замена датчика уровня воды / Ремонт модуля</p>
            <p class="vashne">от 180 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Не полоскает</p>
          <div class="sldog">
            <p class="pone">
              Замена датчика уровня воды / Замена насоса (помпы)
            </p>
            <p class="vashne">от 220 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Предмет</p>
          <div class="sldog">
            <p class="pone">Извлечение предмета / Уcтранение засора</p>
            <p class="vashne">от 180 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Мигает</p>
          <div class="sldog">
            <p class="pone">Проверка слива системы / Замена замка УБЛ</p>
            <p class="vashne">от 180 ₽</p>
            <div class="sja">
              <p class="egey">Заказать</p>
              <img src="@/assets/img/icon-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="irem">
          <p class="whatdd">Подключение</p>
          <div class="sldog">
            <p class="pone">Подводка коммуникаций / Монтаж сливного шланга</p>
            <p class="vashne">от 230 ₽</p>
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
  <Whyusxz />
  <Modal />
  <Mastera />
  <Gossip />
  <Nizhniy class="masre" />
</template>

<script setup>
import brands from "@/brands/brands1";
import Joski from "@/components/Joski.vue";
import Nizhniy from "@/components/Nizhniy.vue";
import Modal from "@/components/Modal.vue";
import Gossip from "@/components/Gossip.vue";
import Whyusxz from "@/components/Whyusxz.vue";
import Podrobne from "@/components/Podrobne.vue";
import Mastera from "@/components/Mastera.vue";
import Nomer from "@/components/Nomer.vue";
import { ref, watchEffect } from "vue";
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