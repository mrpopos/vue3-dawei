module.exports = {
  // 规则集配置
  rules: {
    // 规则：“type-enum” 要求提交的 type 必须是以下几种
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档变更
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退到上一个版本
        'build', // 打包
        'ci', // 持续集成
        'wip', // 工作进行中的提交
      ],
    ],

    // 规则：“scope-empty” 要求提交的 scope 不为空
    'scope-empty': [2, 'never'],

    // 规则：“subject-full-stop” 要求提交的 subject 结尾不包含句号
    'subject-full-stop': [0, 'never'],

    // 规则：“subject-case” 要求提交的 subject 遵循特定的情况
    'subject-case': [0, 'never'],
  },

  // 提交消息中必须包含的文本
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: 'Denote the scope of this change (optional):',
      // ... 更多提示信息
    },
    // ... 更多提示配置
  },
}
