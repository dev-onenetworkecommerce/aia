import React from 'react';

export default class Panels extends React.Component {
  render() {
    return (
    	<div>
    		<h2>Basic Panel</h2>
    		<div className="panel panel-default">
    			<div className="panel-body">Basic Panel Example</div>
    		</div>

    		<h2>Panel with Header and Body</h2>
	      	<div className="panel panel-default">
	      		<div className="panel-header">Panel Title</div>
	      		<div className="panel-body">Panel Body</div>
	      	</div>

	      	<h2>Panel with Footer and Body </h2>
	      	<div className="panel panel-default">
	      		<div className="panel-body">Panel Body</div>
	      		<div className="panel-footer">Panel Footer</div>
	      	</div>

	      	<h2>Contextual Alternatives</h2>
	      	<div className="panel panel-sky">
	      		<div className="panel-header">Panel Title</div>
	      		<div className="panel-body">Panel Body</div>
	      	</div>

	      	<div className="panel panel-emerald">
	      		<div className="panel-header">Panel Title</div>
	      		<div className="panel-body">Panel Body</div>
	      	</div>

	      	<div className="panel panel-sun">
	      		<div className="panel-header">Panel Title</div>
	      		<div className="panel-body">Panel Body</div>
	      	</div>

	      	<div className="panel panel-crimson">
	      		<div className="panel-header">Panel Title</div>
	      		<div className="panel-body">Panel Body</div>
	      	</div>

	      	<h2>Panel with Tables</h2>
	      	<div className="panel panel-default">
    			<div className="panel-body">Basic Panel Example</div>
    		</div>
	    </div>
    );
  }
}
