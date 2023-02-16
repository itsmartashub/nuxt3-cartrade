<script setup>
	const props = defineProps({
		description: String,
	})
</script>

<template>
	<div
		id="CarDetailDescription"
		class="mt-5"
	>
		<p class="mb-10">
			{{ description }}
		</p>
	</div>
</template>
