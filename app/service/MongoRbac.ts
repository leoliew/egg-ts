// import { Service } from 'egg'
import { Context } from 'egg'
import { Base, Storage } from 'Rbac'

/**
 * Test Service
 */

export default class MongoRbac extends Storage {
  protected items: []
  protected ctx: Context

  constructor (ctx: Context) {
    super()
    this.ctx = ctx
  }

  /**
   * 添加权限或者角色
   * @param item
   */
  public async add (item: Base): Promise<boolean> {
    const {name} = item
    const role = await this.ctx.model.Role.findOne({name})
    if (role) {
      throw new Error(`Item ${name} already exists`)
    }
    const newRole = new this.ctx.model.Role()
    newRole.name = name
    newRole.grants = []
    await newRole.save()
    return true
  }

  /**
   * 删除权限或角色
   * @param item
   */
  // async remove (item: Base): Promise<boolean> {
  // const {items} = this
  // const {name} = item
  // if (!items[name]) {
  //   throw new Error(`Item ${name} is not presented in storage`)
  // }
  // // revoke from all instances
  // Object.keys(items).forEach((itemName: string) => {
  //   const {grants} = items[itemName]
  //   items[itemName].grants = grants.filter(grant => grant !== name)
  // })
  //
  // // delete from items
  // delete this.items[name]
  // return true
  // }

  /**
   * 赋予权限到某个角色
   * @param role
   * @param child
   */
  // async grant (role: Role, child: Base): Promise<boolean> {
  // const {name} = role
  // const {name: childName} = child
  //
  // if (!this.items[name]) {
  //   throw new Error(`Role ${name} is not exist`)
  // }
  //
  // if (!this.items[childName]) {
  //   throw new Error(`Base ${childName} is not exist`)
  // }
  //
  // if (!(role instanceof Role)) {
  //   throw new Error('Role is not instance of Role')
  // }
  //
  // if (name === childName) {
  //   throw new Error(`You can grant yourself ${name}`)
  // }
  //
  // const {grants} = this.items[name]
  // if (!grants.includes(childName)) {
  //   grants.push(childName)
  // }

  // return true
  // }

  /**
   * 从某个角色删除权限
   * @param role
   * @param child
   */
  // async revoke (role: Role, child: Base): boolean {
  // const {name} = role
  // const {name: childName} = child
  //
  // if (!this.items[name] || !this.items[childName]) {
  //   throw new Error('Role is not exist')
  // }
  //
  // const {grants} = this.items[name]
  // if (!grants.includes(childName)) {
  //   throw new Error('Item is not associated to this item')
  // }
  //
  // this.items[name].grants = grants.filter(grant => grant !== childName)

  // return true
  // }

  /**
   * 根据角色名称获取角色
   * @param name
   */
  // async get (name: string) {
  // if (name && this.items[name]) {
  //   return this.items[name].instance
  // }
  // return undefined
  // }

  /**
   * 获取所有的角色
   */
  // async getRoles (): Role[] {
  // return this.items
  //   .reduce((filtered: Role[], item: Object) => {
  //     const {instance} = item
  //
  //     if (instance instanceof Role) {
  //       filtered.push(instance)
  //     }
  //
  //     return filtered
  //   }, [])
  // }

  /**
   * 获取所有的权限
   */
  // async getPermissions (): Permission[] {
  // return this.items
  //   .reduce((filtered: Permission[], item: Object) => {
  //     const {instance} = item
  //
  //     if (instance instanceof Permission) {
  //       filtered.push(instance)
  //     }
  //
  //     return filtered
  //   }, [])
  // }

  /**
   * 获取改角色的权限
   * @param role
   */
  // async getGrants (role: string): Base[] {
  // if (role && this.items[role]) {
  //   const currentGrants = this.items[role].grants
  //
  //   return currentGrants.reduce((filtered: Object[], grantName: string) => {
  //     const grant = this.items[grantName]
  //     if (grant) {
  //       filtered.push(grant.instance)
  //     }
  //
  //     return filtered
  //   }, [])
  // }
  //
  // return []
  // }

}
