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
          code: 0,
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
          code: 0,
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
  {
    url: '/mock/api/page',
    method: 'get',
    response: ({ query }) => {
      console.log('query', query)
      return {
        code: 0,
        data: {
          'list|10': [
            {
              id: '@guid',
              username: '@cname',
              age: '@integer(18, 30)',
              gender: '@pick(["男", "女"])',
              avator: '@image(200x200, @color)',
              email: '@email',
              phone: '@phone',
              address: '@city(true)',
              createAt: '@datetime',
            },
          ],
          total: 123,
        },
        message: 'success',
      }
    },
  },
] as MockMethod[]

export default mocks
