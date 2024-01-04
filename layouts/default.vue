<template>
	<section class="page">
		<Header />
		<section class="content">
			<aside>
				<MainNav />
			</aside>
			<main class="content">
				<slot />
			</main>
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
	}
	aside {
		flex-basis: 200px;
		border-right: 1px solid #BDAEAB;
	}
	main {
		flex-basis: 70%;
	}
</style>