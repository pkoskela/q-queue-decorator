var _ = require('underscore');
var Q = require('q');

module.exports = function(fn){
 var tasks = [];
 var running = false;
 var pop = function() {
  if (!running)
  {
   running = true;
   var t = _.first(tasks);
   tasks = _.rest(tasks);
   fn.apply(null, t[1])
    .then(function(e){ t[0].resolve(e); })
    .fail(function(e){ t[0].reject(e); })
    .progress(function(e){ t[0].progress(e); })
    .finally(function(){
     running = false;
     if (_.size(tasks) > 0) pop();
    })
   ;
  }
 };
 return function() {
  var dfd = Q.defer();
  tasks.push([dfd, arguments]);
  pop();
  return dfd.promise;
 };
};
