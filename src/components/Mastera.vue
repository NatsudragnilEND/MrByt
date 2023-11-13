<template>
  <section class="container">
    <h1 class="looks looks2">Хорошие мастера у нас?</h1>
    <p class="oznak">
      Наши жесткие критерии отбора мастеров позволяют держать качество ремонта
      на высшем уровне и оставлять гарантию.
    </p>
    <img class="mnoga mnogadva" src="@/assets/img/mnoga.svg" alt="" />
    <div class="vopwem">
      <div class="nikak">
        <div class="blizhaishdego">
          <div class="zelp">
            <img src="@/assets/img/zelp.svg" alt="" />
            <div class="texty">
              <p class="osn">ПОДБЕРЕМ БЛИЖАЙШЕГО МАСТЕРА</p>
              <p class="yeosn">
                Введите ваш адрес, и узнайте где ближайший наш мастер. И рассчет
                время прибытия
              </p>
            </div>
          </div>
          <form class="addr">
            <input
              placeholder="Введите адрес..."
              class="yput yeap"
              type="text"
            />
            <button class="sub sap">Проверить</button>
          </form>
          <div class="bbuton">
            <img src="@/assets/img/buttonn.svg" alt="" />
            <p class="ceryy">
              Нажимая на кнопку "Проверить", я даю свое согласие на обработку
              своих персональных данных.
            </p>
          </div>
        </div>
        <img class="day" src="@/assets/img/izmeritel.svg" alt="" />
      </div>
      <div class="docs">
        <div class="docks">
          <div class="dock">
            <img src="@/assets/img/checkcirc.png" alt="" />
            <p class="chekdocs">Проверям документы</p>
          </div>
          <div class="dock">
            <img src="@/assets/img/checkcirc.png" alt="" />
            <p class="chekdocs">Граждане РФ</p>
          </div>
          <div class="dock">
            <img src="@/assets/img/checkcirc.png" alt="" />
            <p class="chekdocs">Подтвежденные сертификаты</p>
          </div>
        </div>
        <img src="@/assets/img/samdocs.svg" alt="" class="samdocs" />
      </div>
    </div>

    <div class="svayper">
      <div class="pered">
        <img
          class="kard"
          :class="{ nses: nses }"
          @click="nses = true"
          src="@/assets/img/pered.svg"
          alt=""
        />
      </div>
      <swiper
        :slidesPerView="3"
        :spaceBetween="22"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="{
          prevEl: '.pered',
          nextEl: '.seled',
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="firstosn">
            <div class="infaa">
              <p class="nameea">Олег Самсонов</p>
              <img src="@/assets/img/line.svg" alt="" />
              <p class="opyt">7 лет опыта</p>
              <p class="viche">
                Мастер по ремонту стиральным машин и посудомоечных машин
              </p>
            </div>
            <img class="chelikmaster" src="@/assets/img/bor1.png" alt="" />
          </div>
          <div class="aez">
            <div class="canteyner">
              <img class="aeci" src="@/assets/img/kavychki.svg" alt="" />
              <p class="aezc">
                Занимаюсь ремонтом стиральных машин уже 7 лет, потому что решил
                когда-то почить свою. Отучился на профильном курсе в иституте
                М.И. Баумана.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="firstosn">
            <div class="infaa">
              <p class="nameea">Александр Корякин</p>
              <img src="@/assets/img/line.svg" alt="" />
              <p class="opyt">12 лет опыта</p>
              <p class="viche">
                Мастер по ремонту стиральным машин и посудомоечных машин
              </p>
            </div>
            <img class="chelikmaster" src="@/assets/img/bor2.png" alt="" />
          </div>
          <div class="aez">
            <div class="canteyner">
              <img class="aeci" src="@/assets/img/kavychki.svg" alt="" />
              <p class="aezc">
                Работал в официальных сервисах как стационарных так и выездных.
                За плечами огромный опыт. Восстанавливали даже то за что другие
                не хотели браться.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="firstosn">
            <div class="infaa">
              <p class="nameea">Семен Лакинов</p>
              <img src="@/assets/img/line.svg" alt="" />
              <p class="opyt">5 лет опыта</p>
              <p class="viche">
                Мастер по ремонту холодильников и морозильных камер
              </p>
            </div>
            <img class="chelikmaster" src="@/assets/img/bor3.png" alt="" />
          </div>
          <div class="aez">
            <div class="canteyner">
              <img class="aeci" src="@/assets/img/kavychki.svg" alt="" />
              <p class="aezc">
                Опыт ремонта бытового холодильного оборудования 5 лет. Имею
                специальное образование, в т.ч. дополнительное радиотехническое.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="firstosn">
            <div class="infaa">
              <p class="nameea">Эдуард Товмосян</p>
              <img src="@/assets/img/line.svg" alt="" />
              <p class="opyt">9 лет опыта</p>
              <p class="viche">
                Мастер по ремонту холодильников и морозильных камер
              </p>
            </div>
            <img class="chelikmaster" src="@/assets/img/bor4.png" alt="" />
          </div>
          <div class="aez">
            <div class="canteyner">
              <img class="aeci" src="@/assets/img/kavychki.svg" alt="" />
              <p class="aezc">
                Гражданин РФ, по профессии инженер холодильного оборудования и
                систем кондиционирования - Разряд 4. На постоянной основе
                нахожусь в МОСКВЕ.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="firstosn">
            <div class="infaa">
              <p class="nameea">Максим Рожков</p>
              <img src="@/assets/img/line.svg" alt="" />
              <p class="opyt">9 лет опыта</p>
              <p class="viche">
                Мастер по ремонту холодильников и морозильных камер
              </p>
            </div>
            <img class="chelikmaster" src="@/assets/img/bor5.png" alt="" />
          </div>
          <div class="aez">
            <div class="canteyner">
              <img class="aeci" src="@/assets/img/kavychki.svg" alt="" />
              <p class="aezc">
                Для меня важно что бы клиент оставался доволен и рекомендовал
                меня своим друзьям и родственникам, поэтому для меня, на первом
                месте, человеческое отношение.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="firstosn">
            <div class="infaa">
              <p class="nameea">Николай Вемсков</p>
              <img src="@/assets/img/line.svg" alt="" />
              <p class="opyt">710 лет опыта</p>
              <p class="viche">
                Мастер по ремонту стиральным машин и посудомоечных машин
              </p>
            </div>
            <img class="chelikmaster" src="@/assets/img/bor6.png" alt="" />
          </div>
          <div class="aez">
            <div class="canteyner">
              <img class="aeci" src="@/assets/img/kavychki.svg" alt="" />
              <p class="aezc">
                Опыт работы 10 лет в сервисных центрах по ремонту холодильников
                всех марок, любой сложности. Замена компрессора, термостата,
                реле, модуля, датчиков.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="firstosn">
            <div class="infaa">
              <p class="nameea">Владимир Каменских</p>
              <img src="@/assets/img/line.svg" alt="" />
              <p class="opyt">6 лет опыта</p>
              <p class="viche">
                Мастер по ремонту стиральным машин и посудомоечных машин
              </p>
            </div>
            <img class="chelikmaster" src="@/assets/img/bor7.png" alt="" />
          </div>
          <div class="aez">
            <div class="canteyner">
              <img class="aeci" src="@/assets/img/kavychki.svg" alt="" />
              <p class="aezc">
                Раньше я работал сварщиком, но потом закончил профильные курсы.
                Имею сертификаты офицальных брендов: Electrolux, Bosch, Samsung
                и Miele.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="seled">
        <img
          class="kard"
          :class="{ ses: ses }"
          @click="ses = true"
          src="@/assets/img/seled.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const modules = [Pagination, Navigation];
import { ref, watchEffect } from "vue";
let ses = ref(false);
let nses = ref(false);
watchEffect(() => {
  if (ses.value == true || nses.value == true) {
    setTimeout(() => {
      ses.value = false;
    nses.value = false;
    }, 120);
  }
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 500px;
  margin-top: 40px;
  margin-bottom: 35px;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;
  height: 500px;
  cursor: pointer;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
.swiper-pagination {
  display: block !important;
}
:deep(.swiper-pagination-bullet) {
  width: 15px !important;
  border-radius: 0 !important;
  width: var(
    --swiper-pagination-bullet-width,
    var(--swiper-pagination-bullet-size, 50px)
  ) !important;
  background-color: rgba(86, 255, 100, 0.967);
  opacity: 0.9;
}
:deep( .swiper-pagination-bullet-active) {
  background-color: rgb(0, 128, 255);
}
</style>
