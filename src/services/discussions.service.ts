import { singleton } from 'tsyringe'
import { BaseService } from '@/services/_base.service'
import { IDiscussion } from '@/models/discussions'
import discussions from '@/mock/discussions'

@singleton()
export class DiscussionsService extends BaseService {
  async getAll(): Promise<IDiscussion[]> {
    return discussions
  }
}
