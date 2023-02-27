<script setup>
const props = defineProps({
	listing: Object,
})

const emits = defineEmits(['deleteClick'])
const config = useRuntimeConfig()
</script>

<template>
	<div class="shadow rounded overflow-hidden flex justify-between mb-4">
		<div class="flex">
			<!-- 
				IMAGE URL:   https://cckfdmkwihrpbqqcusrk.supabase.co/storage/v1/object/public/images/public/8938852620085387

				a listing.image je samo:   public/8938852620085387,

				dakle konzistenti deo je:   https://cckfdmkwihrpbqqcusrk.supabase.co/storage/v1/object/public/images/
				
				takodje zelimo da izvucemo:   https://cckfdmkwihrpbqqcusrk.supabase.co   koji se nalazi u: config.public.supabase.url
			 -->
			<img
				:src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
				alt=""
				class="w-80 mr-3 h-44"
			/>
			<div class="p-3">
				<h1 class="text-2xl">{{ listing.name }}</h1>
				<p class="text-blue-400">${{ listing.price }}</p>
			</div>
		</div>
		<div class="p-3 flex">
			<NuxtLink
				class="text-blue-400 mr-4"
				:to="`/profile/listings/view/${listing.id}`"
				>View</NuxtLink
			>
			<p
				class="text-red-400 cursor-pointer"
				@click="emits('deleteClick', listing.id)"
			>
				Delete
			</p>
		</div>
	</div>
</template>
