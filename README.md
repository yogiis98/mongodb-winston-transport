# mongodb-winston-transport

A MongoDB transport for [winston][0].

Current version supports only mongodb driver version 3.x and winston 3.x. 


## Usage
``` js
  var winston = require('winston');

  /**
   * Requiring `winston-mongodb` will expose
   * `winston.transports.MongoDB`
   */
  require('mongodb-winston-transport');

  winston.add(new winston.transports.MongoDB(options));
```

The MongoDB transport takes the following options. 'db' is required:

* __level:__ Level of messages that this transport should log, defaults to
'info'.
* __silent:__ Boolean flag indicating whether to suppress output, defaults to
false.
* __db:__ MongoDB connection uri, pre-connected `MongoClient` object or promise
which resolves to a pre-connected `MongoClient` object.
* __options:__ MongoDB connection parameters (optional, defaults to
`{poolSize: 2, autoReconnect: true, useNewUrlParser: true}`).
* __collection__: The name of the collection you want to store log messages in,
defaults to 'log'.
* __storeHost:__ Boolean indicating if you want to store machine hostname in
logs entry, if set to true it populates MongoDB entry with 'hostname' field,
which stores os.hostname() value.
* __label:__ Label stored with entry object if defined.
* __name:__ Transport instance identifier. Useful if you need to create multiple
MongoDB transports.
* __capped:__ In case this property is true, winston-mongodb will try to create
new log collection as capped, defaults to false.
* __cappedSize:__ Size of logs capped collection in bytes, defaults to 10000000.
* __cappedMax:__ Size of logs capped collection in number of documents.
* __tryReconnect:__ Will try to reconnect to the database in case of fail during
initialization. Works only if __db__ is a string. Defaults to false.
* __decolorize:__ Will remove color attributes from the log entry message,
defaults to false.
* __leaveConnectionOpen:__ Will leave MongoClient connected after transport shut down.
* __expireAfterSeconds:__ Seconds before the entry is removed. Works only if __capped__ is not set.

*Metadata:* Logged as a native JSON object in 'meta' property.

*Logging unhandled exceptions:* For logging unhandled exceptions specify
winston-mongodb as `handleExceptions` logger according to winston documentation.

## Querying and streaming logs

Besides supporting the main options from winston, this transport supports the
following extra options:

* __includeIds:__ Whether the returned logs should include the `_id` attribute
settled by mongodb, defaults to `false`.

## Installation

``` bash
  $ npm install winston
  $ npm install mongodb-winston-transport
```


#### Author: [Yogesh Yadav](https://github.com/yogiis98)

[0]: https://github.com/yogiis98/mongodb-winston-transport