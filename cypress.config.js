const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    
    'baseUrl':"https://opensource-demo.orangehrmlive.com",

  // "viewportWidth":1920,
 //  "viewportHeight":1080,

   "viewportWidth":375,
   "viewportHeight":667,
      'video':true,
      'defaultCommandTimeout' : 20000,
      'pageLoadTimeout' : 120000,
       retries:{openMode:1},
       
    setupNodeEvents(on,config) {
      // implement node event listeners here
    },
  },
});
