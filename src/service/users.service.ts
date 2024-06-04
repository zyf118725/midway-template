import { Provide } from '@midwayjs/core';
import { formatSuccess } from '../util';

@Provide()
export class UsersService {
  async userInfo() {
    return formatSuccess({
      name: '张三',
      age: 18,
    });
  }
}
