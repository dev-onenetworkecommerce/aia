import React from 'react';

export default class Panels extends React.Component {
  render() {
    return (
    	<div>
        <h1 className="doc-heading">Panels</h1>

        <section className="doc-bottom-space-large">
      		<h2>Basic Panel</h2>
      		<div className="panel -default">
      			<div className="body">Basic Panel Example</div>
      		</div>
        </section>

        <section className="doc-bottom-space-large">
      		<h2>Panel with Header and Body</h2>
        	<div className="panel -default">
        		<div className="heading">Panel Title</div>
        		<div className="body">Panel Body</div>
        	</div>
        </section>

        <section className="doc-bottom-space-large">
        	<h2>Panel with Footer and Body </h2>
        	<div className="panel -default">
        		<div className="body">Panel Body</div>
        		<div className="footer">Panel Footer</div>
        	</div>
        </section>

        <section className="doc-bottom-space-large">
        	<h2>Contextual Alternatives</h2>
        	<div className="panel -sky doc-bottom-space">
        		<div className="heading">Panel Title</div>
        		<div className="body">Panel Body</div>
        	</div>

        	<div className="panel -emerald doc-bottom-space">
        		<div className="heading">Panel Title</div>
        		<div className="body">Panel Body</div>
        	</div>

        	<div className="panel -sun doc-bottom-space">
        		<div className="heading">Panel Title</div>
        		<div className="body">Panel Body</div>
        	</div>

        	<div className="panel -crimson">
        		<div className="heading">Panel Title</div>
        		<div className="body">Panel Body</div>
        	</div>
        </section>

        <section className="doc-bottom-space-large">
        	<h2>Panel with Tables</h2>
        	<div className="panel -default">
            <div className="heading">Panel Title</div>
            <div className="body">
      				Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id eli.
            </div>
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
  				</div>
        </section>

        <section>
      		<h2>Panel With List Groups</h2>
      		<div className="panel -default">
            <div className="heading">Panel Title</div>
            <div className="body">
              Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id eli
            </div>
        		<div className="list-group">
        			<a className="menuitem">List Item</a>
        			<a className="menuitem">List Item</a>
        			<a className="menuitem">List Item</a>
        		</div>
          </div>
        </section>
	    </div>
    );
  }
}
