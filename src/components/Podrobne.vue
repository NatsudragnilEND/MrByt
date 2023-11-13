<template>
  <div class="container mbb">
    <h1 class="lookk">Как выглядит ремонт?</h1>
    <p class="oznak">
      Ознакомьтесь с процессом работы в наших отчетах, где будет понятно,
      насколько сложен ремонт. Здесь станет понятно, что работу лучше доверить
      специалисту.
    </p>
    <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
    <div class="opsh">
      <div class="lpol">
        <h2 class="tea">
          За 2021 год мы подарили вторую жизнь 4 725 видам техники.
        </h2>
        <p class="dov">
          Нам доверяют за качество и честную стоимость, а также мы делаем так,
          чтобы больше не ломалось.
        </p>
        <button @click="showMaster" class="mast">Вызвать мастера</button>
        <div class="swiper tvu append-buttons">
          <div class="twu">
            <button class="swiper-button-prev" @click="slidePrev"></button>
          </div>
          <div class="twoo">
            <button class="swiper-button-next" @click="slideNext"></button>
          </div>
        </div>
      </div>

      <Swiper
        ref="swiperRef"
        :slidesPerView="2"
        :spaceBetween="55"
        :pagination="{
          type: 'fraction',
        }"
        :navigation="{
          prevEl: '.twu',
          nextEl: '.twoo',
        }"
        :loop="true"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img
            class="niv"
            :src="selectedImages[index] || image.img"
            alt=""
            @click="openImageSlider(index)"
          />
          <div class="absalyut">
            <img
              class="objf"
              v-for="(img, imgIndex) in image.images"
              :key="imgIndex"
              :src="img"
              @click="changeMain(img, index)"
            />

            <img
              @click="changeMain(image.img, index)"
              class="objf"
              :src="image.img"
              alt=""
            />
          </div>

          <span class="slide-number"
            ><span class="span"> {{ index + 1 }} </span> / 10</span
          >
          <div
            class="explanation"
            v-for="detail in image.detail"
            :key="detail.id"
          >
            <p class="title">{{ detail.title }}</p>
            <p class="description">{{ machpach }} {{ detail.description }}</p>
            <div class="detail">
              <div class="dait">
                <img class="dimg" src="@/assets/img/ayt.svg" alt="" />
                <div class="got">
                  <p class="cena">Дата:</p>
                  <p>{{ detail.date }}</p>
                </div>
              </div>
              <div class="dait">
                <img class="dimg" src="@/assets/img/nety.svg" alt="" />
                <div class="got">
                  <p class="cena">Цена:</p>
                  <p>{{ detail.cost }}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <p class="append-buttons"></p>
      </Swiper>
    </div>
  </div>
  <transition name="menett" class="modal">
    <div class="modal-content" v-show="isImageSliderOpen">
      <img
        @click="closeImageSlider"
        src="@/assets/img/close.svg"
        class="modal-close-button"
      />
      <Swiper
        ref="imageSliderSwiper"
        :slidesPerView="1"
        :modules="modules"
        class="image-swiper"
        :navigation="{
          nextEl: '.clas',
          prevEl: '.class',
        }"
      >
      <div class="class" @mouseleave="ndeve" @mouseover="deve" :class="{clac: dee}">&#8656;</div>
        <SwiperSlide class="giiy">
          <img
            v-for="(image, index) in currentImages.img"
            :key="index"
            :src="image"
            alt="Image"
          />
        </SwiperSlide>
        <SwiperSlide
          v-for="(image, index) in currentImages.images"
          :key="index"
        >
          <img :src="image" alt="Image" />
        </SwiperSlide>
        <div @mouseover="dev" @mouseleave="ndev" :class="{clac: de}" class="clas">&#8658;</div>
      </Swiper>
    </div>
  </transition>
  <master v-show="mast" />
</template>

