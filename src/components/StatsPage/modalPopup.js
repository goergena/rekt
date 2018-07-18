import React from 'react';
import API from '../../utils/API';




export default class modalPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            playerName: '',
            average: 0,
            handicap: 0,
            bestScore: 0,
            totalStrikes: 0,
          }
    
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }


    

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //       [name]: value
    //     });
    //   };
    
      handleFormSubmit = (event) => {
          event.preventDefault();
          const newplayer = {
            playerName: this.state.playerName,
            average: this.state.average,
            handicap: this.state.handicap,
            bestScore: this.state.bestScore,
            totalStrikes: this.state.totalStrikes,
            TeamId: this.props.TeamId
          }

          API.postPlayer(newplayer)
            .catch(err => console.log(err));
      };



    render() {
      return (
      <div>
          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
Add New Player
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">New Player</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <form>
  <div className="form-group">
    <input value={this.state.playerName} onChange={this.handleInputChange}type="text" className="form-control" name="playerName" placeholder="Name (required)"/>
  </div>
  <div className="form-group">
    <input  value={this.state.average} onChange={this.handleInputChange} type="number" className="form-control" name="average" placeholder="Average (required)"/>
  </div>
  <div className="form-group">
    <input value={this.state.handicap} onChange={this.handleInputChange} className="form-control" name="handicap" placeholder="Handicap (required)"/>
  </div>
  <div className="form-group">
    <input value={this.state.bestScore} onChange={this.handleInputChange} type="number" className="form-control" name="bestScore" placeholder="Best Score"/>
  </div>
  <div className="form-group">
    <input  value={this.state.totalStrikes} onChange={this.handleInputChange}type="number" className="form-control" name="totalStrikes" placeholder="Total Strikes"/>
  </div>
</form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      <button    
    //   disabled={!(this.state.playerName && this.state.average)}
                onClick={this.handleFormSubmit} type="button" className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div> 
      </div>
      );
    }
  }

