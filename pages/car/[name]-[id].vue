<script setup>
	const route = useRoute()
	const { toTitleCase } = useUtilities()
	const { cars } = useCars()

	useHead({
		title: toTitleCase(route.params.name),
	})
	definePageMeta({
		layout: 'custom',
	})

	const car = computed(() => {
		return cars.find(car => car.id === parseInt(route.params.id))
	})

	// CUSTOM ERROR
	if (!car.value) {
		// kada kreiramo ovaj error, on ce da persist through all application. Zato treba da ocistimo taj error sa clearError() u error.vue (u handleError()). BTW, ovo je server side error.
		throw createError({
			statusCode: 404,
			message: `Car with ID of ${route.params.id} does not exist`,
		})
	}

	//* PREMESTENO U ./composables/useUtilities.js jer je koristimo na vise mesta (i u /pages/car/[city]/car.vue)
	// function toTitleCase(str) {
	// 	return str.replace(/\w\S*/g, function (txt) {
	// 		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	// 	})
	// }
</script>

<template>
	<!-- 
        💡💡💡💡💡
        car/toyota-5
     -->

	<!-- <div
		id="page--name-id"
		v-if="car"
	> -->
	<!--
        //*====  Ovo je u default.vue layoutu
        <Navbar />

        //*====  A ovo je custom.vue layout
		<div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
			<CarDetailHero />
			<CarDetailAttributes />
			<CarDetailDescription />
			<CarDetailContact />
		</div>

       //*====  Medjutim, sad nema ni <Navbar/> jer je on u default.vue layoutu, a mi smo ga overwritovali sa custom.vue layoutom. Pa cemo ga dodati u custom.vue
        -->

	<div
		id="page--name-id"
		v-if="car"
	>
		<CarDetailHero :car="car" />
		<CarDetailAttributes :features="car.features" />
		<CarDetailDescription :description="car.description" />
		<CarDetailContact />
	</div>
</template>
