module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    // 设置 script(默认) 或 module，如果代码是在ECMASCRIPT中的模块
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  "extends": ["airbnb-base", "plugin:vue/recommended"],
  // webpack隐藏alias时，以下配置可让eslint识别alias
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "./"],
          ["~", "./"]
        ],
        extensions: [".vue", ".js"]
      }
    }
  },
  // 规则根据各个项目进行修改
  rules: {
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "beside",
      "multiline": "beside"
    }],
    "import/extensions": 0,
    "comma-dangle": ["error", "never"],
    "linebreak-style": "off",
    "quotes": ["error", "double"],
    "quote-props": ["error", "as-needed", { "keywords": true, "unnecessary": false }],
    "accessor-pairs": 2, // 定义对象的setter时必须有getter
    "block-spacing": [2, "always"], // 规定同一行代码块前后的空格
    "brace-style": [2, "1tbs", { // if else 的花括号换行规则
      "allowSingleLine": true
    }],
    "camelcase": [0, { // 变量名必须使用驼峰式
      "properties": "always"
    }],
    "comma-spacing": [2, { // 逗号前后的空格
      "before": false,
      "after": true
    }],
    "comma-style": [2, "last"], // 逗号写在行首还是行尾
    "constructor-super": 2, // 子类构造函数中必须调用 super
    "curly": [2, "multi-line"], // if条件后是否必须加"{"
    "eol-last": 2, // 文件最后必须有空行
    "generator-star-spacing": [2, { // generator 的 * 前后空格使用规则
      "before": true,
      "after": true
    }],
    "jsx-quotes": [2, "prefer-single"], // jsx中使用单引号
    "key-spacing": [2, { // 对象字面量冒号前后的空格
      "beforeColon": false,
      "afterColon": true
    }],
    "new-cap": [2, { // new关键字后类名应首字母大写
      "newIsCap": true,
      "capIsNew": false
    }],
    "new-parens": 2, // new 关键字后类应包含圆括号
    "no-array-constructor": 2, // 禁止使用 Array 构造函数创建数组
    "no-caller": 2, // 禁止使用 arguments.caller 和 arguments.callee
    "no-console": "off",
    "no-cond-assign": 2, // 禁止在条件语句中出现赋值操作
    "no-control-regex": 2, // 禁止正则表达式中出现 Ctrl 键的 ASCII 表示，即/\x1f/
    "no-delete-var": 2, // 禁止对变量使用 delete 关键字，删除对象的属性不受限制
    "no-dupe-args": 2, // 函数参数禁止重名
    "no-dupe-keys": 2, // 禁止对象出现重名键值
    "no-duplicate-case": 2, // 禁止 switch 中出现相同的 case
    "no-empty-character-class": 2, // 正则表达式中禁止出现空的字符集[]
    "no-empty-pattern": 2, // 禁止解构中出现空 {} 或 []
    "no-eval": 2, // 禁止使用 eval
    "no-ex-assign": 2, // catch 定义的参数禁止赋值
    "no-extend-native": 2, // 禁止扩展原生对象
    "no-extra-bind": 2, // 禁止额外的bind，例如箭头函数不允许用bind
    "no-extra-boolean-cast": 2, // 禁止不必要的布尔类型转换。
    "no-extra-parens": [2, "functions"], // 禁止额外的括号，仅针对函数体
    "no-fallthrough": 2, // switch语句需要有break,throw或return
    "no-floating-decimal": 2, // 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式
    "no-func-assign": 2, // 禁止对 function 声明重新赋值
    "no-implied-eval": 2, // 禁用隐式的eval(),例如setTimeout 和 setInterval 中传入字符串
    "no-inner-declarations": [2, "both"], // 禁止在嵌套的语句块中出现变量或 function 声明
    "no-invalid-regexp": 2, // 禁止使用非法的正则表达式
    "no-irregular-whitespace": 2, // 禁止使用不规范空格
    "no-iterator": 2, // 禁止使用 __iterator__
    "no-label-var": 2, // label 不得与已定义的变量重名
    "no-labels": [2, { // 禁用标签语句
      "allowLoop": false,
      "allowSwitch": false
    }],
    "no-lone-blocks": 2, // 禁止使用无效的块作用域
    "no-multi-str": 2, // 禁止使用 \ 来定义多行字符串
    // 禁止对原生对象复制
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2, // 不允许在表达式中取反左操作数
    "no-new-object": 2, // 禁止使用 new Object
    "no-new-require": 2, // 禁止使用 new require
    "no-new-symbol": 2, // 禁止使用 new Symbol
    "no-new-wrappers": 2, // 禁止 new Boolean、Number 或 String
    "no-obj-calls": 2, // 禁止把原生对象 Math、JSON、Reflect 当函数使用
    // 禁止使用0开头的数字表示八进制
    "no-octal": 2,
    "no-octal-escape": 2, // 禁止使用八进制转义符
    "no-path-concat": 2, // 禁止使用 __dirname + "file" 的形式拼接路径，应该使用 path.join 或 path.resolve 来代替
    "no-proto": 2, // 禁止使用 __proto__，已经被弃用
    "no-regex-spaces": 2, // 禁止在正则表达式中出现连续空格
    "no-return-assign": ["off"], // 禁止在return中赋值
    "no-self-assign": 2, // 禁止将自己赋值给自己
    "no-self-compare": 2, // 禁止自己与自己作比较
    "no-sequences": 2, // 禁止逗号操作符
    "no-shadow-restricted-names": 2, // 禁止使用保留字作为变量名
    "no-spaced-func": 2, // 函数调用时不允许出现空格
    "no-sparse-arrays": 2, // 禁止数组中出现连续逗号
    "no-this-before-super": 2, // 禁止在构造函数的 super 之前使用 this
    "no-throw-literal": 2, // 禁止 throw 字面量，必须 throw 一个 Error 对象
    "no-undef": 2, // 禁止访问未定义的变量或方法
    "no-undef-init": 2, // 禁止将 undefined 赋值给变量
    "no-unexpected-multiline": 2, // 禁止出现难以理解的多行代码
    "no-unmodified-loop-condition": 2, // 循环体内必须对循环条件进行修改
    "no-unsafe-finally": 2, // 禁止在finally块中出现 return、throw、break、continue
    "no-unused-vars": [2, { // 禁止定义不使用的变量
      "vars": "all", // 变量定义必须被使用
      "args": "none" // 对于函数形参不检测
    }],
    "no-useless-call": 2, // 禁止不必要的 call 和 apply
    "no-useless-computed-key": 2, // 禁止使用不必要计算的key
    "no-useless-constructor": 2, // 禁止无用的构造函数
    "no-with": 2, // 禁止 with
    "operator-linebreak": [2, "after", { // 断行时操作符位于行首还是行尾
      "overrides": {
        "?": "before",
        ":": "before"
      }
    }],
    "space-before-blocks": [2, "always"], // function 等的花括号之前是否使用空格
    "space-in-parens": [2, "never"], // 禁止或强制圆括号内的空格
    "template-curly-spacing": [2, "never"], // 模板字符串 ${} 前后的空格规则
    "wrap-iife": [2, "any"], // 立即执行函数必须要用括号括起来
    "yield-star-spacing": [2, "both"], // yield 的 * 前后空格规则
    "yoda": [2, "never"], // 禁止Yoda格式的判断条件，如 if (true === a)，应使用 if (a === true)
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "indent": ["error", 2, { "SwitchCase": 1 }], // 2个空格缩进
    "no-multi-spaces": ["error", { ignoreEOLComments: false }], // 禁止使用多个空格
    "no-redeclare": 2, // 禁止多次声明同一变量
    "one-var": 0, // 强制函数中的变量要么一起声明要么分开声明
    "eqeqeq": 0, // 必须使用全等
    "require-yield": 0, // 生成器函数必须有yield
    "semi": [2, "always"], // 语句强制分号结尾
    "use-isnan": 2, // 禁止比较时使用NaN，只能用isNaN()
    "valid-typeof": 2, // 必须使用合法的typeof的值
    "no-useless-escape": 0, // 禁用不必要的转义字符
    "rest-spread-spacing": 2, // 强制剩余和扩展运算符及其表达式之间有空格
    "prefer-arrow-callback": 0, // 要求回调函数使用箭头函数，避免this影响
    "no-duplicate-imports": 2, // 禁止重复模块导入
    "no-dupe-class-members": 2, // 禁止类成员中出现重复的名称
    "no-const-assign": 2, // 禁止修改 const 声明的变量
    "no-class-assign": 2, // 禁止修改类声明的变量
    "space-unary-ops": 2, // 强制在一元操作符前后使用一致的空格
    "semi-style": ["error", "last"], // 强制分号的位置在末尾
    "keyword-spacing": ["error", { "before": true, "after": true }], // 强制在关键字前后使用一致的空格
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"], // 禁止使用 空格 和 tab 混合缩进
    "no-multiple-empty-lines": ["error", { max: 2 }], // 不允许多个空行
    "no-trailing-spaces": 2, // 禁用行尾空格
    "no-unneeded-ternary": 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-whitespace-before-property": 2, // 禁止属性前有空白
    "object-curly-spacing": ["error", "always"], // 强制在花括号中使用一致的空格
    "padded-blocks": ["error", "never"], // 禁止块内填充
    "no-unreachable": 2, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    "semi-spacing": ["error", { "before": false, "after": true }], // 强制分号后有空格
    "space-before-function-paren": ["error", "always"], // 要求函数圆括号之前有一个空格
    "space-infix-ops": ["error", { "int32Hint": false }], // 要求中缀操作符周围有空格
    "spaced-comment": ["error", "always"], // 要求在注释前有空白
    "switch-colon-spacing": ["error", { "after": true, "before": false }], // 强制在 switch 的冒号右侧有空格
    "arrow-spacing": ["error", { "before": true, "after": true }], // 要求箭头函数的箭头之前或之后有空格
    "no-confusing-arrow": ["error", { "allowParens": true }], // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    "no-useless-rename": 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    "no-var": 2, // 要求使用 let 或 const 而不是 var
    "prefer-const": 2, // 要求使用 const 声明那些声明后不再被修改的变量
    "no-new": 0, // 禁止使用 new 以避免产生副作用
    "max-len": 0, // 单行最大长度
    "no-nested-ternary": 0, // 嵌套的三元表达式
    "no-plusplus": 0, // 一元操作符
    "consistent-return": 0, // 使用一致的 return 语句
    "vue/multi-word-component-names": 0, // 组件命名用多个单词
    "prefer-destructuring": 0, // 数组或对象解构，启用则强制优先使用解构
    "no-param-reassign": 0, // 对参数重新赋值
    "vue/no-unused-components": 0, // 有些组件在render中使用但是识别不出来
    "no-underscore-dangle": 0, // 停用这个规则，好多_this 和 _开头的属性
    "no-shadow": 0, // 弃用 禁止变量声明覆盖外层作用域的变量
    "arrow-parens": 0, // 弃用 箭头函数参数必须用括号包裹
    "no-restricted-syntax": 0, // 弃用 禁止使用特定的语法
    "no-continue": 0, // 弃用 禁用 continue
    "no-tabs": 0, // 弃用 禁用 tab
    "func-names": ["off", "as-needed"], // 要求或禁止命名的 function 表达式
    "vue/valid-v-model": 0, // 弃用 禁止不合理的v-model
    "vue/no-mutating-props": 0, // 弃用 不允许重新赋值props
    "vue/no-use-v-if-with-v-for": 0, // 弃用 v-for禁止和v-if一起
    "no-unused-expressions": 0 // 弃用 禁止未使用过的表达式
  },
  // 需要全局变量的话加在这里
  globals: {}
};
