// import cars from '@/data/cars.json'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(event => {
	const { city } = event.context.params
	const { make, minPrice, maxPrice } = getQuery(event) // getQuery ce biti auto imported

	//? data/cars.json VERSION
	/* 
	let filteredCars = cars

	filteredCars = filteredCars.filter(car => {
		return car.city.toLowerCase() === city.toLowerCase()
	})

	if (make) {
		filteredCars = filteredCars.filter(car => {
			return car.make.toLowerCase() === make.toLowerCase()
		})
	}
	if (minPrice) {
		filteredCars = filteredCars.filter(car => {
			return car.price >= parseInt(minPrice)
		})
	}
	if (maxPrice) {
		filteredCars = filteredCars.filter(car => {
			return car.price <= parseInt(maxPrice)
		})
	} 
	*/

	//? PRISMA VERSION
	const filters = {
		city: city.toLowerCase(),
	}

	if (make) filters.make = make
	if (minPrice || maxPrice) filters.price = {}
	if (minPrice) filters.price.gte = parseInt(minPrice)
	if (maxPrice) filters.price.lte = parseInt(maxPrice)

	// return filteredCars

	// return filters

	return prisma.car.findMany({
		where: filters,
	})
})

/* 
idemo u composables da kreiramo funckiju kojom cemo da fetchujemo i hendlujemo ove podatke, tj koristicemo nuxtov useFetch async f-ju kojom cemo da saljemo rikvest ovom apiju tj 'api/cars/${city} */
