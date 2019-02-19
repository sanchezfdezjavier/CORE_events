

class EventEmitter {

    constructor(){
        this.events = {};
    }

    emit(eventName, callback){
        console.log(eventName, callback);
    }

    on(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName].push(callback);
        }else{
            this.events[eventName] = [callback];
        }
    }
}

exports = module.exports = EventEmitter;