# generator-auto [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> 

##使用场景
 
 比如: 你接到一个项目:  在搭建框架的时候 你可能会考虑几点:
 
 1:具体有什么技术(什么类库支持 )
 
 2:生产环境的搭建 (现在基本前端都是基于node) 最起码我们公司是这样的
 
 3:编译环境的搭建  (现在很多前端开发者都用 coffeescript  less  sass  )  个人觉得这类人比较zb 我比较喜欢 用标准的js css   我就不吐槽了
 
 4:还有测试环境   (现在很少重视这点)
 
 5: 开发后如何打包  (现在都流行用 gulp  webpack grunt 等)
 
 相信多数前端同胞们都会考虑到此类问题        这时候你要创建目录 下载的依赖库 引入 js css ... 一系列的操作
 
 最重要的你还要保持团队环境和代码规范的一致性
 
 大家是不是觉得很费时间呢  
 
 
 这个时候 yeoman  就可以解决此类问题    几秒钟时间就搞定了以上所有的问题
 
 但是这个时候你回发现 yeoman提供的一些库 不能满足自己公司的需要 或者是 自己公司的规范
 
这个时候 需要 自己开发符合自己需求的 或者团队需要的规范    

属于我们自己的 generator
 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-auto using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-auto
```

Then generate your new project:
 
运行yo hulk:create

  ```bash
  yo auto:create
  ```
  根据目前做的项目去 通过命令行的形式去快速构建文件  提供开发效率
  
运行 yo auto:backbone
 ```bash
  yo auto:backbone
  ```
 运行这个命令 生成 backbone + requirejs 的前端项目架构
  MVC味道更浓，使用自定义的template模版库 适合复杂的前端业务
这个时候回自动构建 基于 Backbone Require 的 工程   这个时候回创建 temp文件夹 它下面的目录结构 如下

<img width=140 height=140 src="https://raw.githubusercontent.com/sohucw/generator-hulk/master/2.png">

具体的说明在 https://github.com/sohucw/BackboneRequireJS  中
    
运行hulk:angular
    
   ```bash
    yo auto:angular
    ```
 运行这个命令 生成 angular + requirejs 的前端项目架构
 
 强大的数据双向绑定
 View界面层组件化
 内置的强大服务（例如表单校验）
 路由简单
 不过 angular  引入的js较大，对移动端来说有点吃不消 语法复杂，学习成本高

运行 auto:director  
    
   ```bash
    yo auto:director
    
    npm install
    
    gulp 
    ```
    访问 http://localhost:8000/#company
 运行这个命令 生成 director + requirejs 的前端项目架构

### 这个方案最灵活  针对业务简单，只是路由分别切换到几个子模块，每个子模块基本都是拉一次数据，
             展示给用户，很少用户交互从而修改数据，改变视图的功能

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [chenjianwei01]()


[npm-image]: https://badge.fury.io/js/generator-auto.svg
[npm-url]: https://npmjs.org/package/generator-auto
[travis-image]: https://travis-ci.org//generator-auto.svg?branch=master
[travis-url]: https://travis-ci.org//generator-auto
[daviddm-image]: https://david-dm.org//generator-auto.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-auto
[coveralls-image]: https://coveralls.io/repos//generator-auto/badge.svg
[coveralls-url]: https://coveralls.io/r//generator-auto
