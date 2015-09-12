import React from 'react';

export default class Panels extends React.Component {
  render() {
    return (
    	<div>
    		<h2>Basic Panel</h2>
    		<div className="panel -default">
    			<div className="body">Basic Panel Example</div>
    		</div>

    		<h2>Panel with Header and Body</h2>
	      	<div className="panel -default">
	      		<div className="heading">Panel Title</div>
	      		<div className="body">Panel Body</div>
	      	</div>

	      	<h2>Panel with Footer and Body </h2>
	      	<div className="panel -default">
	      		<div className="body">Panel Body</div>
	      		<div className="footer">Panel Footer</div>
	      	</div>

	      	<h2>Contextual Alternatives</h2>
	      	<div className="panel -sky">
	      		<div className="heading">Panel Title</div>
	      		<div className="body">Panel Body</div>
	      	</div>

	      	<div className="panel -emerald">
	      		<div className="heading">Panel Title</div>
	      		<div className="body">Panel Body</div>
	      	</div>

	      	<div className="panel -sun">
	      		<div className="heading">Panel Title</div>
	      		<div className="body">Panel Body</div>
	      	</div>

	      	<div className="panel -crimson">
	      		<div className="heading">Panel Title</div>
	      		<div className="body">Panel Body</div>
	      	</div>

	      	<h2>Panel with Tables</h2>
	      	<div className="panel -default">
    			<div className="heading">Panel Title</div>
    			<div className="body">
    				Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed
					consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id
					dolor id nibh ultricies vehicula ut id eli
				</div>
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
    		</div>

    		<h2>Panel With List Groups</h2>
    		<div className="panel -default">
    			<div className="heading">Panel Title</div>
    			<div className="body">
    				Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed
					consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id
					dolor id nibh ultricies vehicula ut id eli
    			</div>
	    		<ul className="list-group">
	    			<li className="menuitem">List Item</li>
	    			<li className="menuitem">List Item</li>
	    			<li className="menuitem">List Item</li>
	    		</ul>
    		</div>
	    </div>
    );
  }
}
