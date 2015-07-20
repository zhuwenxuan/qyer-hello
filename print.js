var QYER = {}
var plugins = QYER.plugins = {};
plugins.print = function(msg) {
    console.log("hello "+msg)
};
plugins.add = function(a,b) {
    console.log(a+b);
};