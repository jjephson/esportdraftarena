<template>
	<section class="page">
		<Header />
		<section class="content">
			<slot />
		</section>
		<Footer />
	</section>
</template>
  
<script setup>
</script>

<style scoped>
	.page {
		display: flex;
        flex-direction: column;
        min-height: 100vh;
	}
	.content {
		display: flex;
		justify-content: center;
		padding: 40px 0;
	}
</style>