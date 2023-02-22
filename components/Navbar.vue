<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = () => {
	// 1. remove JWT token from Cookie browser
	const { error } = supabase.auth.signOut()
	if (error) {
		console.log(error)
		throw Error(error)
	}

	// 2. make user.value = null
	user.value = null

	// 3. Navigate to homepage
	navigateTo('/')
}
</script>

<template>
	<header
		id="Navbar"
		class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
	>
		<NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>

		<div v-if="user" class="flex">
			<NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
			<p class="cursor-pointer" @click="logout">Logout</p>
		</div>

		<NuxtLink v-else to="/login" class="mr-5">Login</NuxtLink>
	</header>
</template>
