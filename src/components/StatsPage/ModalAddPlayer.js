import React from 'react';
import API from '../../utils/API';


export default class ModalAddPlayer extends React.Component {

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


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = (event) => {
          event.preventDefault();
          if(this.state.average>300 || this.state.bestScore >300 || this.state.handicap>300) {
            alert('Cannot exceed 300');
            return;
          }
          if(this.state.average<0 || this.state.bestScore <0 || this.state.handicap<0 || this.state.totalStrikes < 0) {
            alert('No negative values');
            return;
          }
          const newplayer = {
            playerName: this.state.playerName,
            average: this.state.average,
            handicap: this.state.handicap,
            bestScore: this.state.bestScore,
            totalStrikes: this.state.totalStrikes,
            TeamId: 3
          }
          {console.log(this.props.selectTeamId)}

          API.postPlayer(newplayer)
            .catch(err => console.log(err));
      };



    render() {
      return (
      <div>
          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
+ New Player
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
    <div className="modal-body text-left">
    
    <form>
  <div className="form-group">
  <label htmlFor="playerName">Name (required)</label>
    <input value={this.state.playerName} onChange={this.handleInputChange}type="text" className="form-control" name="playerName"/>
  </div>
  <div className="form-group">
  <label htmlFor="average">Average (required)</label>
    <input  value={this.state.average} onChange={this.handleInputChange} type="number" className="form-control" name="average"/>
  </div>
  <div className="form-group">
  <label htmlFor="Handicap">Handicap</label>
    <input value={this.state.handicap} onChange={this.handleInputChange} className="form-control" name="handicap"/>
  </div>
  <div className="form-group">
  <label htmlFor="Best Score">Best Score</label>
    <input value={this.state.bestScore} onChange={this.handleInputChange} type="number" className="form-control" name="bestScore" placeholder="Best Score"/>
  </div>
  <div className="form-group">
  <label htmlFor="Total Strikes">Total Strikes</label>
    <input  value={this.state.totalStrikes} onChange={this.handleInputChange}type="number" className="form-control" name="totalStrikes" placeholder="Total Strikes"/>
  </div>
</form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      <button    
      disabled={!(this.state.playerName && this.state.average)}
                onClick={this.handleFormSubmit} type="button" className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div> 
      </div>
      );
    }
  }

