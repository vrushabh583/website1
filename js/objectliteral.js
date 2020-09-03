// //object literal for creating objects
// let car = {
//     name: 'Maruti 800',
//     topSpeed: 120,
//     run: function () {
//         console.log("hii this is maruthi")
//     }
// }
// console.log(car)


//creatong consructor for car

function GeneralCar(GivenName, GivenSpeed) {
        this.name = GivenName,
        this.topSpeed = GivenSpeed,
        this.run = function () {
            console.log(`${this.name} is running`);
        }
        this.analyze = function(){
            console.log(`this car is slower by ${200 - this.topSpeed} km/h than mercedes`)
        }

}

car1 = new GeneralCar('Nisaan', 120);
car2 = new GeneralCar('Alto', 90);
car3 = new GeneralCar('swift', 150);
console.log(car1,car2,car3);