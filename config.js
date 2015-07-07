System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "paths": {
    "app": "src",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  "packages": {
    "app": {
      "main": "app",
      "defaultExtension": "ts"
    }
  }
});

System.config({
  "map": {
    "finnsson/pagerjs": "github:finnsson/pagerjs@1.0.1",
    "jquery": "github:components/jquery@2.1.4",
    "knockout": "npm:knockout@3.3.0",
    "typescript": "github:mhegazy/typescript@v1.5-beta2",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:knockout@3.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

