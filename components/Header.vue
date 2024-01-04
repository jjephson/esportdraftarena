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
		color: rgba(244, 238, 236, 1);
		background: rgba(87, 43, 0, 1);
	}
	.header {
		justify-content: space-between;
		align-items: center;
	}
	a:link,
	a:visited {
		color: rgba(244, 238, 236, 1);
	}
</style>