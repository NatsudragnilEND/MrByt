<template>
  <footer class="footer">
    <div class="container aoc">
      <img
        width="200"
        class="bart"
        @click="scrollToTop"
        src="@/assets/img/button-up.svg"
        alt=""
      />
      <a href="tel: +998998133559" class="nomer nomerr nomr">
        <span class="levu">8(495)</span> <span class="pppravo">106-52-16</span>
      </a>
      <div class="mailru">
        <img src="@/assets/img/icon-mail.svg" alt="">
        <p><a href="mailto: nd902077@gmail.com">order@mrappiliance.ru</a></p>
      </div>
      <p class="ok">ИНН 2003922 / ОГРН 21002494911</p>
      <p class="ccc">Политика конфиденциальности  и обработки персональных данных.</p>
      <p class="pwe">
        Представленная на сайте информация, касающаяся сроков, стоимости и порядка предоставления услуг, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437(2) Гражданского кодекса РФ.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.footer {
  background: #3e3e3e;
  max-height: 400px;
  width: 100%;
  height: 100%;
}
.aoc {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bart {
  transform: translateY(-50%);
}
</style>