<template>
    <div class="nit" :class="trorf.toroy ? 'nitoroy' : ''" v-show="trorf.otpr">{{ trorf.toroy ? 'Вы не ввели имя' : 'Отправлено' }}</div>
</template>

<script setup>
import { useTrorf } from '@/store/trorf.js'
const trorf = useTrorf()
</script>

<style lang="scss" scoped>

</style>
