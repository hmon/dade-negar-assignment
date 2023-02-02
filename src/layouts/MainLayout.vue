<template>
  <div class="main-layout">
    <div class="main-layout__header-graphics">
      <div class="main-layout__header-graphic-triangle"></div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class MainLayout extends Vue {}
</script>

<style scoped lang="scss">
.main-layout {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  &__header-graphics {
    position: relative;
  }

  &__header-graphic-triangle {
    @apply bg-main;
    z-index: -1;
    position: absolute;
    top: -320px;
    left: -100px;
    width: 150%;
    height: 400px;
    transform: rotate(352deg);
  }
}
</style>
