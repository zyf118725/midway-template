import { Provide } from '@midwayjs/core';

@Provide()
export class NewsService {
  async handleList(id) {
    return { data: `处理list数据, id=${id}` };
  }
}
