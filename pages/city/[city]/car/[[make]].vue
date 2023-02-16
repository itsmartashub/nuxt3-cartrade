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
</script>

<template>
	<!-- 💡💡💡💡💡💡💡💡💡
         Na koju god od ove dve rute da idemo, renderovace se ovo.
        /city/houston/car
        /city/houston/car/toyota
     -->
	<div id="page--make">
		<h1>[[make]].vue</h1>
		<h2>/city/[city]/car/[[make]]</h2>
		<CarCards />
	</div>
</template>
