class ElAppliance {
    constructor(categoryName, isTurnedOn, power) {
        this.isTurnedOn = isTurnedOn;
        this.power = power;
        this.categoryName = categoryName
    }
}
class Lamp extends ElAppliance{
    constructor(lampClass, color, categoryName, isTurnedOn, power) {
        super(categoryName, isTurnedOn, power);
        this.lampClass = lampClass
        this.color = color
        this.getInfo = function () {
            console.log('color is ' + this.color)
        }
    }
}
class Computer extends ElAppliance{
    constructor(brandName, memory, categoryName, isTurnedOn, power) {
        super(categoryName, isTurnedOn, power);
        this.brandName = brandName
        this.memory = memory
        this.getInfo = function () {
            console.log('memory is ' + this.memory)
        }
    }
}
const table_lamp = new Lamp('desktop', 'red', 'Lamp', true, 100)
const mac = new Computer('Macbook', 1000, 'Computer', false, 700)
console.log(table_lamp)
console.log(mac)