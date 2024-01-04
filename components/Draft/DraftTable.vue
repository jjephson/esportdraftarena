<template>
	<section>
		<table class="draft-table">
			<thead>
				<tr>
					<th>Topic 1</th>
					<th>Topic 2</th>
					<th>Topic 3</th>
					<th>Topic 4</th>
					<th>Topic 5</th>
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

<script>
	export default {
		data() {
			return {
				tableData: [
					['Row 1, Col 1', 'Row 1, Col 2', 'Row 1, Col 3', 'Row 1, Col 4', 'Row 1, Col 5'],
					['Row 2, Col 1', 'Row 2, Col 2', 'Row 2, Col 3', 'Row 2, Col 4', 'Row 2, Col 5'],
					['Row 3, Col 1', 'Row 3, Col 2', 'Row 3, Col 3', 'Row 3, Col 4', 'Row 3, Col 5'],
					['Row 4, Col 1', 'Row 4, Col 2', 'Row 4, Col 3', 'Row 4, Col 4', 'Row 4, Col 5'],
					['Row 5, Col 1', 'Row 5, Col 2', 'Row 5, Col 3', 'Row 5, Col 4', 'Row 5, Col 5'],
				],
			};
		},
	};
</script>

<style scoped>
	.draft-table {
		border-collapse: collapse;
		margin: 25px 0;
		font-size: 0.9em;
		min-width: 400px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	}
	.draft-table thead tr {
		background-color: #009879;
		color: #ffffff;
		text-align: left;
	}
	.draft-table th,
	.draft-table td {
		padding: 12px 15px;
	}
	.draft-table tbody tr {
		border-bottom: 1px solid #dddddd;
	}

	.draft-table tbody tr:nth-of-type(even) {
		background-color: #f3f3f3;
	}

	.draft-table tbody tr:last-of-type {
		border-bottom: 2px solid #009879;
	}
	.draft-table tbody tr.active-row {
		font-weight: bold;
		color: #009879;
	}
</style>