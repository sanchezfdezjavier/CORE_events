//Import
const later = require('later');
const EventEmitter = require('events');
const emitter = new EventEmitter();
const Termostato = require('./termostato');

class Programador extends EventEmitter {

    constructor(data) {
        super();
        this.data = data;
        //local hour
        later.date.localTime();
        data.forEach((element) => {
            later.setInterval(() => termostato.indicarTemperaturaIdeal(element.temperatura), later.parse.text(data.hora));
            this.emit('ideal', element.temperatura);
        });
    }
}

exports = module.exports = Programador;