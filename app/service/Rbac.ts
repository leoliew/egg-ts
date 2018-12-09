import { Service } from 'egg'

/**
 * Test Service
 */
export default class Rbac extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async initData (name: string) {
    const ctx = this.ctx
    await ctx.model.Permission.insertMany([{name: 'b'}])
    return `hi, ${name}`
  }
}
