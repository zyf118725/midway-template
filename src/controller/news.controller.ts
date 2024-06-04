import {
  Controller,
  Get,
  Query,
  Inject,
  Param,
  Post,
  Body,
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

  // 查询列表
  @Get('/list')
  async list(@Query() params) {
    const data = await this.newsService.getList(params);
    return data;
  }

  // 增加新闻
  @Post('/add')
  async add(@Body() params) {
    return await this.newsService.addNews(params);
  }

  // 修改新闻
  @Post('/edit')
  async edit(@Body() params) {
    return await this.newsService.editNews(params);
  }

  // 删除新闻
  @Post('/delete')
  async delete(@Body() params) {
    return await this.newsService.deleteNews(params);
  }

  // 查询详情
  @Get('/detail')
  async detail(@Query('id') id) {
    this.ctx.set({ zyfres: 'zzzz' });
    return await this.newsService.handleDetail(id);
  }

  @Get('/dongtai/:id')
  async dongtai(@Param() params) {
    console.log('params: ', params); // {id: 1}
    return '处理动态列表逻辑';
  }
}
