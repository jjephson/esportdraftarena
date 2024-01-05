<template>
	<section class="page">
		<Header />
		<LayoutWrapper class="wrapper">
			<section class="content">
				<aside>
					<MainNav />
				</aside>
				<main class="content">
					<slot />
				</main>
			</section>
		</LayoutWrapper>
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
	}
	aside {
		flex-basis: 20%;
		min-width: 238px;
		border-right: 1px solid #BDAEAB;
	}
	main {
		padding: 40px 0 40px 40px;
		flex-basis: 79%;
	}
	.wrapper {
		margin: 0 auto;
	}
</style>