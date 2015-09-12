import React from 'react';

export default class Tables extends React.Component {
  render() {
    return (
    	<div>
    		<h2>Basic Table</h2>
	      	<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Table Header</th>
						<th>Table Header</th>
						<th>Table Header</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Table Content</td>
						<td>Table Content</td>
						<td>Table Content</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Table Content</td>
						<td>Table Content</td>
						<td>Table Content</td>
					</tr>
				</tbody>
			</table>

			<h2>Striped Table</h2>
			<table className="table -striped">
				<thead>
					<tr>
						<th>#</th>
						<th>Table Header</th>
						<th>Table Header</th>
						<th>Table Header</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Table Content</td>
						<td>Table Content</td>
						<td>Table Content</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Table Content</td>
						<td>Table Content</td>
						<td>Table Content</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Table Content</td>
						<td>Table Content</td>
						<td>Table Content</td>
					</tr>
				</tbody>
			</table>
		</div>
    );
  }
}
