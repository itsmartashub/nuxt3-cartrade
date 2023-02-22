import cars from '@/data/cars.json'

export default defineEventHandler(event => {
	console.log(
		`defineEventHandler() from server/api/[city].js  |   params: `,
		event.context.params
	)

	const { city } = event.context.params
	const { make, minPrice, maxPrice } = getQuery(event) // getQuery ce biti auto imported

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

	return filteredCars
})

/* 
idemo u composables da kreiramo funckiju kojom cemo da fetchujemo i hendlujemo ove podatke, tj koristicemo nuxtov useFetch async f-ju kojom cemo da saljemo rikvest ovom apiju tj 'api/cars/${city} */
