<template>
	<div class="Demo">
		<table>
			<thead>
				<tr>
					<th><span>1</span></th>
					<th><span>2</span></th>
					<th><span>2</span></th>
					<th class="fis"><span>3</span></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><span>11</span></td>
					<td><span>22</span></td>
					<td><span>22</span></td>
					<td class="fis"><span>33</span></td>
				</tr>
			</tbody>
		</table>
	</div>
	
</template>

<script>
	
</script>
<style lang="less">
	tr {
		border-bottom: 1px solid red;
		display: flex;
		width: 500px;
	}
	th {
		&:first-of-type {
			flex: 2;
		}
		flex: 1;
		position: relative;
		text-align: center;
		padding: 8px 0;
		&:not(.fis):after{
			content: "";
			display: inline-block;
			width: 1px;
			height: 10px;
			background-color: #000;
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
	}
	td {
		position: relative;
		text-align: center;
		padding: 8px 0;
		&:not(.fis):after{
			content: "";
			display: inline-block;
			width: 1px;
			height: 10px;
			background-color: #000;
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
	}
	table td, table th {
		border: none;
	}
.dp-container{
	height: 4rem; // 300px
	font-size: .4rem; // 30px
}

</style>