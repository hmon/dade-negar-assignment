<template>
  <div
    class="comment__container"
    :class="{ 'comment__container--no-border': noBorder }"
  >
    <div class="w-1/12 flex flex-col items-center">
      <ui-avatar size="lg" :src="discussion.user.avatar || defaultAvatar" />
      <span
        v-if="discussion.replies?.length > 0"
        class="comment__has-replies-annotation"
      ></span>
    </div>
    <div class="w-11/12 pl-2">
      <div class="comment__head">
        <span class="comment__title">{{ discussion.user.name }}</span>
        <span class="text-gray-300">{{ offsetDate }}</span>
      </div>

      <p>{{ discussion.text }}</p>

      <div class="comment__actions">
        <ui-badge
          v-if="discussion.likes > 0"
          class="bg-gray-300 text-gray-600 cursor-pointer"
          :class="{ 'comment__like--liked': discussion.iLikedIt }"
          :label="discussion.likes"
        />
      </div>

      <div v-if="discussion.replies?.length > 0" class="comment__replies">
        <Comment
          v-for="reply in discussion.replies"
          :key="reply.id"
          :discussion="reply"
          no-border
        />
        <div class="comment__reply-input">
          <ui-avatar class="w-1/12" size="lg" :src="myImage" />
          <ui-input class="w-11/12" placeholder="Reply" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { IDiscussion } from '@/models/discussions'
import dayjs from 'dayjs'
import UiAvatar from '@/components/ui/UiAvatar.vue'
import UiInput from '@/components/ui/UiInput.vue'
import UiBadge from '@/components/ui/UiBadge.vue'

@Options({
  components: { UiBadge, UiInput, UiAvatar }
})
export default class Comment extends Vue {
  @Prop() discussion!: IDiscussion
  @Prop({ default: false }) noBorder!: boolean

  myImage = 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'

  dateToOffset(timestamp: number) {
    return dayjs(timestamp).fromNow()
  }

  get offsetDate() {
    return this.dateToOffset(this.discussion.date)
  }

  get defaultAvatar() {
    return require('@/assets/default-avatar.jpg')
  }
}
</script>

<style scoped lang="scss">
.comment {
  &__container {
    @apply flex flex-row justify-between p-7 border-borders-2;
    &:last-child,
    &--no-border {
      @apply border-none;
    }
  }

  &__has-replies-annotation {
    @apply block mt-2 h-full border-l-2 border-borders;
    width: 2px;
  }

  &__title {
    @apply block font-bold mb-2 mr-2;
  }

  &__head {
    @apply flex;
  }

  &__actions {
    @apply block flex-shrink;
  }

  &__like--liked {
    @apply bg-blue-500;
  }

  &__reply-input {
    @apply flex justify-between items-center px-7;
  }
}
</style>
