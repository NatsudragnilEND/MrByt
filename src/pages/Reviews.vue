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
  <img class="wew" src="@/assets/img/pidar.png" alt="" />
</div>
<div class="container byst">
  <Gossip />
  <div class="nlow">
    <img src="@/assets/img/1.svg" alt="">
    <img src="@/assets/img/2.svg" alt="">
    <img src="@/assets/img/3.svg" alt="">
    <img src="@/assets/img/4.svg" alt="">
    <img src="@/assets/img/5.svg" alt="">
    <img src="@/assets/img/6.svg" alt="">
    <img src="@/assets/img/7.svg" alt="">
    <img src="@/assets/img/8.svg" alt="">
    <img src="@/assets/img/9.svg" alt="">
    <img src="@/assets/img/10.svg" alt="">
    <img src="@/assets/img/11.svg" alt="">
    <img src="@/assets/img/12.svg" alt="">
    <img src="@/assets/img/13.svg" alt="">
    <img src="@/assets/img/14.svg" alt="">
    <img src="@/assets/img/15.svg" alt="">
  </div>
  <Nizhniy class="xla"/>
</div>
</template>

  
<script setup>
import { ref, computed } from "vue";
import Gossip from "@/components/Gossip.vue";
import Nizhniy from "@/components/Nizhniy.vue";
</script>

  
<style lang="scss" scoped>
.zascock {
  width: 720px;
}
.nlow{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  img{
    width: 16.5rem;
    margin-top: 20px;
    transition: all 0.3s;
    &:hover{
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
