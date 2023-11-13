<template>
  <div class="vsa">
    <div class="fed">
      <h1>Помогите нам стать лучше!</h1>
      <div class="dost">
        <p class="zascock">
          Если у вас есть вопросы, которые требуют немедленного решения,
          позвоните или напишите нам.
        </p>
      </div>
    </div>
    <div class="wew">
      <img class="wew" src="@/assets/img/boorr.png" alt="" />
    </div>
  </div>
  <div class="container byst">
    <h1 class="looks looks2">Наши контакты</h1>
    <p class="oznak">
      Для предложений и жалоб, просто свяжитесь с нами любым удобным для вас
      способом.
    </p>
    <img class="mnoga mnogadva" src="@/assets/img/mnoga.svg" alt="" />
    <div class="cantakts">
        <div class="cantakt">
            <img src="@/assets/img/telicon.svg" alt="">
            <div class="cholf">
                <p class="nnchol">Телефон:</p>
                <div class="axaept">8 (495) 106-52-16</div>
            </div>
        </div>
        <div class="cantakt">
            <img src="@/assets/img/telicon2.svg" alt="">
            <div class="cholf">
                <p class="nnchol">Компания:</p>
                <div class="axaept">ООО “Мистер Быт”</div>
            </div>
        </div>
        <div class="cantakt">
            <img src="@/assets/img/telicon3.svg" alt="">
            <div class="cholf">
                <p class="nnchol">ИНН:</p>
                <div class="axaept">5043045012 </div>
            </div>
        </div>
        <div class="cantakt">
            <img src="@/assets/img/telicon4.svg" alt="">
            <div class="cholf">
                <p class="nnchol">Email:</p>
                <div class="axaept">info@misterbyt.ru</div>
            </div>
        </div>
        <div class="cantakt">
            <img src="@/assets/img/telicon5.svg" alt="">
            <div class="cholf">
                <p class="nnchol">Адрес:</p>
                <div class="axaept">г. Москва, 2-й проезд</div>
            </div>
        </div>
        <div class="cantakt">
            <img src="@/assets/img/telicon6.svg" alt="">
            <div class="cholf">
                <p class="nnchol">ОГРН:</p>
                <div class="axaept">1115043007640</div>
            </div>
        </div>
    </div>
    <h1 class="looks looks2">Где мы находимся? </h1>
    <p class="oznak">
      Офисы компании находятся в нескольких районах Москвы и Московской области. Каждый центр оказывает полный перечень услуг. Найти ближайший к себе можно через форму поиска.
    </p>
    <img class="mnoga mnogadva" src="@/assets/img/mnoga.svg" alt="" />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842418.227225171!2d22.38035572408476!3d45.91532735271032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6130259eaae1d623%3A0x25ab3c666daa8634!2smrbit!5e0!3m2!1sru!2s!4v1699882093566!5m2!1sru!2s" width="1540" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <Gossip />
    <h1 class="looks looks2">В каких городах мы присутствуем?</h1>
    <p class="oznak">
      Сервисный центр предоставляет услуги не только в Москве, но и десятках других близлежащих городов. Мы всегда стараемся быть как можно ближе к Вам. 
    </p>
    <img class="mnoga mnogadva" src="@/assets/img/mnoga.svg" alt="" />
    <img class="mapinfo" src="@/assets/img/map-info.png" alt="">
    <Nizhniy />
  </div>
</template>

<script setup>
import Gossip from "@/components/Gossip.vue";
import Nizhniy from "@/components/Nizhniy.vue";
</script>

<style lang="scss" scoped>
</style>