export const Colors = {
    Reset : "\x1b[0m",
    magenta : "\x1b[35m",
    green : "\x1b[32m",
    blue : "\x1b[34m",
}

export function log (prefix : string, message : string, color : 'magenta' | 'green' | 'blue') {
    
    //@ts-ignore
    if (typeof window === 'undefined') {
        console.log(`${Colors[color]}[${prefix}]${Colors.Reset} ${message}`)
    }
    else {
        console.log(`%c[${prefix}]', '%c ${message}`, `color:${color};`, `color:white;`)
    }
}

export class Logger {

    constructor (private prefix : string, private level : 'important' | 'info' | 'debug' | 'none') {}

    public log (level : 'important' | 'info' | 'debug', message : string, ) {

        if (this.level == 'none') return
        if ( level === 'important' ) {
            log(this.prefix + "-" + level, message, 'magenta')
        }
        if ( level === 'info' && this.level !== 'important' ) {
            log(this.prefix + "-" + level, message, 'blue')
        }
        if ( level === 'debug' && this.level !== 'info' && this.level !== 'important' ) {
            log(this.prefix + "-" + level, message, 'green')
        }
    
    }

}