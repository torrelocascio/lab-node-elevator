const Person = require('./person.js');

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "up";
  }

  start() {
    this.intervalId = setInterval(() => {
      this.update(); 
  }, 1000);
 }
  stop() {
    clearInterval(this.intervalId) 
  }
  update() {
    this.log() 
  }
  _passengersEnter() {this.passengers.push(this.waitingList[i])}
  _passengersLeave() {this.passengers.pop(this.passengers)[j] }

  floorUp() {
    if(this.floor<this.MAXFLOOR){
      this.floor++;if (this.waitingList.length>0)
      { 
        for(var i = 0; i<this.waitingList.length;i++) 
        {
        if (this.waitingList[i].originFloor ===this.floor)
        {
        this.passengerEnter()
          }

        }
      } for(var j = 0; this.requests.length>0;j++)
      {if (this.passengers[j].destinationFloor===this.floor){
        this.passengersLeave()
      }

      }
    }
  }
  
  floorDown() {
    if(this.floor > 0){
      this.floor--;
    }
    this.direction = "down";
  }
  call() {
    this.waitingList.push(Person.Person)
    this.requests.push(Person.Person.originFloor)
  } 

  log() {
    console.log(`Directions ${this.direction} and floor: ${this.floor}`);
  }

}
module.exports = Elevator;

floorUp()