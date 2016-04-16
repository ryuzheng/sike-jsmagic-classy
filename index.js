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


module.exports = Class;