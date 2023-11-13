<template>
  <div class="container ej">
    <h1 class="looks looks2">Почему выбирают нас?</h1>
    <p class="oznak">
      Наши премущества, помогают нам удерживать лидирующие позиции на рынке
      услуг по ремонту бытовой техники.
    </p>
    <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
    <div class="dxarosh">
      <div class="perfer">
        <div @click="on" :class="{vsiadindes: one}" class="vsiadin">
          <p class="asdf">1.</p>
          <p class="sledog">Большое количество сервисов в Москве и области</p>
        </div>
        <div @click="tw" :class="{vsiadindes: two}" class="vsiadin">
          <p class="asdf">2.</p>
          <p class="sledog">
            Премия “Звезда качества” лучшее предприятие страны
          </p>
        </div>
        <div @click="thre" :class="{vsiadindes: three}" class="vsiadin">
          <p class="asdf">3.</p>
          <p class="sledog">
            Оригинальные комплектующие от официальных поставщиков
          </p>
        </div>
        <div @click="fou" :class="{vsiadindes: four}" class="vsiadin">
          <p class="asdf">4.</p>
          <p class="sledog">Гарантия и обязательства закрепленные договором</p>
        </div>
      </div>
      <div class="seletfer ap" v-show="one">
        <h2>Максимальное присутствие в районах Москвы и области</h2>
        <p class="dest">
          Наша цель сократить время прибытия мастера к клиента. Для этого мы
          годами развивали сеть сервисных центров и партнерскую программу.
          Добились максимальной доступности и присутствия в районах Москвы и
          области.
        </p>
      </div>
      <div class="seletfer2 ap"  v-show="two">
        <h2>Премия “Звезда качества”</h2>
        <p class="dest">
          Нам есть чем гордится, каждый год мы стараемся добится максимального
          комфортного взаимодейстия с нашими клиентами. Никогда не делаем
          различия между частным клиентом или большой организацией, всегда
          используем одинаковые высокие стандарты обслуживания.
        </p>
      </div>
      <div class="seletfer3 ap" v-show="three">
        <h2>Всегда в наличии на складе оригинальные комплектующие</h2>
        <p class="dest">
          Регулярные поставки популярных позиций оригинальных комплектующих,
          позволяют производить ремонт техники в день обращения. Ценим ваше и
          наше время.
        </p>
      </div>
      <div class="seletfer4 ap" v-show="four">
        <h2>Быстро реагируем на гарантийные обращения наших клиентов</h2>
        <p class="dest">
          За годы работы снизили процент гарантийных обращений до 3%, по этому
          наши мастера оставляют расшириную гарантию на услуги. Использование
          оригинальных запчастей позволяет оставлять гарантию от производителя.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let one = ref(true)
let two = ref(false)
let three = ref(false)
let four = ref(false)
const on = () => {
  one.value = true; two.value = false; three.value = false; four.value =false
}
const tw = () => {
  one.value = false; two.value = true; three.value = false; four.value =false
}
const thre = () => {
  one.value = false; two.value = false; three.value = true; four.value =false
}
const fou = () => {
  one.value = false; two.value = false; three.value = false; four.value =true
}
</script>

<style lang="scss" scoped>
.dxarosh {
  display: flex;
  align-items: center;
}
.ej {
  margin-bottom: 100px;
}
.sledog {
  color: #000000;
  font-family: Proxima Nova;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 320px;
}
.ap{
  margin-left: 15px;
}
.seletfer {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: end;
  justify-content: center;
  background-image: url(@/assets/img/bgmg.png);
  h2 {
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    width: 424px;
    margin-right: 70px;
  }
  .dest {
    width: 424px;
    margin-right: 70px;
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
  height: 430px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.seletfer2 {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: end;
  justify-content: center;
  background-image: url(@/assets/img/bgmg2.png);
  h2 {
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    width: 424px;
    margin-right: 70px;
  }
  .dest {
    width: 424px;
    margin-right: 70px;
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
  height: 430px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.seletfer3 {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: end;
  justify-content: center;
  background-image: url(@/assets/img/bgmg3.png);
  h2 {
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    width: 424px;
    margin-right: 70px;
  }
  .dest {
    width: 424px;
    margin-right: 70px;
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
  height: 430px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.seletfer4 {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: end;
  justify-content: center;
  background-image: url(@/assets/img/bgmg4.png);
  h2 {
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    width: 424px;
    margin-right: 70px;
  }
  .dest {
    width: 424px;
    margin-right: 70px;
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
  height: 430px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.asdf {
  color: #000000;
  font-family: Proxima Nova;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.vsiadin {
  display: flex;
  gap: 5px;
  transition: 0.4s;
  width: max-content;
  padding: 20px 75px 20px 30px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #edf3f6;
  margin-bottom: 20px;
}
.vsiadindes {
  background: #3c93f0c6;
}
</style>