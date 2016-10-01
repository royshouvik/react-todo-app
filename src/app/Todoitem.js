import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox';

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
		display: 'inline-block'
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
        return (
			<Paper style={style.container} zDepth={1}>
				<Checkbox style={style.checkbox} checked={this.props.completed} />
				<p style={style.item} className="todo-item">{this.props.text}</p>
			</Paper>            
        );
    }
}

export default Todoitem;
