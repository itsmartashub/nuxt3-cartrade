import cars from '@/data/cars.json'

export default defineEventHandler(event => {
	// extractujemo ID iz params, i onda matchujemo taj id sa onim iz cars niza

	const { id } = event.context.params

	const car = cars.find(car => car.id === parseInt(id))

	console.log(id, car)

	if (!car) {
		throw createError({
			statusCode: 404,
			statusMessage: `Car with ID of ${id} does not exist`,
		})
	}

	return car
})

// api/car/5
