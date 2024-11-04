/* eslint-env node */
/**
 * feat：新功能
 * update：更新某功能
 * fix：修补某功能的bug
 * revert: 回退
 * refactor：重构某个功能
 * perf: 优化构建工具或运行时性能
 * style：仅样式改动
 * docs：仅文档新增/改动
 * chore：构建过程或辅助工具的变动
 * merge: 合并分支
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'update', 'fix', 'revert', 'refactor', 'perf', 'style', 'docs', 'chore', 'merge']
    ],
    'type-case': [0],
    'subject-case': [0]
  }
}
