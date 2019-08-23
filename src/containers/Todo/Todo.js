import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../../components/Todo/TodoPage/TodoItem';
import classes from './Todo.module.css';

class TodoList extends Component {
	state = {};
	render() {
		const currentTodos = this.props.todos.map(todo => {
			return (
				<TodoItem
					key={todo.title}
					completed={todo.completed}
					title={todo.title}
					artist={todo.location.artist}
					project={todo.location.project}
					song={todo.location.song}
					due={todo.dueDate}
				/>
			);
		});
		return (
			<div className={classes.Container}>
				<div className={classes.FirstContainer}>
					<input className={classes.SearchInput} placeholder='Search...' />
					<div className={classes.TopRightIcons}>
						<img src={require('../../assets/check-todo.png')} alt='check' />
						<img src={require('../../assets/trash-light.png')} alt='trash' />
						<img
							src={require('../../assets/archive-light.png')}
							alt='archive'
						/>
					</div>
				</div>
				<div className={classes.FilterContainer}>
					<div className={classes.FilterBtn}>
						<h2>ALL {this.props.filters.all}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>INBOX {this.props.filters.inbox}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>MY DAY {this.props.filters.myDay}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>TODAY {this.props.filters.today}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>TOMORROW {this.props.filters.tomorrow}</h2>
					</div>
					<div className={classes.FilterBtn}>
						<h2>NEXT 7 DAYS {this.props.filters.nextSeven}</h2>
					</div>
				</div>
				<div className={classes.BtnsContainer}>
					<div className={classes.LeftBtns}>
						<img src={require('../../assets/trash.png')} alt='trash' />
						<img src={require('../../assets/archive.png')} alt='archive' />
						<img src={require('../../assets/move-dark.png')} alt='move' />
						<img src={require('../../assets/check-todo.png')} alt='check' />
					</div>
					<img
						src={require('../../assets/add.png')}
						alt='trash'
						className={classes.TodoAdd}
					/>
				</div>
				<div className={classes.TodoListContainer}>
					<div className={classes.ColTitles}>
						<p className={classes.TodoTtl}>Todo</p>
						<p className={classes.LocationTtl}>Location</p>
						<p className={classes.DueTtl}>Due</p>
					</div>
					<div className={classes.TodoList}>{currentTodos}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.todo.filters,
		todos: state.todo.todos
	};
};

const mapDispatchToProp = dipatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(TodoList);
