import { createStore } from 'vuex'
import { DiscussionsStore } from '@/store/discussions.store'
import { CommonStore } from '@/store/common.store'

export default createStore({
  modules: {
    discussions: DiscussionsStore,
    common: CommonStore
  }
})
