'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Table from './components/table';
import Cards from './components/cards';


ReactDOM.render(
	<div>
		<Header/>
		<Table/>
		<Cards name="Tehseen" location="Home" percentage="60"/>
		<Cards name="Ali" location="Office" percentage="0"/>
		<Cards name="Ahmed" location="Home" percentage="45"/>
	</div>
	,document.getElementById('app')
);