/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/24.
 */

var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var handlebars = require('handlebars');
var generators = require('yeoman-generator');
var path = require('path');
var author = "chenjianwei";
var MATCH_TEPLATE_NAMES = /^([,\w\-]+)$/;
var AnGenerator =  generators.NamedBase.extend({
  // The name `constructor` is important here
  constructor: function () {
    generators.Base.apply(this, arguments);


    this.option('skip-welcome-message', {
      desc: 'Skips the welcome message',
      type: Boolean,
      default: true
    });

  },
  initializing : function () {
    this.log(chalk.black('initializing'));
    /*    var baseFileName = this.baseFileName;
     this.viewJsTemplate = handlebars.compile(this.read("template_view_js.txt"));
     this.modelJsTemplate = handlebars.compile(this.read("template_model_js.txt"));
     this.htmlTemplate = handlebars.compile(this.read("template_html.html"));*/
  },
  prompting: function (prop) {
    var prompts = [{
      type: 'input',
      name: 'resourcesPath',
      message: 'The resources path that you project.',
      store: true,
      default: ''
    }];
    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      //   this.props = props;
      this.resourcesPath = props.resourcesPath;
    }.bind(this));
  },

  writing : function () {
    if (!this.resourcesPath) {
      this.log(chalk.red('The resourcesPath argument is required'));
      return
    }
    this.fs.copy(
      this.templatePath('app'),
      __dirname +'/' + this.resourcesPath,
      {}
    );

  },
  install: function () {
    // this.installDependencies();
  },


});

module.exports = AnGenerator;



