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
