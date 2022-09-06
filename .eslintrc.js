module.exports = {
    env: {
      node: true,       // node의 env를 읽을 수 있게 도와줌
      browser: true,
      commonjs: true,
      es2021: true,
    },
    extends: [
        'eslint:recommended',
        "prettier",
    ],
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
    },
    rules: { 
      'prettier/prettier': 'error',   // prettier의 오류를 읽어줌
    },
    devServer: {         // 사용되지 않은 변수에 대해서 오류로 내뱉지 않음
      overlay: false,      
    },
  };
