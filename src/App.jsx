import classes from './App.module.scss';
import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import SideDrawer from './elements/SideDrawer/SideDrawer';
import BackDrop from './elements/BackDrop/BackDrop';

class App extends Component {

	componentDidMount() {
		window.addEventListener('scroll', this.scrollHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollHandler);
	}

	state = {
		showSd: false,
		slidePosition: 0,
		scrolling: false
	}

	scrollHandler = (e) => {
		if (window.scrollY > 100) {
			this.setState({...this.state, scrolling: true})
		}
		else {
			this.setState({...this.state, scrolling: false})
		}
	}

	showSdHandler = () => {
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
				<NavBar showSdHandler={this.showSdHandler} showSd={this.state.showSd} scrolling={this.state.scrolling}/>
				<Home scrolling={this.state.scrolling}/>
				<Projects slideHandler={this.slideHandler} slidePosition={this.state.slidePosition}/>
				<AboutMe/>
				<Contact/>
            	<BackDrop showBd={this.state.showSd} hideBdHandler={this.showSdHandler}/>
				<SideDrawer showSd={this.state.showSd} showSdHandler={this.showSdHandler}/>
			</div>
		);
	}
}

export default App;
