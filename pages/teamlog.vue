<template>
	<section>
		<h2>Team log</h2>
		<ul class="log">
			<li><Icon :name="home" size="20" /> Item 1</li>
			<li><Icon :name="home" size="20" /> Item 2</li>
		</ul>
	</section>
</template>

<script setup>
	definePageMeta({
		layout: 'default'
	});
	
	const home = ref('uil:home');
</script>

<style scoped>
	section {
		width: 100%;
	}
	.log {
		display: flex;
		flex-direction: column;
	}
	.log li {
		flex-basis: 100%;
		width:100%;
		background-color:#F4EEEC;
		margin: 0 0 2px;
		padding: 3px 7px;
		border-radius: 2px;
	}
	.log li:nth-of-type(even) {
		background-color: #E9DEDA;
	}
</style>