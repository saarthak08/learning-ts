const carMakers: string[] = ["Tesla", "Ford", "BMW"];

const carByMake: string[][] = [];

const car = carByMake[0];

const myCar = carMakers.pop();

carMakers.map((car: string): string => {
	return car.toUpperCase();
});

const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
