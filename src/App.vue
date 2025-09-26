<script setup lang="ts">

/*
* <template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
*
* */

</script>

<template>
  <router-view></router-view>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
