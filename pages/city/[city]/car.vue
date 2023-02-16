<script setup>
	const route = useRoute()
	const { toTitleCase } = useUtilities()

	useHead({
		title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`,
	})
	definePageMeta({
		layout: 'custom',
	})

	//* PREMESTENO U ./composables/useUtilities.js jer je koristimo na vise mesta (/pages/car/[name]-[id])
	// function toTitleCase(str) {
	// 	return str.replace(/\w\S*/g, function (txt) {
	// 		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	// 	})
	// }
</script>

<template>
	<!-- 💡💡💡💡💡💡💡💡💡
        //*    Na koju god od ove dve rute da idemo, renderovace se ovo.
        //*      /city/houston/car
        //*      /city/houston/car/toyota
     -->
	<div id="page--car">
		<h1>car.vue</h1>

		<!-- <Navbar /> -->

		<!-- <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
			<div class="mt-32 flex"> -->

		<!-- 💥💥💥💥💥💥💥
            <NuxtErrorBoundary> catchuje error. Konkretno u ovom slucaju catchuje onaj createError iz Sidebar.vue, i kad ih catchuje on NE RENDERUJE OVE KOMPONENTE KOJE SU U NJEMU TJ: <CarSidebar /> i <NuxtPage />. Zato cemo dodati slot koji ce imati id #error
        -->
		<NuxtErrorBoundary>
			<CarSidebar />
			<NuxtPage />
			<template #error="{ error }">
				<div class="text-center mx-auto flex flex-col">
					<h1 class="text-5xl text-red-600 mb-4">Sorry, something went wrong</h1>
					<code>{{ error }}</code>
					<button
						class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
						@click="error.value = null"
					>
						Go Back
					</button>
				</div>
			</template>
		</NuxtErrorBoundary>
		<!-- <CarCards /> -->
		<!-- 
                //*     Ovaj <NuxtPage /> ce biti svaka ruta na 
                //*     /city/houston/car/* ako sam ja dobro shvatila,  ono sto je u folderu car
			</div>
		</div> 
        -->
	</div>
</template>
