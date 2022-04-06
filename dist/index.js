"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.log = exports.Colors = void 0;
exports.Colors = {
    Reset: "\x1b[0m",
    grey: "\x1b[2m\x1b[37m",
    white: "\x1b[37m",
    cyan: "\x1b[36m",
};
const start_time = Date.now();
function log(prefix, message, color) {
    //@ts-ignore
    if (typeof window === 'undefined') {
        console.log(`${exports.Colors[color]}${prefix}${exports.Colors.Reset} ${message}`);
    }
    else {
        console.log(`%c${prefix} %c ${message}`, `color:${color};`, `color:white;`);
    }
}
exports.log = log;
class Logger {
    constructor(prefix, level = 'info') {
        this.prefix = prefix;
        this.level = level;
    }
    log(message, level) {
        // delta time
        const delta_time = (Date.now() - start_time) / 1000;
        // as nice string
        const delta_time_string = delta_time.toFixed(2);
        if (this.level == 'none')
            return;
        if (level == undefined)
            level = this.level;
        if (level === 'important') {
            log(`[${delta_time_string}][${this.prefix}]`, message, 'cyan');
        }
        if (level === 'info') {
            log(`[${delta_time_string}][${this.prefix}]`, message, 'white');
        }
        if (level === 'debug') {
            log(`[${delta_time_string}][${this.prefix}]`, message, 'grey');
        }
    }
    change_level(level) {
        this.level = level;
    }
}
exports.Logger = Logger;
