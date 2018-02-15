module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-unused-vars': ['error', {
      vars: 'local',
      args: 'after-used',
      argsIgnorePattern: '^_$'
    }],
    indent: [1, 'tab', {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 0,
      // CallExpression: {
        // parameters: null,
      // },
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],
    'no-tabs': 0,
    'no-console': 0,



  },
  "plugins": [
    "prettier"
  ],
}