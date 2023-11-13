<template>
  <div class="anv">
    <div class="container ann">
      <nav class="nav">
        <RouterLink to="/"
          ><img src="@/assets/img/logo.svg" alt="" class="logo"
        /></RouterLink>
        <ul class="nav-ul">
          <div @click="medChange" class="menu">
            <img src="@/assets/img/menu.svg" alt="" />
            <p class="costs">Цены на услуги</p>
          </div>
          <RouterLink class="costs" to="/about">О компании</RouterLink>
          <RouterLink class="costs" to="/reviews">Отзывы</RouterLink>
          <RouterLink class="costs" to="/contacts">Контакты</RouterLink>
        </ul>
        <div class="yyy">
          <div @click="newgorod" class="moscow">
            <img
              :class="{ kurtkar: gorodm }"
              src="@/assets/img/strelka.svg"
              alt=""
              class="down"
            />
            <p class="costs">{{ selectedCity }}</p>
          </div>
          <Transition name="gor">
            <div v-if="gorodm" class="afd">
              <div
                class="for"
                v-for="city in cities"
                :key="city.id"
                @click="selectCity(city)"
              >
                {{ city }}
              </div>
            </div>
          </Transition>
        </div>

        <a href="tel: +998998133559" class="nomer nomerr">
          <span class="levo">8(495)</span> <span class="ppravo">106-52-16</span>
        </a>
        <img
          @click="Changemeen"
          class="aeaeae"
          src="@/assets/img/menu.svg"
          alt=""
        />
      </nav>
    </div>

    <Transition name="mene">
      <div v-if="menu" class="col">
        <router-link :to="{ name: 'ServicesWash' }" class="teer">
          <p ref="machines" class="machines a tr">Стиральные машины</p>
        </router-link>
        <router-link :to="{ name: 'ServicesDryer' }" class="teer">
          <p ref="posudas" class="posudas a tr">Посудомоечные машины</p>
        </router-link>
        <router-link :to="{ name: 'ServicesXolod' }" class="teer">
          <p ref="xolodilnik" class="xolodilnik a tr">Холодильники</p>
        </router-link>
        <RouterLink class="costs cso" to="/about">О компании</RouterLink>
        <RouterLink class="costs cso" to="/reviews">Отзывы</RouterLink>
        <RouterLink class="costs cso" to="/contacts">Контакты</RouterLink>
        <p class="workt">Время работы 8:00 - 22:00 (без выходных)</p>
        <a href="tel: +998998133559" class="nomerrr">
          <span class="levo">8(495)</span> <span class="ppravo">106-52-16</span>
        </a>
        <div class="cer">
          <button @click="showMaster" class="mast">Вызвать мастера</button>
        </div>
      </div>
    </Transition>
    <TransitionGroup name="med">
      <div class="dfa" v-if="med">
        <div class="left">
          <router-link :to="{ name: 'ServicesWash' }" class="teer">
            <p @mouseover="a1" ref="machines" class="machines tr">
              Стиральные машины
            </p></router-link
          >
          <router-link :to="{ name: 'ServicesDryer' }" class="teer">
            <p @mouseover="a2" ref="posudas" class="posudas tr">
              Посудомоечные машины
            </p> </router-link
          ><router-link :to="{ name: 'ServicesXolod' }" class="teer">
            <p @mouseover="a3" ref="xolodilnik" class="xolodilnik tr">
              Холодильники
            </p></router-link
          >
        </div>
        <Transition
          v-show="wash || ShowOpis || dryer"
          :ref="elements.q[0]"
          name="opis"
        >
          <div class="opis">
            <div class="item n">
              <div class="kv"></div>
              <p class="costs q">{{ result[1] }}</p>
            </div>
            <div class="item">
              <div class="kv"></div>
              <p class="costs q">{{ result[2] }}</p>
            </div>
            <div class="item n">
              <div class="kv"></div>
              <p class="costs q">{{ result[3] }}</p>
            </div>
            <div class="item">
              <div class="kv"></div>
              <p class="costs q">{{ result[4] }}</p>
            </div>
            <div class="item n">
              <div class="kv"></div>
              <p class="costs q">{{ result[5] }}</p>
            </div>
            <div class="item">
              <div class="kv"></div>
              <p class="costs q">{{ result[6] }}</p>
            </div>
            <div class="item n">
              <div class="kv"></div>
              <p class="costs q">{{ result[7] }}</p>
            </div>
            <div class="item">
              <div class="kv"></div>
              <p class="costs q">{{ result[8] }}</p>
            </div>
            <RouterLink :to="services()" class="dybv">
              <p class="podr">подробнее</p>
              <img src="@/assets/img/ctr.svg" alt="" class="ctr" />
            </RouterLink>
          </div>
        </Transition>
        <div class="holod q">
          <img :ref="elements.q[1]" :src="result[9]" alt="" />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from "vue";
