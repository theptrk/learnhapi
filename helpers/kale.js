module.exports = function(context){
  var str = '';
  if (context.data.root.query.name) {
    str += context.data.root.query.name;
  }
  if (context.data.root.query.suffix) {
    str += context.data.root.query.suffix;
  }
  return str;
};