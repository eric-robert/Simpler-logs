export declare const Colors: {
    Reset: string;
    magenta: string;
    green: string;
    blue: string;
};
export declare function log(prefix: string, message: string, color: 'magenta' | 'green' | 'blue'): void;
export declare class Logger {
    private prefix;
    private level;
    constructor(prefix: string, level: 'important' | 'info' | 'debug' | 'none');
    log(level: 'important' | 'info' | 'debug', message: string): void;
}
