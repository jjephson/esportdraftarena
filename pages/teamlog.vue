<template>
	<section>
		<h2>Team log</h2>
		<ul class="log">
			<li>Item 1</li>
			<li>Item 2</li>
		</ul>
	</section>
</template>

<script setup>
	definePageMeta({
		layout: 'default'
	});
</script>

<style scoped>
	.log {
		display: flex;
		flex-direction: column;
		border: 1px solid saddlebrown;
	}
	.log li {
		flex-basis: 100%;
		width:100%;
		background-color:#F4EEEC;
	}
	.log li:nth-of-type(even) {
		background-color: #E9DEDA;
	}
</style>