<template>
  <main class="home">
    <template v-if="isLoading">
      <loading-spinner />
    </template>
    <template v-else>
      <section class="home__comments">
        <comments :discussions="discussions" />
      </section>
    </template>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { DiscussionsStore } from '@/store/discussions.store'
import { Store } from '@/decorators/store'
import Comments from '@/components/Comments.vue' // @ is an alias to /src

@Options({
  components: {
    Comments,
    LoadingSpinner
  }
})
export default class HomeView extends Vue {
  @Store() discussionsStore!: DiscussionsStore

  get discussions() {
    return this.discussionsStore.discussions
  }

  get isLoading() {
    return this.discussionsStore.isLoading
  }

  mounted() {
    this.discussionsStore.fetchDiscussions()
  }
}
</script>

<style lang="scss" scoped>
.home {
  @apply flex flex-row justify-center text-left p-10;

  &__comments {
    @apply w-2/5;
  }
}
</style>
