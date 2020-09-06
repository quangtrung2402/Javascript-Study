const EventEmitter = require(`events`)
class Customer extends EventEmitter {
    constructor(name, gender) {
        super();
        this.name = name;
        this.gender = gender;
    }
};

const callbackFunction = (customer,foods) => {
    for (let index in foods) {
        console.log(`${customer.name} call ${foods[index]}`);
    };
};

const Trung = new Customer("Trung", "male");
Trung.on('eventCallFood', callbackFunction);

const Thu = new Customer("Thu", "female");
Thu.on('eventCallFood', callbackFunction);

console.log(`Do something...`);
console.log(`Do task ...`);
Trung.emit('eventCallFood', Trung,["Com", "Pho"]);
Thu.emit('eventCallFood', Thu, ["Pizza", "Coke"]);