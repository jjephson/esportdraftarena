<template>
	<header>
		<LayoutWrapper class="header">
			<Logo />
			<MainNav />
		</LayoutWrapper>
	</header>
</template>

<style scoped>
	header {
		display: flex;
		justify-content: center;
		padding: 2rem 0;
		background: rgba(242, 249, 255);
		border-top: 2px solid rgba(134, 198, 255);
	}
	.header {
		justify-content: space-between;
		align-items: center;
	}
</style>