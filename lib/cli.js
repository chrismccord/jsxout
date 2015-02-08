var reactTools = require('react-tools');


this.JSXOut = {
  run: function(){
    var input = process.argv[2];
    try {
      output = reactTools.transform(input, {});
      console.log(output);
    } catch(e) {
      console.error(e.toString());
    }
  }
}
