import React from 'react';

var Cards= React.createClass({
	render: function(){
		return(
			<div className="col-md-2 cards">
				<img src="images/teamofteams.png " className="teamimg"/>
				<h6>{this.props.name}</h6>
				<span className="location">
				<img src="images/location.svg" className="locimg"/>
				{this.props.location}</span>
				<hr className="cardHr"/>
				<span>
				<img className="userimg-c" src="https://s3-us-west-2.amazonaws.com/defaultimgs/user.png"/>
				</span>
				<span>
				<a className="percentage">{this.props.percentage} %</a>
				</span>
			</div>
		);
	}
});


export default Cards