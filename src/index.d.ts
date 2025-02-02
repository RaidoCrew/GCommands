/* GCommands by Hyro | MIT License */

export class Color {
    constructor(...args: any[]);

    getRGB(...args: any[]): void;

    getText(...args: any[]): void;

}

export class GCommands {
    constructor(...args: any[]);

    static captureRejectionSymbol: any;

    static captureRejections: boolean;

    static defaultMaxListeners: number;

    static errorMonitor: any;

    static init(opts: any): void;

    static listenerCount(emitter: any, type: any): any;

    static on(emitter: any, event: any): any;

    static once(emitter: any, name: any): any;

    static usingDomains: boolean;

}

export class GCommandsDispatcher {
    constructor(...args: any[]);

    addInhibitor(...args: any[]): void;

    getGuildPrefix(...args: any[]): void;

    removeInhibitor(...args: any[]): void;

    setGuildPrefix(...args: any[]): void;

}

export class GCommandsEventLoader {
    constructor(...args: any[]);

    createAPIMessage(...args: any[]): void;

    getSlashArgs(...args: any[]): void;

    inhibit(...args: any[]): void;

    loadMoreEvents(...args: any[]): void;

    messageEvent(...args: any[]): void;

    slashEvent(...args: any[]): void;

}

export class GCommandsGuild {
    constructor(...args: any[]);

    getCommandPrefix(...args: any[]): void;

    setCommandPrefix(...args: any[]): void;

}

export class GCommandsMessage {
    constructor(...args: any[]);

    buttons(...args: any[]): void;

    buttonsWithReply(...args: any[]): void;

    inlineReply(...args: any[]): void;

}

export class GEvents {
    constructor(...args: any[]);

}

export const GUpdater: {
};

export const SlashCommand: {
    BOOLEAN: number;
    CHANNEL: number;
    INTEGER: number;
    MENTIONABLE: number;
    ROLE: number;
    STRING: number;
    SUB_COMMAND: number;
    SUB_COMMAND_GROUP: number;
    USER: number;
};

export const version: string;

export function Buttons(...args: any[]): any;

export function GCommandsBase(...args: any[]): void;

export namespace GCommands {
    class EventEmitter {
        constructor(opts: any);

        addListener(type: any, listener: any): any;

        emit(type: any, args: any): any;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(type: any): any;

        listeners(type: any): any;

        off(type: any, listener: any): any;

        on(type: any, listener: any): any;

        once(type: any, listener: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any, ...args: any[]): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;

        static EventEmitter: any;

        static captureRejectionSymbol: any;

        static captureRejections: boolean;

        static defaultMaxListeners: number;

        static errorMonitor: any;

        static init(opts: any): void;

        static listenerCount(emitter: any, type: any): any;

        static on(emitter: any, event: any): any;

        static once(emitter: any, name: any): any;

        static usingDomains: boolean;

    }

}

export namespace GCommandsBase {
    class EventEmitter {
        constructor(opts: any);

        addListener(type: any, listener: any): any;

        emit(type: any, args: any): any;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(type: any): any;

        listeners(type: any): any;

        off(type: any, listener: any): any;

        on(type: any, listener: any): any;

        once(type: any, listener: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any, ...args: any[]): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;

        static EventEmitter: any;

        static captureRejectionSymbol: any;

        static captureRejections: boolean;

        static defaultMaxListeners: number;

        static errorMonitor: any;

        static init(opts: any): void;

        static listenerCount(emitter: any, type: any): any;

        static on(emitter: any, event: any): any;

        static once(emitter: any, name: any): any;

        static usingDomains: boolean;

    }

    const captureRejectionSymbol: any;

    const captureRejections: boolean;

    const defaultMaxListeners: number;

    const errorMonitor: any;

    const usingDomains: boolean;

    function init(opts: any): void;

    function listenerCount(emitter: any, type: any): any;

    function on(emitter: any, event: any): any;

    function once(emitter: any, name: any): any;

}