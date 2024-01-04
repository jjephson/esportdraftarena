
<template>
	<h2>Navigation</h2>
	<nav>
		<NuxtLink to="/"><Icon :name="home" size="20" />Home</NuxtLink>
		<NuxtLink to="/draft"><Icon :name="draft" size="20" />Draft</NuxtLink>
		<NuxtLink to="/login"><Icon :name="signin" size="20" />Login</NuxtLink>
		<NuxtLink to="/signup"><Icon :name="signup" size="20" />Sign up</NuxtLink>
	</nav>
</template>

<script setup>
	const home = ref('uil:home');
	const draft = ref('uil:notes');
	const signin = ref('uil:signin');
	const signup = ref('uil:user');
</script>

<style scoped>
	h2 {
		margin: 40px 0 10px 10px;
	}
	nav {
		display: flex;
		flex-direction: column;
		margin: 0 10px 0 0;
	}
	nav a:link,
	nav a:visited {
		margin: 0 0 3px;
		padding: 5px 10px;
		text-decoration: none;
	}
	nav a:hover,
	nav a:active,
	nav a:focus {
		text-decoration: underline;
		background-color: #F4EEEC;
		border-radius: 3px;
	}
	nav .icon {
		margin: 0 5px 0 0;
	}
</style>