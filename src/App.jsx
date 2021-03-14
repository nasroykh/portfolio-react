import classes from './App.module.scss';
import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';

class App extends Component {

	state = {
		showSd: false,
		slidePosition: 0
	}

	showSdHandler = () => {
		console.log('hey');
		this.setState((prevState) => (
			{
				...this.state,
				showSd: !prevState.showSd
			}
		))
	}

	slideHandler = (e) => {
		if (e.currentTarget.id === 'next' && this.state.slidePosition<2) {
			this.setState((prevState) => (
				{
					...this.state,
					slidePosition: prevState.slidePosition+1
				}
			))
		}
		else if (e.currentTarget.id === 'prev' && this.state.slidePosition>0){
			this.setState((prevState) => (
				{
					...this.state,
					slidePosition: prevState.slidePosition-1
				}
			))
		}
	}

	render() {
		return (
			<div className={classes.App}>
				<NavBar showSdHandler={this.showSdHandler} showSd={this.state.showSd}/>
				<Home/>
				<Projects slideHandler={this.slideHandler} slidePosition={this.state.slidePosition}/>
				<AboutMe/>
				<Contact/>
			</div>
		);
	}
}

export default App;
