//parent class Drone

class Drone {
    constructor(type = 'drone', speed = 0, battery = 100) {
        this.type = type;
        this.speed = speed;
        this.battery = battery;
    }  
    registerDroneOwner(deviceId, fullname, address) {
        this.owners.push({
            type: this.type,
            speed:this.speed,
            battery: this.battery,
            deviceId,
            fullname,
            address
        })
    }
    getDroneOwners(){
        return this.owners;
    }
}
class CivilDrone extends Drone {
    constructor(type = 'civil drone', speed = 50, battery = 100) {
        super(type, speed, battery);
        this.owners = []
    }
  
}
class MilitaryDrone extends Drone {
    constructor(type = 'military drone', speed = 150, battery = 100) {
        super(type, speed, battery);
        this.owners = []
    }
}

let civil = new CivilDrone();
civil = new CivilDrone('civil',30, 80)
civil.registerDroneOwner('drone#001', "Jan", 'Brussels');
civil.registerDroneOwner('drone#002', "Jos", "Antwerp");
civil.registerDroneOwner('drone#003', 'Mark', 'Mechelen')
console.log(civil.getDroneOwners())
civil.getDroneOwners().forEach(owner => {
    console.log(owner.fullname)
});
let military = new MilitaryDrone();
military.registerDroneOwner('drone#001','Kara', 'Turkey');
military.registerDroneOwner('drone#002', 'Pupua', 'USA')
console.log(military.getDroneOwners())

