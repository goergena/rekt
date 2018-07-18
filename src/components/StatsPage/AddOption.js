import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddPoints = this.handleAddPoints.bind(this)
        this.state = { 
            error: undefined
        }
    }
     handleAddPoints(e) {
        e.preventDefault();

        const point = e.target.elements.point.value.trim()
        const error = this.props.handleAddPoints(point);

        this.setState(() =>  ({ error }))

        if (!error) {
            e.target.elements.point.value = '';
        }
    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddPoints}>
                <input type="text" name="point"/>
                <button>Add Score</button>
            </form>
            </div>
        )
    }
} 

