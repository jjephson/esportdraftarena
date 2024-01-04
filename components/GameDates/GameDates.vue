<template>
	<section>
		<h2>Game dates</h2>
		<dl class="game-dates">
			<dt>Season Start</dt>
			<dd>Tuesday, Oct 10</dd>

			<dt>Live Drafts End</dt>
			<dd>Sunday, Feb 25</dd>

			<dt>Full Season Registration Ends</dt>
			<dd>Sunday, Mar 3</dd>

			<dt>All Drafts End</dt>
			<dd>Monday, Mar 4</dd>
		</dl>
		<NuxtLink to="/">View all dates</NuxtLink>
	</section>
</template>

<script setup>
</script>

<style scoped>
	.game-dates {
		display: flex;
    	flex-flow: row wrap;
	}
	.game-dates dt {
		flex-basis: 20%;
	}
	.game-dates dd {
		flex-basis: 70%;
		flex-grow: 1;
		font-weight: bold;
	}
</style>