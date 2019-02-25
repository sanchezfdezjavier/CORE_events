class EventEmitter{
    constructor(){
        this.listeners = {};
    }

    emit(eventName, ...args){
        if(this.listeners[eventName]){
            this.listeners[eventName].forEach(cb => cb(...args));
        }
    }

    on(eventName, callback){
        this.listeners[eventName]=this.listeners[eventName] || [];
        this.listeners[eventName].push(callback);
    }
}
exports = module.exports = EventEmitter;