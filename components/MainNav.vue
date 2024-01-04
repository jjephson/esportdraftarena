
<template>
	<h2>Navigation</h2>
	<nav>
		<NuxtLink to="/"><Icon :name="home" size="20" />Home</NuxtLink>
		<NuxtLink to="/news"><Icon :name="news" size="20" />News</NuxtLink>
		<NuxtLink to="/calendar"><Icon :name="calendar" size="20" />Calendar</NuxtLink>
		<NuxtLink to="/players"><Icon :name="players" size="20" />Players</NuxtLink>
		<NuxtLink to="/login"><Icon :name="signin" size="20" />Login</NuxtLink>
		<NuxtLink to="/signup"><Icon :name="signup" size="20" />Sign up</NuxtLink>
	</nav>
	<h2>My team</h2>
	
	<nav>
		<NuxtLink to="/draft"><Icon :name="draft" size="20" />Draft</NuxtLink>
		<NuxtLink to="/ranking"><Icon :name="ranking" size="20" />Ranking</NuxtLink>
		<NuxtLink to="/watchlist"><Icon :name="watchlist" size="20" />Watch list</NuxtLink>
		<NuxtLink to="/teamlog"><Icon :name="teamlog" size="20" />Team log</NuxtLink>
		<NuxtLink to="/profile"><Icon :name="profile" size="20" />Profile</NuxtLink>
	</nav>
</template>

<script setup>
	const home = ref('uil:home');
	const draft = ref('uil:notes');
	const signin = ref('uil:signin');
	const signup = ref('uil:user');
	const profile = ref('uil:user');
	const ranking = ref('uil:analysis');
	const news = ref('uil:newspaper');
	const calendar = ref('uil:calender');
	const watchlist = ref('uil:list-ul');
	const teamlog = ref('uil:list-ol-alt');
	const players = ref('uil:user-check');
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