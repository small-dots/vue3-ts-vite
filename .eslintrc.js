module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    allowForLoopAfterthoughts: true, // 允许使用++ -- 等
    props: false, // 不允许重新分配函数参数
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/'] // @ 是设置的路径别名
      }
    ],
    'import/extensions': [2, 'never', { 'web.js': 'never', json: 'never' }],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }]
  },
  settings: {
    'import/resolver': {
      'babel-module-alias': {}
    }
  }
}
