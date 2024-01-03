
<template>
	<nav>
		<NuxtLink to="/">Home</NuxtLink>
		<NuxtLink to="/login">Login</NuxtLink>
		<NuxtLink to="/signup">Sign up</NuxtLink>
	</nav>
</template>

<style scoped>
	nav {
		display: flex;
	}
	nav a {
		padding: 0.5rem 1rem;
		margin: 0 0 0 0.2rem;
		color: #000;
	}
	nav a:hover,
	nav a:active,
	nav a:focus {
		background: rgba(134, 198, 255);
		border-radius: 0.5rem;
	}
</style>