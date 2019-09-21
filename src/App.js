// REACT
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

// Styles
import './App.css';

// HOCS
import Layout from './hoc/Layout/Layout';

import Modal from './components/UI/Modal/Modal';

// Modal Children
import NewProjectForm from './components/Forms/AddProject/AddProject';

// Main Containers
import Logout from './containers/Auth/Logout/Logout';
import Auth from './containers/Auth/Auth';
import Dashboard from './containers/DashboardContainer/Dashboard';
import Todo from './containers/TodoContainer/Todo';
import AllFilesBrowser from './containers/AllFilesContainer/AllFilesContainer';
import LiveStream from './containers/LiveStreamContainer/LiveStreamContainer';
import Contacts from './containers/ContactsContainer/ContactsContainer';
import Messages from './containers/MessageContainer/MessagesContainer';
import SongTemplate from './containers/SongContainer/SongContainer';

class App extends Component {
	componentDidMount() {
		this.props.onLoadCheckLogin();
	}
	render() {
		let modalContent;

		if (this.props.isAddingProject) {
			modalContent = <NewProjectForm></NewProjectForm>;
		}

		let loginRedirect = null;

		if (!this.props.isLoggedIn) {
			loginRedirect = <Redirect to='/auth' />;
		}
		return (
			<div className='App'>
				<Layout>
					<Modal show={this.props.app.modal}>{modalContent}</Modal>
					{loginRedirect}
					<Route path='/auth' component={Auth}></Route>
					<Route path='/logout' component={Logout}></Route>
					<Route path='/dashboard' component={Dashboard}></Route>
					<Route path='/todo' component={Todo}></Route>
					<Route path='/all-files' component={AllFilesBrowser}></Route>
					<Route path='/live-stream' component={LiveStream}></Route>
					<Route path='/messages' component={Messages}></Route>
					<Route path='/contacts' component={Contacts}></Route>
					<Route
						path='/projects'
						render={() => {
							if (this.props.app.activeProject === '') {
								return <Redirect to='/dashboard' />;
							} else {
								if (this.props.app.selectedSong !== '') {
									return <SongTemplate></SongTemplate>;
								} else {
									return <h1>Please Select A Song</h1>;
								}
							}
						}}></Route>
				</Layout>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		app: state.app,
		modal: state.app.modal,
		isAddingProject: state.app.isAddingProject,
		projects: state.projects,
		isLoggedIn: state.auth.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLoadCheckLogin: () => dispatch(actions.authCheckState())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
