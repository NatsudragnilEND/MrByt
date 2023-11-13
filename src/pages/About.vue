<template>
  <div class="vsa">
    <div class="fed">
      <h1>РЕМОНТ БЫТОВОЙ ТЕХНИКИ</h1>
      <div class="dost">
        <p class="zascock">Мастера компании “Мистер Быт” ремонтируют технику на выезде на протяжении 20 лет.</p>
      </div>
    </div>
    <img class="wew" src="@/assets/img/pngimg.png" alt="" />
  </div>
  <div class="container byst">
    <div class="wearr">
      <div class="weas">
        <img class="nvishe" src="@/assets/img/laen.svg" alt="" />
        <p class="spans"><span>64</span> шт.</p>
        <p class="osma">сервисных центра</p>
      </div>
      <div class="weas">
        <img class="nvishe" src="@/assets/img/laen.svg" alt="" />
        <p class="spans"><span>126</span> мастеров</p>
        <p class="osma">доступно ежедневно</p>
      </div>
      <div class="weas">
        <img class="nvishe" src="@/assets/img/laen.svg" alt="" />
        <p class="spans"><span>37</span> тыс.</p>
        <p class="osma">ремонтов в год</p>
      </div>
      <div class="weas">
        <img class="nvishe" src="@/assets/img/laen.svg" alt="" />
        <p class="spans"><span>2001</span> год</p>
        <p class="osma">основание компании</p>
      </div>
    </div>
    <p class="bbal">
      Сервис предоставляет услуги по ремонту бытовой техники уже более двадцати лет и имеет большой опыт восстановления
      поломок любого уровня сложности. Данная компания является авторизированным сервисом многих именитых брендов
      бытовой техники.
      <br /><br />
      Мистер Быт сотрудничает с такими производителями - LG, Samsung, AEG, Bosch, Miele и многими другими. В состав
      компании входят высококлассные специалисты в области ремонта которые способны восстановить техническое состояние
      вашей бытовой техники до заводского уровня.
      <br /><br />
      Услугами нашей компании можно воспользоваться в Москве и области, Екатеринбурге , Санкт-Петербурге и области,
      Нижнем Новгороде и некоторых других городах.
    </p>
    <img class="img" src="@/assets/img/img.svg" alt="" />
    <div class="belief">
      <h1 class="looks looks2">Как все начиналось?</h1>
      <p class="oznak">
        Наша история — это более 20 лет беспрерывного совершенствования, развития. Мы начали свой путь в 2001 году и с
        тех пор стали одним из лидеров отрасли.
      </p>
      <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
      <img class="margin" src="@/assets/img/hystory-line.svg" alt="" />
    </div>
    <div class="belief">
      <h1 class="looks looks2">Почему нам можно доверять?</h1>
      <p class="oznak">
        Для нас главное — качество услуг. Поэтому наша команда регулярно проходит курсы повышения квалификации и
        сертификации, чтобы быть в курсе актуальных технологий.
      </p>
      <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
      <div class="rilmnoga">
        <img src="@/assets/img/cert1.svg" alt="" />
        <img src="@/assets/img/cert2.svg" alt="" />
        <img src="@/assets/img/cert3.svg" alt="" />
        <img src="@/assets/img/cert4.svg" alt="" />
      </div>
    </div>
    <div class="belief">
      <h1 class="looks looks2">Кому вы доверяете ремонт?</h1>
      <p class="oznak">
        Все услуги проводят опытные, молодые, квалифицированные специалисты. Они знают, как качественно выполнить
        ремонт, сэкономив ваше время, деньги, нервы.
      </p>
      <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
      <div class="rilmnogadd">
        <img src="@/assets/img/ser1.svg" alt="" />
        <img src="@/assets/img/cer2.svg" alt="" />
        <img src="@/assets/img/cer3.svg" alt="" />
      </div>
    </div>
    <div class="belief">
      <h1 class="looks looks2">Остались вопросы?</h1>
      <p class="oznak">
        Часто для принятия правильного решения, стоит собрать больше информации, ниже ответы на самые популярные вопросы
      </p>
      <img class="mnoga" src="@/assets/img/mnoga.svg" alt="" />
      <div class="qleft">
        <div class="ntdaun">
          <div class="iren-container">
            <div @click="changeSlide" class="iren">
              <p class="zaduv">Сколько стоит диагностика?</p>
              <img :class="{ rotat: rotate }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
          <div class="iren-container">
            <div @click="changeSlide2" class="iren">
              <p class="zaduv">Какие документы оставит мастер?</p>
              <img :class="{ rotat: rotate2 }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide2" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
          <div class="iren-container">
            <div @click="changeSlide3" class="iren">
              <p class="zaduv">Сколько действует гарантия?</p>
              <img :class="{ rotat: rotate3 }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide3" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
          <div class="iren-container">
            <div @click="changeSlide4" class="iren">
              <p class="zaduv">Как происходит оплата?</p>
              <img :class="{ rotat: rotate4 }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide4" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
          <div class="iren-container">
            <div @click="changeSlide5" class="iren">
              <p class="zaduv">Сколько стоит выезд мастера?</p>
              <img :class="{ rotat: rotate5 }" class="eeo" src="@/assets/img/svector.svg" alt="" />
            </div>
            <transition name="menet">
              <p v-show="slide5" class="priory">
                Приоритетным направлением деятельности нашей специализированной компании является ремонт бытовой техники
                на дому.
              </p>
            </transition>
          </div>
        </div>
        <img class="ytvs" src="@/assets/img/masterimg.png" alt="" />
      </div>
      <div class="niz">
        <img class="vishee" src="@/assets/img/payment.svg" alt="" />
        <div class="pozh">
          <p class="npozh">Если у вас остались какие-либо вопросы или есть пожелания:</p>
          <div class="inps">
            <input class="inpp" @keyup="changee" v-model="input2" type="text" placeholder="Ваше имя" />
            <Nomer3 />
          </div>
          <p class="loohe">
            Нажимая кнопку «Отправить», вы соглашаетесь на обработку персональных данных и подтверждаете свое
            совершеннолетие в соответствии с
            <span class="pzda">политикой конфиденциальности</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import Nomer3 from "../components/Nomer3.vue";
