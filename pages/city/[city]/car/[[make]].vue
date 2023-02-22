<!-- <template>-->
<!-- 💡💡💡💡💡💡💡💡💡
         Na koju god od ove dve rute da idemo, renderovace se ovo.
        /city/houston/car
        /city/houston/car/toyota
     -->
<!-- <div id="make-optional">
		<Navbar />

		<div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
			<div class="mt-32 flex">
				<CarSidebar />
				<CarCards />
			</div>
		</div>
	</div>
</template> -->

<script setup>
// const route = useRoute()

// useHead({
// 	title: toTitleCase(route.params.name),
// })

// function toTitleCase(str) {
// 	return str.replace(/\w\S*/g, function (txt) {
// 		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
// 	})
// }

const route = useRoute()
const { data: cars, refresh } = await useFetchCars(route.params.city, {
	// useFetchCars ce imati dva parametra: city i filter
	minPrice: route.query.minPrice,
	maxPrice: route.query.maxPrice,
	make: route.params.make,
})
watch(
	() => route.query,
	() => window.location.reload(true)
)
</script>

<template>
	<!-- 💡💡💡💡💡💡💡💡💡
         Na koju god od ove dve rute da idemo, renderovace se ovo.
        /city/houston/car
        /city/houston/car/toyota
     -->
	<div id="page--make">
		<CarCards v-if="cars?.length" :cars="cars" />
		<h1 v-else class="text-red-400">No Cars Found With Filters</h1>
	</div>

	<!--
		/car/[car-name]/[car-id]  ➡️➡️➡️ ovo je ROUTE, dakle NIJE ENDPOINT 


		/api/car/[id]  ➡️➡️➡️  ovo je ENDPOINT, nama treba samo ID, da dohvatimo kola koja se traze
	
	 -->
</template>
