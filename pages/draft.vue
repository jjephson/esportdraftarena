<template>
	<section>
		<UserPlayerTable v-if="activeTeam"/>
		<DraftTable v-else />
	</section>
</template>

<script setup>
	import { ref } from 'vue';
	definePageMeta({
		layout: 'default'
	});
	const activeTeam = ref(false);
</script>