<template>
	<section>
		<h2>My drafted team</h2>
		<table class="draft-table">
			<thead>
				<tr>
					<th>Rank</th>
					<th>Name</th>
					<th>Nickname</th>
					<th>Age</th>
					<th>Value</th>
					<th>Accuracy</th>
					<th>Stamina</th>
					<th>Strategic thinking</th>
					<th>Leadership</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
					<td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script setup>
	import { ref } from 'vue';

	const tableData = ref([
		['1', 'John', 'JohnTheKid', '15', '$56000', '100', '64', '90', '80'],
		['2', 'Matthew', 'NebulaNomad', '27', '$1000', '90', '33', '51', '62'],
		['3', 'Emily', 'InfinityInferno', '12', '$89000', '86', '15', '80', '16'],
		['4', 'Liam', 'StormSpecter', '33', '$1200', '78', '54', '12', '100'],
		['5', 'Mia', 'PhantomPirate', '30', '$500', '62', '54', '45', '9'],
		['6', 'William', 'BlitzBounty', '12', '$100000', '86', '49', '100', '73'],
	]);
</script>

<style scoped>
	.draft-table {
		border-collapse: collapse;
		margin: 25px 0;
		font-size: 0.9em;
		min-width: 400px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
		color: rgba(17, 5, 10, 1);
	}
	.draft-table thead tr {
		background-color: rgba(211, 161, 57, 1);
		text-align: left;
		font-weight: bold;
	}
	.draft-table th,
	.draft-table td {
		padding: 12px 15px;
	}
	.draft-table tbody tr {
		background-color: rgba(251, 240, 202, 1);
	}

	.draft-table tbody tr:nth-of-type(even) {
		background-color: rgba(247, 223, 151, 1)
	}
	.draft-table .number {
		text-align: center;
	}
</style>