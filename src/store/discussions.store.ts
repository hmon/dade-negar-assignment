import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { RemoteData } from '@/models/remote-data'
import { container } from 'tsyringe'
import { DiscussionsService } from '@/services/discussions.service'
import { IDiscussion } from '@/models/discussions'

@Module({
  name: 'discussions',
  namespaced: true
})
export class DiscussionsStore extends VuexModule {
  private _remoteData = RemoteData.NotAsked

  private _discussions: IDiscussion[] = []

  @Mutation
  public setRemoteData(state: RemoteData) {
    this._remoteData = state
  }

  public get discussions() {
    return this._discussions
  }

  public get isLoading() {
    return this._remoteData === RemoteData.Pending
  }

  @Mutation
  public setPosts(discussions: IDiscussion[]) {
    this._discussions = discussions
  }

  @Action
  async fetchDiscussions() {
    const discussionsService = container.resolve(DiscussionsService)

    if (this._remoteData !== RemoteData.NotAsked) {
      return
    }

    this.setRemoteData(RemoteData.Pending)

    try {
      const discussions = await discussionsService.getAll()

      this.setRemoteData(RemoteData.Success)
      this.setPosts(discussions)
    } catch (error: unknown) {
      this.setRemoteData(RemoteData.Failure)
      this.context.dispatch('common/showErrorMessage', error)
    }
  }
}
