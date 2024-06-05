import { Provide } from '@midwayjs/core';
import { formatError, formatSuccess, formatData } from '../util';
import { News } from '../entity/news'
import { Op } from 'sequelize'
@Provide()
export class NewsService {
  // 查询 - 分页查询
  async getList(params: any) {
    console.log('params: ', params);
    let limit = parseInt(params.pageSize);
    let offset = (limit * (params.pageNum - 1));
    try {
      const res = await News.findAndCountAll({
        limit, offset,
        // 按创建时间倒序
        order: [['createdAt', 'DESC']],
        // 模糊查询
        where: {
          name: {
            [Op.like]: `%${params?.name}%`
          }
        }
      });
      // console.log('res: ', formatData(res));
      const data = {
        list: res.rows,
        total: res.count,
        totalPage: Math.ceil(res.count / limit),
        pageSize: params.pageSize,
        pageNum: params.pageNum,
      }
      return formatSuccess(data);
    } catch (error) {
      return formatData(error?.message)
    }
  }

  // 查询详情
  async handleDetail(id: number) {
    console.log('id: ', id);
    if (!id) return formatError({ msg: `新闻id不能为空` });
    return formatSuccess(`处理detail数据 id: ${id}`);
  }

  // 增加新闻
  async addNews(data: any) {
    try {
      const res = await News.create(data);
      console.log('res: ', formatData(res));
      return formatSuccess('增加新闻成功');
    } catch (error) {
      console.log('error: ', formatData(error));
      return formatError({ msg: `增加新闻失败` });
    }
  }

  // 删除新闻
  async deleteNews(params: any) {
    try {
      const res = await News.destroy({ where: { id: params?.id } });
      console.log('res: ', formatData(res));
      if (res === 1) {
        return formatSuccess('删除新闻成功');
      } else {
        // 如果传了不存在的id，res返回为0
        return formatError({ msg: `删除新闻失败` });
      }
    } catch (error) {
      return formatError({ msg: `删除新闻失败` });
    }
  }


  // 修改新闻
  async editNews(params: any) {
    const obj: any = {}
    if (params?.name) obj.name = params?.name;
    if (params?.content) obj.content = params?.content;
    console.log('obj: ', obj);
    try {
      const res: any = await News.update(obj, { where: { id: params?.id } });
      console.log('res: ', formatData(res));
      return formatSuccess('修改新闻成功');
    } catch (error) {
      return formatError({ msg: `修改新闻失败` });
    }
  }

}
