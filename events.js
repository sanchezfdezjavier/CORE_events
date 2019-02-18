

class EventEmitter {

    emit(){
        console.log('emitter method');
    }
    on(){
        console.log('listener method');
    }
}




exports = module.exports = EventEmmitter;