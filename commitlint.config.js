module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert', 'ci', 'perf', 'build', 'wip', 'frame'],
    ],
    'scope-empty': [2, 'never'], // scope 不可为空
    'subject-case': [2, 'never', ['start-case', 'pascal-case']], // subject 不允许使用大写开头
    'header-max-length': [2, 'always', 72], // 限制提交信息的长度
  },
}
