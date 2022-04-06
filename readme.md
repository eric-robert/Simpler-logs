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

// Logger with prefix "example" and defaults to debug level
const logger = new Logger('example', 'debug')

// Will be logged as a debug log (grey)
logger.log('Hello world')

// Will instead by 'info' level (white)
logger.log('Hello world', 'info')

// Will be more visable (cyan)
logger.log('Hello world', 'important')

```



