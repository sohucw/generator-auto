/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/20.
 */

var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var handlebars = require('handlebars');
var generators = require('yeoman-generator');
var path = require('path');
var author = "chenjianwei";
var MATCH_TEPLATE_NAMES = /^([,\w\-]+)$/;
var AutoGenerator =  generators.NamedBase.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    this.option('coffee'); // This method adds support for a `--coffee` flag

    this.option('skip-welcome-message', {
      desc: 'Skips the welcome message',
      type: Boolean
    });


    // And you can then access it later on this way; e.g.
    this.scriptSuffix = (this.options.coffee ? ".coffee": ".js");
    // This makes `appname` a required argument.
    // this.argument('appname', { type: String, required: true });
    // And you can then access it later on this way; e.g. CamelCased
    //  this.appname = _.camelCase(this.appname);
  },
  /* method1: function () {
   this.log(chalk.red('this method 1') + ' generator!');
   },*/

  init: function () {
    this.helperMethod = function () {
      this.log(chalk.blue('won\'t be called automatically'));
    }
  },
  initializing : function () {
    this.log(chalk.black('initializing'));
    var baseFileName = this.baseFileName;
    this.viewJsTemplate = handlebars.compile(this.read("template_view_js.txt"));
    this.modelJsTemplate = handlebars.compile(this.read("template_model_js.txt"));
    this.htmlTemplate = handlebars.compile(this.read("template_html.html"));
  },


  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the shining ' + chalk.red('generator-auto') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'resourcesPath',
      message: 'The resources path that you place javascript and html template files.',
      store: true,
      default: 'resources/app/'
    },
      {
        type    : 'input',
        name    : 'fileName',
        message : 'The app parent folder name which is the next level folder of resourcesPath.',
        default : 'test'  // Default to current folder name
      },
      {
        type: 'confirm',
        name: 'isCreateDir',
        message: 'Would you want to create dir?',
        default: false
      },
      {
        type    : 'list',
        name    : 'moduleType',
        message: 'The type of  module',
        choices: ['ItemView', 'CompositeView', 'LayoutView'],
        default : 'ItemView' // Default to current folder name
      }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
   //   this.props = props;
      this.fileName = props.fileName;
      this.resourcesPath = props.resourcesPath;
      this.isCreateDir = props.isCreateDir;
      this.moduleType = props.moduleType;
    }.bind(this));
  },
  writing: function () {
    if (!MATCH_TEPLATE_NAMES.test(this.fileName)) {
      this.log(chalk.red('The fileName argument is illegal! please pass the argument like this: [a-zA-Z0-9_-],[a-zA-Z0-9_-]'));
      return;
    }

    this.templateData = {
      isLayoutView: this.moduleType === 'LayoutView',
      isCompositeView: this.moduleType === 'CompositeView',
      isItemView: this.moduleType === 'ItemView',
      modelName: this.fileName+"Model",
      fileName: this.fileName,
      modelUrl: this.templateFilePath,
      author: author,
      time: new Date(),
      modelUrl: 'models/'+ this.fileName
    };

    var viewJsFileContent = this.viewJsTemplate(this.templateData);
    var modelJsFileContent = this.modelJsTemplate(this.templateData);
    var htmlFileContent = this.htmlTemplate(this.templateData);

    this.absoluteViewJsFilePath = this.resourcesPath + 'views/'+ this.fileName + '.js';
    this.absoluteModelJsFilePath = this.resourcesPath + 'models/'+ this.fileName + '.js';
    this.absolutehtmlFilePath = this.resourcesPath + 'templates/'+ this.fileName + '.html';

    // this.log(chalk.red(this.absoluteViewJsFilePath));

    this.write(this.absoluteViewJsFilePath, viewJsFileContent);
    this.write(this.absoluteModelJsFilePath, modelJsFileContent);
    this.write(this.absolutehtmlFilePath, htmlFileContent);

    /* this.fs.copyTpl(
     this.templatePath('index.html'),
     this.destinationPath('public/index.html'),
     {title: 'Templating with Yeoman'}
     );*/

/*    this.template('common.js', 'app/common/common.js');
    this.copy('index.js', 'app/views/index.js');
    this.copy('index.js', 'app/main.js');*/

/*    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );*/
  },
  conflicts: function () {
    //  this.log(chalk.black('conflicts'));
  },
  install : function () {
   // this.installDependencies();
     this.log(chalk.black('install'));
  },
  end: function () {
    this.log(chalk.black('end'));
  }


});

module.exports = AutoGenerator;



