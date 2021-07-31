interface Vehicle {
	name: string;
	year: number;
	summary(): string;
}

const oldCivic = {
	name: "civic",
	year: 2000,
	broken: true,
	summary: (): string => {
		return "Hello";
	},
};

const logCar = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(vehicle.summary());
};

logCar(oldCivic);
