import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';

describe('news.controller.test.ts', () => {
  let app: Application;
  beforeAll(async () => {
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  // 开始单元测试，名字随意
  it('test news/list', async () => {
    // 返回的结构，text为我们的data {req, header, status, text:{code:1000, data:'...'}}
    const result: any = await createHttpRequest(app).get('/news/list');
    // 注意result.text是string, 需要转为object
    const resData = JSON.parse(result.text); // 返回的是string
    expect(result?.status).toBe(200);
    expect(resData?.code).toBe(1000);
  });
})