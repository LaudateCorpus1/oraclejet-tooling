/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
module.exports = function (grunt) {
  grunt.initConfig({
  });
  

  // Load grunt tasks from NPM packages
  require("load-grunt-tasks")(grunt);
  
  // Merge sub configs
  var options = {
    config : {
      src : "build/*.js"
    },
    pkg: grunt.file.readJSON("package.json"),
    build_urls: grunt.file.readJSON("buildconf.json"),
    jet_version_token:'3.1.0',
    jet_doc_version_token:'310',
    version_token:'3.1.0',
    current_year_token: '2017'    
  }
  var configs = require('load-grunt-configs')(grunt, options);
  grunt.config.merge(configs);

  // Load tasks
//  grunt.loadTasks("build");

  grunt.registerTask('build', '', [
    'clean:files',
    'copy-files'
  ]);
};