<script setup>
import { ref, onBeforeMount, watchEffect, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Master from "@/components/Master.vue";
const modules = [Navigation, Pagination];
const mast = ref(false);
const selectedImages = ref([]);
const route = useRoute();
const currentPath = route.path;
const images = ref([]);
const isImageSliderOpen = ref(false);
const currentImages = ref([]);
const changeMain = (img, index) => {
  selectedImages.value[index] = img;
};
let de = ref(false);
const dev = () => {
  de.value = true
}
const ndev = () => {
  de.value = false
}
let dee = ref(false);
const deve = () => {
  dee.value = true
}
const ndeve = () => {
  dee.value = false
}
let machpach = ref("");
onBeforeMount(async () => {
  if (currentPath === "/services/wash") {
    images.value = (await import("@/imagees/imagees.js")).default;
    machpach.value = "Стиральная машина";
  } else if (currentPath === "/services/xolod") {
    images.value = (await import("@/imagees/imagees1.js")).default;
    machpach.value = "Холодильник";
  } else if (currentPath === "/services/dryer") {
    images.value = (await import("@/imagees/imagees2.js")).default;
    machpach.value = "Посудомоечная машина";
  }

  selectedImages.value = new Array(images.value.length).fill(null);
});

const showMaster = () => {
  mast.value = true;
};

const openImageSlider = (index) => {
  currentImages.value = images.value[index];
  isImageSliderOpen.value = true;
};

const closeImageSlider = () => {
  isImageSliderOpen.value = false;
};
function handleOutsideClick(event, alt) {
  const isModal = event.target.closest(".swiper-slide");
  const isNext = event.target.closest(".class");
  const isPrev = event.target.closest(".clas");
  if (!isModal && !isNext && !isPrev) {
    closeImageSlider();
  }
}
onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transform: scale(1) !important;
  margin: 0 auto;
  transition: 0.5s;
}
.giiy {
  border-radius: 17px;
  img {
    border-radius: 17px;
    max-width: 650px;
    margin: 0 auto;
  }
}
.class{
  position: absolute;
  left: 50px;
  z-index: 150;
  top: 45%;
  font-size: 50px;
  color: rgb(148, 148, 148);
  transition: 0.3s;
  cursor: pointer;
}
.mbb{
  margin-bottom: 35px;
}

.clas{
  right: 50px;
  position: absolute;
  z-index: 150;
  top: 45%;
  font-size: 50px;
  color: rgb(148, 148, 148);
  transition: 0.3s;
  cursor: pointer;
}
.clac{
  color: aliceblue;
}
.modal-content {
  border-radius: 8px;
  width: 100%;
  margin: 0 auto;
  .swiper {
    width: 100%;
    margin: 0 auto;
    .swiper-slide {
      border-radius: 17px;
      background: none;
      img {
        height: 100%;
        width: 100%;
        max-width: 650px;
        margin: 0 auto;
        border-radius: 17px;
      }
    }
  }
}

:deep(.modal-close-button) {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  max-width: 40px !important;
}
:deep(.swiper-pagination),
.swiper-pagination-fraction,
.swiper-pagination-horizontal {
  display: none !important;
}
.swiper {
  max-width: 100%;
  width: 75%;
  overflow: hidden !important;
  height: 500px;
  margin: 55px 0 0 70px;
}

.append-buttons {
  text-align: center;
  margin-top: 20px;
}
.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff !important;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
}

.usern {
  user-select: none;
  cursor: pointer;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 18% !important;
  width: 55px !important;
  height: 55px !important;
  align-items: center !important;
  justify-content: center !important;
  border: 3px solid #08509c !important;
  border-radius: 50% !important;
  padding: 5px !important;
  z-index: 10;
  cursor: pointer;
  display: flex !important;
}

.slide-number {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.span {
  font-size: 35px;
  font-weight: 700;
  margin-right: 6px;
}

.lookk {
  color: #3e3e3e;
  font-family: Proxima Nova;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-align: center;
  width: 100%;
  margin-top: 50px;
}

.opsh {
  display: flex;
}

.absalyut {
  position: absolute;
  right: 6px;
  top: 6%;
  background: rgb(255, 255, 255);
  padding: 6px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.two {
  top: 10% !important;
  padding: 6px !important;
  position: absolute;
  width: 55px !important;
  height: 55px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border: 3px solid #08509c !important;
  border-radius: 50% !important;
}

.swiper-button-next {
  right: 180px !important;
}

.dait {
  display: flex;
  align-items: center;
}

.description,
.title {
  margin-left: 20px;
}

.description {
  margin-bottom: 30px;
}

.title {
  margin-top: 11px;
}

.swiper-pagination,
.swiper-pagination-fraction,
.swiper-pagination-horizontal {
  display: none !important;
}

.lpol {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.mast {
  text-align: center;
  width: max-content;
}

.objf {
  display: flex;
  max-width: 45px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 25px !important;
}

.swiper-button-prev:after {
  margin-right: 3px;
}

.swiper-button-next:after {
  margin-left: 3px;
}
:deep(.swiper-slide) {
  width: 800px;
  height: 600px;
}
</style>
