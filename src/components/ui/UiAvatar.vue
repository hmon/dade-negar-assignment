<template>
  <div class="avatar" :style="sizeStyle">
    <img class="object-cover" :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

const sizes = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}

export default class UiAvatarComponent extends Vue {
  @Prop() src!: string
  @Prop() size!: keyof typeof sizes
  @Prop({ default: 'avatar' }) alt!: string

  get sizeStyle() {
    return this.size !== void 0
      ? { fontSize: this.size in sizes ? `${sizes[this.size]}px` : this.size }
      : null
  }
}
</script>

<style scoped lang="scss">
.avatar {
  @apply relative inline-block;
  vertical-align: middle;
  border-radius: 50%;
  font-size: 48px;
  height: 1em;
  width: 1em;

  img {
    border-radius: inherit;
    height: inherit;
    width: inherit;
  }
}
</style>
