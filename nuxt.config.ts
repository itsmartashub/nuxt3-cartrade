// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// css: ['~/assets/css/main.css'],
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@nuxt/image-edge', '@vueuse/nuxt'],

	/* 
	runtimeConfig: {
		public: {
			SUPABASE_KEY: process.env.SUPABASE_KEY,
	  },
	} 
	*/
})
