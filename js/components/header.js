import React from 'react';

var Header= React.createClass({
	render: function(){
		return(	
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header col-md-10">
						<ul className="nav navbar-nav">
						<li><img className="navbar-brand" src="images/check.svg"/></li>
						<li><a className="navbar-brand" href="#">TEAM OF TEAMS</a></li>
						</ul>
					</div>
					<ul className="nav navbar-nav col-md-2">
						<li className="ckbtnli"><a role="button" className="ckbtn">Check In</a></li>
						<li><i className="fa fa-file-text hfa"></i></li>
						<li><i className="fa fa-bell hfa"></i></li>
						<li><img className="userimg-h" src="https://s3-us-west-2.amazonaws.com/defaultimgs/user.png"/></li>  
					</ul>
				</div>
			</nav>
		);
	},
});

export default Header