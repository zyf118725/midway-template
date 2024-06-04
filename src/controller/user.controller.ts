import {
  Controller,
  Get,
  Query,
  Inject,
} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
// 1.引入
import { UsersService } from '../service/users.service';

@Controller('/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  usersService: UsersService;

  @Get('/info')
  async info(@Query() params) {
    const data = await this.usersService.userInfo();
    return data;
  }

}
