<template>
  <div
    class="py-2 px-4 bg-white rounded-lg rounded-t-lg border border-gray-200"
  >
    <input
      class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
      :placeholder="placeholder"
      required
    />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export default class UiInput extends Vue {
  @Prop() placeholder!: string
}
</script>

<style scoped></style>
