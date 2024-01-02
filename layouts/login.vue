<template>
	<section class="page">
		<slot />
	</section>
</template>
  
<script setup>
</script>

<style scoped>
	section {
		display: flex;
        flex-direction: column;
        min-height: 100vh;
	}
</style>