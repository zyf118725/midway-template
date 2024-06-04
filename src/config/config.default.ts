import { MidwayConfig } from '@midwayjs/core';
import { News } from '../entity/news';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1717399831984_8364',
  koa: {
    port: 7001,
  },
  sequelize: {
    dataSource: {
      // 第一个数据源，数据源的名字可以完全自定义
      default: {
        database: 'midwaytest',
        username: 'devuser',
        password: 'devpass',
        host: 'aliyun-vobile-test-db.ops.vobile.org',
        port: 3306,
        encrypt: false,
        dialect: 'mysql',
        define: { charset: 'utf8' },
        timezone: '+08:00',
        entities: [News],
        // repositoryMode: true,
        // 本地的时候，可以通过 sync: true 直接 createTable
        sync: false,
      },
    },
  },
} as MidwayConfig;
