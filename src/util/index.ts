// 统一返回结构：成功
export function formatSuccess(data = null) {
  return {
    code: 1000,
    message: '操作成功',
    data,
  };
}

/**
 * 统一返回结构：失败
 */
export function formatError({
  code = 10002,
  msg = '服务器错误',
  data = null,
}) {
  return {
    code,
    msg,
    data,
  };
}

// 格式化数据
// 数据库等返回的数据有大量冗余的属性
export const formatData = (data: any) => JSON.parse(JSON.stringify(data));