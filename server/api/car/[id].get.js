// import cars from '@/data/cars.json'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(event => {
	// extractujemo ID iz params, i onda matchujemo taj id sa onim iz cars niza

	const { id } = event.context.params

	//? data/cars.json VERSION
	// const car = cars.find(car => car.id === parseInt(id))

	//? PRISMA VERSION
	const car = prisma.car.findUnique({
		where: {
			id: parseInt(id),
		},
	})

	if (!car) {
		throw createError({
			statusCode: 404,
			statusMessage: `Car with ID of ${id} does not exist`,
		})
	}

	return car
})

// api/car/5
