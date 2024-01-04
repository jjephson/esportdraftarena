<template>
	<section>
		<table class="draft-table">
			<thead>
				<tr>
					<th v-for="(header, index) in tableHeaders" :key="index">{{ header }}</th>
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

	const tableHeaders = ref([
		'Column 1',
		'Column 2',
		'Column 3',
		'Column 4',
		'Column 5',
	]);

	const tableData = ref([
		['Row 1, Col 1', 'Row 1, Col 2', 'Row 1, Col 3', 'Row 1, Col 4', 'Row 1, Col 5'],
		['Row 2, Col 1', 'Row 2, Col 2', 'Row 2, Col 3', 'Row 2, Col 4', 'Row 2, Col 5'],
		['Row 3, Col 1', 'Row 3, Col 2', 'Row 3, Col 3', 'Row 3, Col 4', 'Row 3, Col 5'],
		['Row 4, Col 1', 'Row 4, Col 2', 'Row 4, Col 3', 'Row 4, Col 4', 'Row 4, Col 5'],
		['Row 5, Col 1', 'Row 5, Col 2', 'Row 5, Col 3', 'Row 5, Col 4', 'Row 5, Col 5'],
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
</style>