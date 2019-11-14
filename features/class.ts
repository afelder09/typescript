class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('chugga chugga');
  }
  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('vroom');
  }
}

const vehicle = new Car(4, 'blue');
console.log(vehicle.color);
console.log(vehicle.wheels);
vehicle.drive();
vehicle.honk();
