class Event {
    constructor() {
        this.cached = new Map();
    }
    on(event, fn) {
        const currEventList = this.cached.get(event) || [];
        currEventList.push(fn);
        this.cached.set(event, currEventList);
    }
    emit(event, ...args) {
        const currEventList = this.cached.get(event, []);
        if (currEventList.length < 0) {
            return false;
        }
        Array.prototype.forEach.call(currEventList, (fn) => {
            fn.call(null, ...args);
        })
    }
}

const event = new Event();
event.on('enter', (person) => {
    console.log(person);
});

event.emit('enter', {name: 'dahu'});