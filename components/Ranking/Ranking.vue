<template>
	<section>
		<h2>Player Ranking</h2>
		<table class="ranking-table">
			<thead>
				<tr>
					<th>Rank</th>
					<th>Nickname</th>
					<th>Team value</th>
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
	const tableData = ref([
		['1', 'JohnTheKid', '$56000'],
		['2', 'NebulaNomad', '$98000'],
		['3', 'InfinityInferno', '$516000'],
		['4', 'StormSpecter', '$5000'],
		['5', 'PhantomPirate', '$12000'],
	]);
</script>

<style scoped>
	.ranking-table {
		border-collapse: collapse;
		margin: 25px 0;
		font-size: 0.9em;
		min-width: 400px;
		color: rgba(17, 5, 10, 1);
	}
	.ranking-table thead tr {
		background-color: rgba(211, 161, 57, 1);
		text-align: left;
		font-weight: bold;
	}
	.ranking-table th,
	.ranking-table td {
		padding: 12px 15px;
	}
	.ranking-table tbody tr {
		background-color: rgba(251, 240, 202, 1);
	}

	.ranking-table tbody tr:nth-of-type(even) {
		background-color: rgba(247, 223, 151, 1)
	}
	.ranking-table .number {
		text-align: center;
	}
</style>