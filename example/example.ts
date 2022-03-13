import {Logger} from '../src/index'

const logger = new Logger('example', 'debug')

logger.log('important', 'Hello world')
logger.log('info', 'Hello world')
logger.log('debug', 'Hello world')