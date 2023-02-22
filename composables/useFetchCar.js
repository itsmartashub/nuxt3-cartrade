export default id => {
	const { data, error } = useFetch(`/api/car/${id}`)

	if (error.value) {
		throw createError({
			statusCode: error.value.statusCode,
			statusMessage: error.value.statusMessage,
		})
	}

	return { data }
}
