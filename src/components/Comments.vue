<template>
  <section class="comments">
    <div class="comments__card">
      <div class="comments__header">
        <ui-avatar class="w-1/12" size="lg" :src="myImage" />
        <ui-input class="w-11/12" placeholder="Start a discussion" />
      </div>
      <div class="comments__body">
        <comment
          v-for="discussion in discussions"
          :key="discussion.id"
          :discussion="discussion"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import UiAvatar from '@/components/ui/UiAvatar.vue'
import UiInput from '@/components/ui/UiInput.vue'
import { Prop } from 'vue-property-decorator'
import { IDiscussion } from '@/models/discussions'
import Comment from '@/components/Comment.vue'

@Options({
  components: { Comment, UiInput, UiAvatar }
})
export default class CommentsComponent extends Vue {
  @Prop() discussions!: IDiscussion[]

  myImage = 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
}
</script>

<style scoped lang="scss">
.comments {
  &__card {
    @apply bg-white rounded shadow-xl overflow-hidden;
  }

  &__header {
    @apply bg-graywhite p-7 border-borders-2 flex flex-row justify-between items-center;
  }
}
</style>
