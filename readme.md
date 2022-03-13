## Simpler logs

Other logging systems are more feature rich. This is not that.

This is quick and dirty and works. I wnat this. This whole package is 40 lines. and really most of them are redundent.


### Usage

Install

```
yarn add simpler-logs
```

Create logger

```ts
import {Logger} from 'simpler-logs'

// Logger has prefix 'example' and logs everything 'info' and higher
const logger = new Logger('example', 'info')


// WIll show in purple
logger.log('important', 'Hello world')

// Will show in blue
logger.log('info', 'Hello world')

// Will not show, as debug is lower than 'info'
// If it were to show, it would be green
logger.log('debug', 'Hello world')
```



