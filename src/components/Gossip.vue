<template>
  <section class="vpox">
    <div class="container">
      <h1 class="looks looks2">Что о нас говорят?</h1>
      <p class="oznak">
        О качестве работ компании говорят ее клиенты. Изучить мнение наших
        заказчиков вы можете ниже или в сервисах Google, Яндекс. Нам есть, чем
        гордиться!
      </p>
      <img class="mnoga mnogadva" src="@/assets/img/mnoga.svg" alt="" />
      <div class="vse">
        <img
          class="chell"
          :src="imgi"
          v-for="(imgi, index) in img"
          :key="index"
          alt=""
          @click="openImageSlider(index)"
        />
      </div>
      <div class="otzyvy">
        <router-link to="/reviews" class="galuboy"
          >Смотреть все отзывы</router-link
        >
        <div class="nnn">
          <img src="@/assets/img/yandex.svg" alt="" />
          <img src="@/assets/img/gulugulu.svg" alt="" />
        </div>
      </div>
      <transition name="menett" class="modal">
        <div class="modal-content" v-show="isImageSliderOpen">
          <img
            @click="closeImageSlider"
            src="@/assets/img/close.svg"
            class="mo"
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
            @click="closeImageSlider"
          >
            <div
              class="class"
              @mouseleave="ndeve"
              @mouseover="deve"
              :class="{ clac: dee }"
              @click="closeImageSlide"
            >
              &#8656;
            </div>

            <SwiperSlide
              @click="closeImageSlide"
              class="giiy"
              v-for="imgi in img"
              :key="imgi.id"
            >
              <img class="chell" :src="imgi" alt="" />
              <div class="swiper-div">
                <div class="top-content">
                  <div class="top-left">
                    <div class="star"><img :src="opis[0]" alt="" /></div>
                    <div class="neim">{{ opis[1] }}</div>
                  </div>
                  <div class="when">{{ opis[2] }}</div>
                </div>
                <p class="ya">{{ opis[3] }}</p>
              </div>
            </SwiperSlide>
            <div
              @mouseover="dev"
              @mouseleave="ndev"
              :class="{ clac: de }"
              class="clas"
              @click="closeImageSlide"
            >
              &#8658;
            </div>
          </Swiper>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeMount, watchEffect, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const modules = [Navigation, Pagination];
const baseUrl = import.meta.env.BASE_URL;
const img = ref([
 "img/g1.svg",
 "img/g2.svg",
 "img/g3.svg",
 "img/g4.svg",
 "img/g5.svg",
 "img/g6.svg",
 "img/g7.svg",
 "img/g8.svg",
 "img/g9.svg",
 "img/g10.svg",
 "img/g11.svg",
 "img/g12.svg",
 "img/g13.svg",
 "img/g14.svg",
 "img/g15.svg",
 "img/g16.svg",
 "img/g17.svg",
 "img/g18.svg",
]);
const opis = ref([
 "img/rating.svg",
  "Константин Рыбцов",
  "36 дней назад",

  'Хочется выразить огромную благодарность сервису "Мистер быт", а в частности мастеру Евгению. Он является настоящим профессионалом своего дела. Дело в том, что стиральная машина последние несколько стирок начала сильно гудеть, а вскоре и совсем потекла. Мастер быстро и качественно выполнил ремонт. В дальнейшем также буду обращаться в "Мистер быт". Однозначно, рекомендую. Спасибо!',
]);
let rass = ref(false);
const closeImageSlide = () => {
  rass.value = true;
  setTimeout(() => {
    rass.value = false;
  }, 10);
};

let isImageSliderOpen = ref(false);
const openImageSlider = (index) => {
  isImageSliderOpen.value = true;
};

const closeImageSlider = () => {
  isImageSliderOpen.value = false;
};
import { useRoute } from "vue-router";
watchEffect(() => {
  const npress = (event) => {
    if (event.key === "Escape") {
      closeImageSlider();
    }
  };
  if (rass.value == false) {
    if (isImageSliderOpen.value == true) {
      function handleOutsideClick(event) {
        const isModal = event.target.closest(".swiper-slide");
        const isNext = event.target.closest(".class");
        const isPrev = event.target.closest(".clas");
        if (!isModal && !isNext && !isPrev) {
          closeImageSlider();
        }
      }
      document
        .querySelector(".modal-content")
        .addEventListener("click", handleOutsideClick);
      window.addEventListener("keyup", npress);
    }
  }
});

let de = ref(false);
const dev = () => {
  de.value = true;
};
const ndev = () => {
  de.value = false;
};
let dee = ref(false);
const deve = () => {
  dee.value = true;
};
const ndeve = () => {
  dee.value = false;
};
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
.sorok {
  max-width: 40px;
}
.giiy {
  border-radius: 17px;
  img {
    border-radius: 17px;
    max-width: 850px;
    margin: 0 auto;
  }
}
.star {
  max-width: 40px;
}
.class {
  position: absolute;
  left: 50px;
  z-index: 150;
  top: 45%;
  font-size: 50px;
  color: rgb(148, 148, 148);
  transition: 0.3s;
  cursor: pointer;
}
.clas {
  right: 50px;
  position: absolute;
  z-index: 150;
  top: 45%;
  font-size: 50px;
  color: rgb(148, 148, 148);
  transition: 0.3s;
  cursor: pointer;
}
.clac {
  color: aliceblue;
}
.modal-content {
  border-radius: 8px;
  width: 100%;
  margin: 0 auto;
  .swiper {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    .swiper-slide {
      border-radius: 17px;
      background: none;
      height: 60%;

      img {
        height: 100%;
        width: 100%;
        max-width: 850px;
        margin: 0 auto;
        border-radius: 17px;
      }
    }
  }
}

.mo {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 150;
  max-width: 40px !important;
}
.vse {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.chell {
  width: 210px;
  margin-top: 20px;
}
.galuboy {
  color: #fff;
  font-family: Proxima Nova;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 3px;
  background: #3c93f0;
  display: inline-flex;
  height: 50px;
  padding: 8px 28px 6px 31px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 32px;
  margin-bottom: 30px;
}
.otzyvy {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nnn {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>