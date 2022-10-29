class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log("yoooo");
  }
  protected honk(): void {
    console.log("beep");
  }
  public startDriving() {
    this.drive();
    this.honk();
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
const vehicle = new Vehicle("orange");

const car = new Car(4, "blue");
car.startDriving();
