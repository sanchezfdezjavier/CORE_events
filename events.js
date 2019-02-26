class EventEmitter{
    constructor(){
        this.listeners = new Map();
    }

    emit(eventName, args){
        if(args === null){
            return this.listeners.get(eventName)();
        }
        return (args)=> this.listeners.get(eventName)(args);
    }

    on(name, callback){
        this.listeners.set(name, callback)
    }
}

exports = module.exports = EventEmitter;