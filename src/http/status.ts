export function getStatusMsg(status: string | number) {
  let msg = ''
  switch (status) {
    case 200:
      msg = '请求成功(200)'
      break
    case 400:
      msg = '请求错误(400)'
      break
    case 401:
      msg = '未授权，请登录(401)'
      break
    case 403:
      msg = '拒绝访问(403)'
      break
    case 404:
      msg = '请求出错(404)'
      break
    default:
      msg = '请求失败，请重试！'
      break
  }
  return msg
}
