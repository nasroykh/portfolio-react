import classes from './App.module.scss';
import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<NavBar/>
				<Home/>
				<Projects/>
				<AboutMe/>
				<Contact/>
			</div>
		);
	}
}

export default App;
