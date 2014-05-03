# q-queue-decorator.js

**q-queue-decorator.js** is a little function decorator for asynchronous
sequential queue. The wrapped function must use promises provided by the Q
module.

```js
function long_task() {
 var defer = require('q').defer();

 setTimeout(function(){
  console.log("task completed");
  defer.resolve();
 }, 1000);

 return defer.promise;
};
long_task = require('q-queue-decorator')(long_task);

/* calls to long_task will run sequentially: */
long_task();
long_task();
long_task();
```

