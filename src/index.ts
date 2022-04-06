export const Colors = {
    Reset : "\x1b[0m",
    grey : "\x1b[2m\x1b[37m",
    white : "\x1b[37m",
    cyan : "\x1b[36m",
}

const start_time = Date.now()

export function log (prefix : string, message : string, color : 'cyan' | 'grey' | 'white') {
    
    //@ts-ignore
    if (typeof window === 'undefined') {
        console.log(`${Colors[color]}${prefix}${Colors.Reset} ${message}`)
    }
    else {
        console.log(`%c${prefix} %c ${message}`, `color:${color};`, `color:white;`)
    }
}

export class Logger {

    constructor (private prefix : string, private level = 'info' as ('important' | 'info' | 'debug' | 'none')) {}

    public log (message : string, level ?: 'important' | 'info' | 'debug' | undefined) {

        // delta time
        const delta_time = (Date.now() - start_time) / 1000
        // as nice string
        const delta_time_string = delta_time.toFixed(2)

        if (this.level == 'none') return
        if (level == undefined) level = this.level
        if ( level === 'important' ) {
            log(`[${delta_time_string}][${this.prefix}]`, message, 'cyan')
        }
        if ( level === 'info') {
            log(`[${delta_time_string}][${this.prefix}]`,message, 'white')
        }
        if ( level === 'debug') {
            log(`[${delta_time_string}][${this.prefix}]`,message, 'grey')
        }
    }

    public change_level (level : 'important' | 'info' | 'debug' | 'none') {
        this.level = level
    }

}