class Vehicles {
	constructor(public wheels: number) {}

	public drive(): void {
		console.log("vroom vroom");
	}

	private honk(): void {
		console.log("Beep Beep");
	}
}

class Cars extends Vehicles {
	constructor(public color: string) {
		super(4);
	}
	public drive(): void {
		console.log("Car: vroom vroom");
	}
}

const vehicle = new Cars("Yellow");

vehicle.drive();
console.log(vehicle.color);
console.log(vehicle.wheels);
