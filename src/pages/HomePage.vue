<template>
  <Banner />
  <div class="container">
    <section class="helps">
      <h1 class="looks">
        <div></div>
        Чем мы поможем?
        <a href="tel: +998998133559"
          ><img class="watsup" src="@/assets/img/watsup.svg" alt=""
        /></a>
      </h1>
      <p class="oznak">
        Приоритетным направлением деятельности нашей компании является ремонт
        бытовой техники на дому.
      </p>
      <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
      <div class="triy">
        <div class="adyn">
          <h3 class="balisho">Ремонт стиральных машин</h3>
          <div class="delyno">
            <div class="veshi">
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Не сливает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Долго стирает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Протекает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Не отжимает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Не влючается</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Сильно шумит</p>
              </div>
              <RouterLink to="/services/wash" class="dybv secandd">
                <p class="podr">подробнее</p>
                <img src="@/assets/img/ctr.svg" alt="" class="ctr" />
              </RouterLink>
            </div>
            <img class="mashinee" src="@/assets/img/wash.png" alt="" />
          </div>
        </div>
        <div class="adyn">
          <h3 class="balisho">Ремонт стиральных машин</h3>
          <div class="delyno">
            <div class="veshi">
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Не сливает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Долго стирает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Протекает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Не отжимает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Не влючается</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Сильно шумит</p>
              </div>
              <RouterLink to="/services/xolod" class="dybv secandd">
                <p class="podr">подробнее</p>
                <img src="@/assets/img/ctr.svg" alt="" class="ctr" />
              </RouterLink>
            </div>
            <img class="mashinee" src="@/assets/img/xolod.png" alt="" />
          </div>
        </div>
        <div class="adyn">
          <h3 class="balisho">Ремонт посудомоечных машин</h3>
          <div class="delyno">
            <div class="veshi">
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Не сливает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Долго стирает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Протекает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Не отжимает</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Не влючается</p>
              </div>
              <div class="item n">
                <div class="kv"></div>
                <p class="costs q">Сильно шумит</p>
              </div>
              <RouterLink to="/services/dryer" class="dybv secandd">
                <p class="podr">подробнее</p>
                <img src="@/assets/img/ctr.svg" alt="" class="ctr" />
              </RouterLink>
            </div>
            <img class="mashinee" src="@/assets/img/dryer.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <Mastera />
    <Modal class="modal" />
    <Vyvod />
    <Gossip />
    <WhyUs />
    <Sokolov1 />
  </div>
</template>

<script setup>
import WhyUs from "@/components/WhyUs.vue";
import Sokolov1 from "@/components/Sokolov1.vue";
import Gossip from "@/components/Gossip.vue";
import Banner from "@/components/Banner.vue";
import Vyvod from "@/components/Vyvod.vue";
import Modal from "@/components/Modal.vue";
import Mastera from "@/components/Mastera.vue";
import { ref } from "vue";
import { useTrorf } from "@/store/trorf.js";
const trorf = useTrorf();
</script>

<style lang="scss" scoped></style>