import img1 from "@/assets/img/xolod.png";
import img2 from "@/assets/img/dryer.png";
import img3 from "@/assets/img/wash.png";
import { RouterLink } from "vue-router";
let ShowOpis = ref(false);
let wash = ref(true);
let dryer = ref(false);
const result = computed(() => {
  if (wash.value) {
    return massyv.value[2];
  } else if (dryer.value) {
    return massyv.value[1];
  } else if (ShowOpis.value) {
    return massyv.value[0];
  } else {
    return "";
  }
});
const services = () => {
  if (ShowOpis.value == true) return "/services/xolod";
  if (wash.value == true) return "/services/wash";
  if (dryer.value == true) return "/services/dryer";
  return "/services/wash";
};
const massyv = ref([
  {
    1: "Перемораживает",
    2: "Не морозит",
    3: "Не включается",
    4: "Выдает ошибку",
    5: "Утечка",
    6: "Бьет током",
    7: "Намерзает лёд",
    8: "Протекает",
    9: img1,
  },
  {
    1: "Не сливает воду",
    2: "Не набирает воду",
    3: "Плохо моет",
    4: "Протекает вода",
    5: "Не греет воду",
    6: "Не включается",
    7: "Мигает ошибка",
    8: "Не отключается",
    9: img2,
  },
  {
    1: "Протекает вода",
    2: "Не открывается",
    3: "Не сливает воду",
    4: "Не греет воду",
    5: "Не отжимает",
    6: "Шумит",
    7: "Не включается",
    8: "Рвет белье",
    9: img3,
  },
]);
let machines = ref(null);
let posudas = ref(null);
let xolodilnik = ref(null);
const elements = {
  q: [ref(null), ref(null)],
};
const med = ref(false);
const medChange = () => {
  med.value = true;
  if (med.value == true) {
    document.querySelector("body").classList.add("qwe");
  }
};
onMounted(() => {
  machines.value = machines.value?.$refs.machines;
  posudas.value = posudas.value?.$refs.posudas;
  xolodilnik.value = xolodilnik.value?.$refs.xolodilnik;
});
const a1 = () => {
  if (!wash.value) {
    elements.q[0].value.classList.add("w");
    elements.q[1].value.classList.add("w");
    setTimeout(() => {
      elements.q[0].value.classList.remove("w");
      elements.q[1].value.classList.remove("w");
    }, 300);
  }
  setTimeout(() => {
    wash.value = true;
    dryer.value = false;
    ShowOpis.value = false;
    machines.value.style.background = "white";
    xolodilnik.value.style.background = "#edf3f6";
    posudas.value.style.background = "#edf3f6";
  }, 10);
};

const a2 = () => {
  setTimeout(() => {
    dryer.value = true;
    wash.value = false;
    ShowOpis.value = false;
    machines.value.style.background = "#edf3f6";
    xolodilnik.value.style.background = "#edf3f6";
    posudas.value.style.background = "white";
  }, 10);
  if (!dryer.value) {
    elements.q[0].value.classList.add("w");
    elements.q[1].value.classList.add("w");
    setTimeout(() => {
      elements.q[0].value.classList.remove("w");
      elements.q[1].value.classList.remove("w");
    }, 300);
  }
};

const a3 = () => {
  setTimeout(() => {
    ShowOpis.value = true;
    wash.value = false;
    dryer.value = false;
    machines.value.style.background = "#edf3f6";
    xolodilnik.value.style.background = "white";
    posudas.value.style.background = "#edf3f6";
  }, 10);
  if (!ShowOpis.value) {
    elements.q[0].value.classList.add("w");
    elements.q[1].value.classList.add("w");
    setTimeout(() => {
      elements.q[0].value.classList.remove("w");
      elements.q[1].value.classList.remove("w");
    }, 300);
  }
};
let kurtkar = ref(false);
let cities = ref([
  "Москва и Подмосковье",
  "Санкт-Петербург",
  "Севастополь",
  "Байконур",
  "Казань",
  "Нижний Новгород",
  "Екатеринбург",
  "Челябинск",
  "Омск",
  "Самара",
  "Ростов-на-Дону",
  "Уфа",
  "Красноярск",
  "Воронеж",
  "Волгоград",
]);
let gorodm = ref(false);
let selectedCity = ref("Москва и Подмосковье");
function selectCity(city) {
  selectedCity.value = city;
  kurtkar.value = false;
  gorodm.value = false;
}
function handleOutsideClick(event) {
  const isMoscow = event.target.closest(".moscow");
  const isMenu = event.target.closest(".menu");

  if ((med.value || gorodm.value, !isMoscow && !isMenu)) {
    kurtkar.value = false;
    med.value = false;
    gorodm.value = false;
    document.querySelector("body").classList.remove("qwe");
  }
}

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClick);
});
let menu = ref(false);
const Changemeen = () => {
  document.querySelector(".nomer").style.display = "flex";
  menu.value = !menu.value;
};
const newgorod = () => {
  kurtkar.value = true;
  gorodm.value = !gorodm.value;
};
</script>
<style lang="scss" scoped></style>
