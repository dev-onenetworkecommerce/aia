import React from 'react';

export default class Tables extends React.Component {
  render() {
    return (
    	<div>
    		<h2>Basic Table</h2>
    		<div className="table-responsive">
		      	<table>
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
			</div>

			<h2>Striped Rows</h2>
			<div className="table-responsive">
				<table className="-striped">
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

			<h2>Bordered Table</h2>
			<div className="table-responsive">
				<table className="-bordered">
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

			<h2>Hovered Table</h2>
			<div className="table-responsive">
				<table>
					<thead>
						<tr>
							<th>#</th>
							<th>Table Header</th>
							<th>Table Header</th>
							<th>Table Header</th>
						</tr>
					</thead>

					<tbody>
						<tr className="-link">
							<td>1</td>
							<td>Table Content</td>
							<td>Table Content</td>
							<td>Table Content</td>
						</tr>

						<tr className="-link">
							<td>2</td>
							<td>Table Content</td>
							<td>Table Content</td>
							<td>Table Content</td>
						</tr>

						<tr className="-link">
							<td>3</td>
							<td>Table Content</td>
							<td>Table Content</td>
							<td>Table Content</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2>Contextual Classes</h2>
			<div className="table-responsive">
				<table>
					<thead>
						<tr>
							<th>#</th>
							<th>Table Header</th>
							<th>Table Header</th>
							<th>Table Header</th>
						</tr>
					</thead>

					<tbody>
						<tr className="-emerald">
							<td>1</td>
							<td>Table Content</td>
							<td>Table Content</td>
							<td>Table Content</td>
						</tr>

						<tr className="-sun">
							<td>2</td>
							<td>Table Content</td>
							<td>Table Content</td>
							<td>Table Content</td>
						</tr>

						<tr className="-crimson">
							<td>3</td>
							<td>Table Content</td>
							<td>Table Content</td>
							<td>Table Content</td>
						</tr>

						<tr className="-sky">
							<td>4</td>
							<td>Table Content</td>
							<td>Table Content</td>
							<td>Table Content</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
    );
  }
}
