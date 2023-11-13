<template>
  <div class="swiper-container">
    <swiper class="mySwiper" :slidesPerView="4.2" :spaceBetween="20">
      <swiper-slide
        class="svayper"
        v-for="josko in joski"
        :key="josko.id"
      >
        <div class="glupayak">
          <img class="lou" :src="josko.image1" alt="" />
          <div class="stoi">
            <p class="roi">Стоимость:</p>
            <p class="cati">{{ josko.cost }}</p>
          </div>
        </div>
        <div class="missi">
          <p class="roi">Задача:</p>
          <p class="cati">{{ josko.miss }}</p>
        </div>
        <div class="missi">
          <p class="roi">Бренд:</p>
          <p class="cati">{{ josko.brand }}</p>
        </div>
        <div class="missi">
          <p class="roi">Модель:</p>
          <p class="cati">{{ josko.model }}</p>
        </div>
        <div class="missi">
          <p class="roi">Выполнено за:</p>
          <p class="cati">{{ josko.time }}</p>
        </div>
        <div class="imagj">
          <img class="lou" :src="josko.image2" alt="" />
          <div class="stoi2">
            <p class="roi">Мастер:</p>
            <p class="cati">{{ josko.chel }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { computed, ref, watchEffect } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import joski from "@/joski.js";
</script>
<style lang="css" scoped>
.glupayak {
  justify-content: space-between;
  display: flex;
  width: 90%;
}
.swiper {
  width: 100%;
  height: 392px;
}
.swiper-container {
  box-shadow: 15px 0 6px -3px rgb(211, 211, 211);
  width: 100%;
  overflow: hidden;
  margin: 60px 0 110px 0;
}
.lou {
  max-width: 50px;
}
.svayper {
  border: 1px solid #9d9d9d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;
  width: 350px;
  cursor: pointer;
}
.missi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  width: 100%;
  height: 98%;
  gap: 25px;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>