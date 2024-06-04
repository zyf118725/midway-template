import { Provide } from '@midwayjs/core';
import { formatError, formatSuccess } from '../util';

@Provide()
export class NewsService {

  async handleList() {
    return '处理list数据';
  }

  async handleDetail(id: number) {
    console.log('id: ', id);
    if (!id) return formatError({ msg: `新闻id不能为空` });
    return formatSuccess(`处理detail数据 id: ${id}`);
  }
}
