import { createDecorator, Vue } from 'vue-class-component'
import { container } from 'tsyringe'

export function Service(token?: string) {
  return (target: Vue, key: string) => {
    const metadata = Reflect.getMetadata('design:type', target, key)
    if (!token && !metadata) {
      return
    }
    createDecorator((options, key) => {
      options.mixins = options.mixins || []

      options.mixins.push({
        beforeCreate() {
          this[key] = token
            ? container.resolve(token)
            : container.resolve(metadata)
        }
      })
    })(target, key)
  }
}
