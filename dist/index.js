"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.log = exports.Colors = void 0;
exports.Colors = {
    Reset: "\x1b[0m",
    magenta: "\x1b[35m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
};
function log(prefix, message, color) {
    //@ts-ignore
    if (typeof window === 'undefined') {
        console.log(`${exports.Colors[color]}[${prefix}]${exports.Colors.Reset} ${message}`);
    }
    else {
        console.log(`%c[${prefix}] %c ${message}`, `color:${color};`, `color:white;`);
    }
}
exports.log = log;
class Logger {
    constructor(prefix, level) {
        this.prefix = prefix;
        this.level = level;
    }
    log(level, message) {
        if (this.level == 'none')
            return;
        if (level === 'important') {
            log(this.prefix + "-" + level, message, 'magenta');
        }
        if (level === 'info' && this.level !== 'important') {
            log(this.prefix + "-" + level, message, 'blue');
        }
        if (level === 'debug' && this.level !== 'info' && this.level !== 'important') {
            log(this.prefix + "-" + level, message, 'green');
        }
    }
}
exports.Logger = Logger;
