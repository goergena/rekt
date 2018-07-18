import React, { Component } from 'react';

class ScoreKeeping extends Component {
    constructor(props) {
        super(props)
        this.handleDeletePoints = this.handleDeletePoints.bind(this)
        this.handleAddPoints = this.handleAddPoints.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.state = {
            score: props.score
        }
    }

    componentDidMount() {
        try {
        const json = localStorage.getItem('score')
        // eslint-disable-next-line
        const score = parseInt(json)
            
            if (!isNaN(score)) {
        this.setState(() => ({ score }))
        }
    } catch (e) {
        // Do nothing at all if json data is invalid.
    }
}

    componentDidUpdate(prevProps, prevState) {
        if (prevState.score !== this.state.score) {
            // eslint-disable-next-line
        const json = parseInt(this.state.score);
        localStorage.setItem('score', json);
        console.log('saving data')
        }
    }

    handleRemoveAll() {
        this.setState(() => ({ score: [] }))
    }

    handleDeletePoints(scoreToRemove) {
        this.setState((prevState) => ({
            score: prevState.score.filter((points) => scoreToRemove !== points )
        }))
    }
    
    handleAddPoints(point) {
        if (!point) {
            return 'Enter valid value to add points.'
        } 
        this.setState((prevState) => ({ score: prevState.score.concat([point]) }))
    }

    render() {
        return (
            <div>
                <header>
                    <p>Input Your Scores Here</p>
                </header>
                <Display
                    score={this.state.score}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeletePoints={this.handleDeletePoints}
                />
                <AddOption
                    handleAddPoints={this.handleAddPoints}
                />
            
            </div>
        )
    }
}
ScoreKeeping.defaultProps = {
    score: []
}
// const Frames = (props) => {
//  // TODO: Add frames.
// }

const Display = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {props.score.length === 0 && <p>Enter in your points to get</p>}
            {
                props.score.map((points) => (
                    <Option
                    key={points}
                    optionText={points}
                    handleDeletePoints={props.handleDeletePoints}
                    />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
            onClick={(e) => {
                props.handleDeletePoints(props.optionText)
            }}

            >
            Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
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
                <input type="number" name="point"/>
                <button>Add Score</button>
            </form>
            </div>
        )
    }
} 

export default ScoreKeeping;
