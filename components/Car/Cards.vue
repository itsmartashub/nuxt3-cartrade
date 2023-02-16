<script setup>
	const { cars } = useCars()

	const favorite = useLocalStorage('favorite', {})

	/* 
    zelimo da pozovemo ovu fju kada god kliknemo na srce, tj fav, dakle komuniciranje child sa parentom, a kada god child komunicira sa parentom treba da emitujemo event. Idemo u Card.vue i kreiramo ga const emit = defineEmits(['favor']).
    A u parentu tj ovde cemo da ga osluskujemo sa @favor="handleFavorite"
     */
	const handleFavorite = id => {
		if (id in favorite.value) {
			delete favorite.value[id]
		} else {
			favorite.value = { ...favorite.value, [id]: true }
		}
	}
</script>

<template>
	<div
		id="CarCards"
		class="w-full"
	>
		<!-- 💥💥💥💥💥💥💥 
        //! Ovo bas i nije ok, jer kada rifresujemo stranicu, srca su sva outline, iako u localStorage vidimo da imamo neke fejvovane. To je zbog ssr itd. Zato trba da ovaj deo stavimo da je ili u <ClientOnly></ClientOnly> tagu, ili ako smo sto psoto sigurni da se ovo renderuje na client strani, da preimenujemo Card.vue u Card.client.vue.
        //! Inace, u oba slucaja cemo imati kao neki flash, jbg, to treba da stavimo neki kao placeholder/loader dok se ne renderuje, cisto zbog UX.
     -->
		<!-- <ClientOnly>
			<CarCard
				v-for="car in cars"
				:key="car.id"
				:car="car"
				@favor="handleFavorite"
				:favored="car.id in favorite"
			/>
		</ClientOnly> -->
		<CarCard
			v-for="car in cars"
			:key="car.id"
			:car="car"
			@favor="handleFavorite"
			:favored="car.id in favorite"
		/>
	</div>
</template>
