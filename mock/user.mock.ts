import { MockMethod } from 'vite-plugin-mock'

const mocks = [
  {
    url: '/mock/api/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      console.log(username, password)
      if (username === 'admin' && password === '123456') {
        return {
          code: 200,
          data: {
            userInfo: {
              name: 'admin',
              avator:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            },
            accessToken: 'admin-token',
          },
          message: '登录成功',
        }
      } else {
        return {
          code: 200,
          data: {
            userInfo: {
              name: 'editor',
              avator:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            },
            accessToken: 'editor-token',
          },
          message: '登录成功 editor',
        }
      }
    },
  },
] as MockMethod[]

export default mocks
