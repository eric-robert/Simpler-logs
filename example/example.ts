import {Logger} from '../src/index'

const logger = new Logger('example', 'debug')

logger.log('Hello world')
logger.log('Hello world', 'info')
logger.log('Hello world', 'important')
