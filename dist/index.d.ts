export declare const Colors: {
    Reset: string;
    grey: string;
    white: string;
    cyan: string;
};
export declare function log(prefix: string, message: string, color: 'cyan' | 'grey' | 'white'): void;
export declare class Logger {
    private prefix;
    private level;
    constructor(prefix: string, level?: "none" | "important" | "info" | "debug");
    log(message: string, level?: 'important' | 'info' | 'debug' | undefined): void;
    change_level(level: 'important' | 'info' | 'debug' | 'none'): void;
}
