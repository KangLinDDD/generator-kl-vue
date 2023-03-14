const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter your project name',
        default: 'vue-project'
      }
    ]).then(answers => {
      this.answers = answers;
    })
  }
  writing () {
    // 把每一个文件复制到目标目录中
    const templates = [
      '.browserslistrc',
      '.env.development',
      '.env.production',
      '.eslintrc.js',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'postcss.config.js',
      'README.md',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/main.js',
      'src/router.js',
      'src/assets/logo.png',
      'src/store/index.js',
      'src/store/modules/index.js',
      'src/store/modules/test.js',
      'src/utils/index.js',
      'src/views/About.vue',
      'src/views/Home.vue'
    ]
    console.log(this.fs)
    templates.forEach(item => {
      this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), this.answers)
    })
    this.installDependencies({
      callback: this.async() // This will block the process forever, and node will fail
    });

  }
  install () {
    this.yarnInstall();
  }
}