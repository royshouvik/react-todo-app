import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox';
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
    }

    render() {

    	let itemCompleted = this.props.completed ? "completed-item" : "";
        return (
			<Paper style={style.container} zDepth={1}>
				<Checkbox style={style.checkbox} checked={this.props.completed} onCheck={this.props.toggleTodo} itemID={this.props.itemId} />
				<span style={style.item} className={itemCompleted}>{this.props.text}</span>
				<ContentClear color={grey500} hoverColor={red500}/>
			</Paper>            
        );
    }
}

export default Todoitem;
