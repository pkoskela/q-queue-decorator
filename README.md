# q-queue-decorator.js

**q-queue-decorator.js** is a little function decorator for asynchronous serial queue.

```js
long_task = require('q-queue-decorator')(long_task);

/* these will be run in serial: */
long_task();
long_task();
long_task();
```

