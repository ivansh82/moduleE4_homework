function ElAppliance(categoryName, isTurnedOn, power){
    this.isTurnedOn = isTurnedOn;
    this.power = power;
    this.categoryName = categoryName
}
function Lamp(lampClass, color) {
    this.lampClass = lampClass
    this.color = color
    this.getInfo = function (){
        console.log(this)
    }
}
function Computer(brandName, memory) {
    this.brandName = brandName
    this.memory = memory
    this.getInfo = function (){
        console.log(this)
    }
}

Lamp.prototype = new ElAppliance('Lamp', true, 100)
const table_lamp = new Lamp('desktop', 'red')
Computer.prototype = new ElAppliance('Computer', false, 700)
const mac = new Computer('Macbook', 1000)

table_lamp.getInfo()
mac.getInfo()