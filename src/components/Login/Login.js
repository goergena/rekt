import React from 'react';



export default class ModalLogin extends React.Component {
  state= {
    user: '',
    password: ''
  }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
          [id]: value.trim()
        });
      };
    
      handleFormSubmit = (event) => {
          event.preventDefault();
            window.location = '/add';
  

      };



    render() {
      return (
<div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
Login
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


</div>

      );
    }
  }

  // <div className="modal fade" id="loginFade" tabIndex="-1" role="dialog" aria-labelledby="labellogin" aria-hidden="true">
  // <div className="modal-dialog" role="document">
  //   <div className="modal-content">
  //   <div className="modal-header">
  //       <h5 className="modal-title" id="labellogin">Login</h5>
  //       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
  //         <span aria-hidden="true">&times;</span>
  //       </button>
  //     </div>
  //     <div className="modal-body text-left">
  //     <form>
  //     <div className="form-group">
  //       <label htmlFor="user">Username</label>
  //       <input value={this.state.user} onChange={this.handleInputChange} type="username" className="form-control" id="user"  placeholder="Username"/>
     
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="exampleInputPassword1">Password</label>
  //       <input   value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" id="password" placeholder="Password"/>
  //     </div>
  //  <button    onClick={this.handleFormSubmit} disabled={!(this.state.password==='demo')} type="submit" data-dismiss="modal" className="btn btn-primary">Submit</button> 
  //   </form>
  //   </div>
  //   </div>
  // </div>
  
  // </div> 



