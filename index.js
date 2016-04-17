const Class = function(args) {
  var fn = function(){};
  for(var a in args){
    // console.log("a =", a);
    if (a == 'initialize'){
      fn = args.initialize;
      // console.log("because a == initialize, so fn =", fn);
    }else{
      fn.prototype[a] = args[a];
      // console.log("if a = ", a, ", so fn.prototype[a] =", args[a]);
    }
  }
  return fn;
};

var hasProp = {}.hasOwnProperty;

var extend = function(child, parent) {
  // 拷贝静态方法（类方法）
  for (var key in parent) {
    if (hasProp.call(parent, key))
      child[key] = parent[key];
  }

  // 设置原型继承
  child.prototype.constructor = child;
  child.prototype.__proto__ = parent.prototype;

  return child;
};

module.exports = {
  Class: Class,
  extend: extend
};