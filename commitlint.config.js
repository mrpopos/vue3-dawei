module.exports = {
  // 提交规则
  rules: {
    // 提交的type必须是以下之一：'fix', 'feat', 'chore', 'docs', 'style', 'refactor', 'perf', 'test'
    'type-enum': [
      2,
      'always',
      ['fix', 'feat', 'chore', 'docs', 'style', 'refactor', 'perf', 'test'],
    ],
    // 提交的scope必须是字符串
    'scope-enum': [2, 'always', []],
    // 提交的subject不能为空
    'subject-empty': [2, 'never'],
    // 提交的subject必须是50个字符以内
    'subject-full-stop': [0, 'never'],
    // 提交的subject必须是小写
    'subject-case': [0, 'never'],
  },
  // 提交的message必须符合Angular风格
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*): (.*)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
}