import { useTrorf } from "@/store/trorf";
const trorf = useTrorf();
let input2 = ref("");
const changee = () => {
  trorf.input2 = input2.value;
};
watchEffect(() => {
  input2.value = trorf.input2
})

let slide = ref(false);
let rotate = ref(false);
const changeSlide = () => {
  slide.value = !slide.value;
  slide2.value = false
  slide3.value = false
  slide4.value = false
  slide5.value = false
  rotate.value = !rotate.value;
};
let slide2 = ref(false);
let rotate2 = ref(false);
const changeSlide2 = () => {
  slide2.value = !slide2.value;
  rotate2.value = !rotate2.value;
  slide.value = false
  slide3.value = false
  slide4.value = false
  slide5.value = false
};
let slide3 = ref(false);
let rotate3 = ref(false);
const changeSlide3 = () => {
  slide3.value = !slide3.value;
  rotate3.value = !rotate3.value;
  slide2.value = false
  slide.value = false
  slide4.value = false
  slide5.value = false
};
let slide4 = ref(false);
let rotate4 = ref(false);
const changeSlide4 = () => {
  slide4.value = !slide4.value;
  rotate4.value = !rotate4.value;
  slide2.value = false
  slide3.value = false
  slide.value = false
  slide5.value = false
};
let slide5 = ref(false);
let rotate5 = ref(false);
const changeSlide5 = () => {
  slide5.value = !slide5.value;
  rotate5.value = !rotate5.value;
  slide2.value = false
  slide3.value = false
  slide4.value = false
  slide.value = false
};
</script>
<style lang="scss" scoped>
.vishee {
  width: 450px;
  margin-right: 30px;
}
.inps {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}
.inpp {
  color: #3e3e3e;
  font-family: Proxima Nova;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 294px;
  height: 40px;
  flex-shrink: 0;
  width: 294px;
  height: 60px;
  flex-shrink: 0;
  background: #fff;
  padding-left: 20px;
  border-radius: 5px;
}
.npozh {
  color: #3e3e3e;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.pozh {
  background: #fed036;
  padding: 30px;
  border-radius: 7px;
}
.niz {
  display: flex;
  justify-content: center;
  align-items: center;
}
.iren {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 100px;
  .zaduv {
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 35px;
  }
  padding-right: 15px;
}
.ytvs {
  max-width: 35%;
}
.eeo {
  transition: 0.3s;
}
.rotat {
  transform: rotate(-90deg);
}
.qleft {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}
.priory {
  color: #3e3e3e;
  font-family: Proxima Nova;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 83%;
  text-align: center;
  padding: 30px;
  background: #edf3f6;
}
.rilmnoga {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    width: 320px;
  }
  margin-top: 25px;
}
.rilmnogadd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    box-shadow: 6px 9px 20px rgba(0, 0, 0, 0.349);
    width: 460px;
  }
  margin-top: 25px;
}
.margin {
  width: 100%;
  margin-top: 35px;
}
.belief {
  margin-top: 40px;
}
.img {
  width: 100%;
  margin-top: 20px;
}
.bbal {
  color: #3e3e3e;
  font-family: Proxima Nova;
  font-size: 24px;
  font-style: 44px;
  font-weight: 400;
  line-height: normal;
  margin-top: 50px;
}
.weas {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
}
.wearr {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.osma {
  color: #3e3e3e;
  font-family: Proxima Nova;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.spans {
  color: #3e3e3e;
  font-family: Proxima Nova;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 105%;
  span {
    color: #3e3e3e;
    font-family: Proxima Nova;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 105%;
  }
}
.byst {
  margin-bottom: 350px;
}
.nvishe {
  width: 330px;
}
.zascock {
  max-width: 650px;
}
</style>
