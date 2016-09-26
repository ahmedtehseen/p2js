import React from 'react';

var Table = React.createClass({
	render: function(){
		return(
		
		<div className="col-md-7 tbl">
			<form>
				<div className="row">
					<div className="col-md-10">
						<i className="fa fa-search fa-lg fasearch"></i>
						<input type="search" className="search" placeholder="Search"></input>
					</div>
					<div className="col-sm-1">  
						<select className="slct">
							<option>Every One   </option>
							<option>Every One   </option>
							<option>Every One   </option>
						</select>
					</div>
				</div>
			</form>
			<hr/>
			<table>
				<thead>
				  <tr>
					<th>Name</th>
					<th>Team</th>
					<th>Last Modified</th>
				  </tr>
				</thead>
				<tbody className="tbody">
				  <tr>
					<td>John</td>
					<td>Doe</td>
					<td>1/2/2016</td>
				  </tr>
				  <tr>
					<td>Mary</td>
					<td>Moe</td>
					<td>8/9/2016</td>
				  </tr>
				  <tr>
					<td>July</td>
					<td>Dooley</td>
					<td>5/8/2016</td>
				  </tr>
				</tbody>
			</table>
		</div>
		);
	}
});

export default Table