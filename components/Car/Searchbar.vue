<script setup>
	const city = ref('')
	const cityError = ref(false)
	// const router = useRouter()

	const handleSearch = () => {
		// router.push(`city/${city.value}/car`)
		if (!city.value.length) {
			return (cityError.value = true) // if city is empty, show error
		}
		navigateTo(`city/${city.value}/car`)
	}
	/* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
    u nuxtu ne moramo da koristimo useRouter() i router.push(`city/${city.value}/car`) vec postoji navigateTo() f-ja */
</script>

<template>
	<form
		id="CarSerchbar"
		class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
		@submit.prevent="handleSearch"
	>
		<input
			type="text"
			class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
			:class="cityError ? 'border-red-500 border' : ''"
			placeholder="Search by city..."
			v-model="city"
		/>
		<button
			class="bg-sky-500 px-10 text-white"
			type="submit"
		>
			Search
		</button>
	</form>
</template>
