const express = require('express');
const swig = require('swig');

const app = express();

/** *配置模版引擎 */
// arg_1 为模板文件的后缀
// arg_2 为处理模板的函数
app.engine('html', swig.renderFile);
// 设置存放模板的目录
app.set('views', './views');
// 在开发过程中，取消模板缓存
swig.setDefaults({ cache: false });

app.get('/', (req, res, next) => {
  res.render('index');
});
