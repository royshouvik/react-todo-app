import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import ContentClear from 'material-ui/svg-icons/content/clear';
import {red500, grey500} from 'material-ui/styles/colors';

const style = {
	container: {	height: 'auto',
					width: 600,
					margin: 10,
					display: 'block',
					padding: 12,
					textAlign: 'start'
				},
	item : {
		lineHeight: '28px',
		fontSize : '26px',
		margin : 0,
		width: '88%',
		display: 'inline-block',
		position: 'relative',
		overflowWrap : 'break-word'
	},
	checkbox: {
		display: 'inline-block',
		width : 'auto'
	}
}

class Todoitem extends Component {
    // static propTypes = {
    //     className: PropTypes.string,
    // };

    constructor(props) {
        super(props);
        this.state = {
        	editing: false,
        	text: this.props.text,
        	completed: this.props.completed
        }
    }

    updateTodo() {
    	// console.log("Updating todo");

    	this.setState({editing: !this.state.editing});

    	if(this.state.text === ""){
    		this.props.deleteTodo();
    	}
    	
    }

    componentDidUpdate(){
    	if(this.refs.textField){
    		this.refs.textField.focus();
    	}
    }

    updateTodoText(event) {
    	// debugger;
    	this.setState({text: event.target.value});
    	if(this.state.completed){
    		this.setState({completed: false});
    	}
    }
    handleEnter(event) {
    	if(event.keyCode === 13){
    		// debugger;
    		this.updateTodoText(event);
    		this.updateTodo();
    	}
    }

    componentWillReceiveProps(nextProps) {
    	this.setState({completed: nextProps.completed});
    }
    render() {
    	let itemCompleted = this.state.completed ? "completed-item" : "";
    	let textField;
    	if(this.state.editing){
    		textField = <TextField style={style.item}
    							   ref="textField" 
    							   id={String(this.props.id)} 
    							   value={this.state.text} 
    							   onBlur={this.updateTodo.bind(this)}
    							   onChange={this.updateTodoText.bind(this)}
    							   onKeyDown={this.handleEnter.bind(this)}
    							    />;
    	}
    	else {
    		textField = <span style={style.item} className={itemCompleted} 
    							onDoubleClick={this.updateTodo.bind(this)}>{this.state.text}</span>
    	}

    	
        return (
			<Paper style={style.container} zDepth={1} >
				<Checkbox style={style.checkbox} checked={this.state.completed} onCheck={this.props.toggleTodo}  />
				{textField}
				<ContentClear color={grey500} hoverColor={red500} onClick={this.props.deleteTodo} />
			</Paper>            
        );
    }
}

export default Todoitem;
