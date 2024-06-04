import {
  Controller,
  Get,
  Query,
  Inject,
  Param,
  Post,
  Body,
  Headers,
} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
// 1.引入
import { NewsService } from '../service/news.service';

@Controller('/news')
export class NewsController {
  @Inject()
  ctx: Context;

  @Inject()
  // 2.注入
  newsService: NewsService;

  @Get('/list')
  async list() {
    // 3. 使用
    const { data } = await this.newsService.handleList(1);
    return { code: 1000, data: data };
  }

  @Get('/detail')
  async detail(@Query('id') params) {
    // console.log('params: ', JSON.parse(JSON.stringify(params)));

    const p2 = this.ctx.query;
    console.log('p2: ', p2);

    return {
      code: 1000,
      data: '我是新闻详情',
    };
  }

  @Get('/dongtai/:id')
  async dongtai(@Param() params) {
    console.log('params: ', params); // {id: 1}
    return '处理动态列表逻辑';
  }

  @Post('/add')
  // 方式1:@Body
  async add(@Body() params, @Headers() headers) {
    console.log('headers: ', headers);
    console.log('params: ', params);

    return {
      code: 1000,
      data: '增加',
    };
  }
}
