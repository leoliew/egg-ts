import * as assert from 'assert'
import { Context } from 'egg'
import { app } from 'egg-mock/bootstrap'
import { RBAC, Role } from 'rbac'
import MongoRbac from '../../../app/service/MongoRbac'

describe('test/app/model/Rbac.test.js', () => {
  let ctx: Context

  before(async () => {
    ctx = app.mockContext()
  })

  it('添加一个角色', async () => {
    const mongoRbac = new MongoRbac(ctx)
    const rbac = new RBAC({
      storage: mongoRbac,
    })
    const admin = new Role(rbac, 'admin')
    const result = await rbac.add(admin)
    assert(result === true)
  })
})
