// import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/Test.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('init Data', async () => {
    const result = await ctx.service.rbac.initData('kkk');
    ctx.logger.info(result)
    // assert(result === 'hi, egg');
  });
});
