<template>
  <div
    class="ui-badge inline-flex items-center no-wrap"
    :class="{ 'ui-badge--rounded': rounded }"
    role="status"
    :aria-label="label"
  >
    <v-icon name="fa-thumbs-up" />
    {{ label }}
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export default class UiBadge extends Vue {
  @Prop({ default: true }) rounded!: boolean
  @Prop() label!: string | number
}
</script>

<style scoped lang="scss">
.ui-badge {
  color: #fff;
  padding: 0.5em 0.9em;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
  min-height: 12px;
  font-weight: normal;
  vertical-align: baseline;

  &--rounded {
    border-radius: 1em;
  }
}
</style>
