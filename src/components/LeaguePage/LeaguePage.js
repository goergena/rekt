import React from "react";
// import "./ClickItem.css";

const LeaguePage = props => (
 

    <div className="row"> 
      <h2>{props.sport.sport}</h2>
      {
        props.townSports.map(thing => (
          <div key={thing.id} className="col-md">
              {thing.Leagues.map(item => (
                  <ul>
                      <li>{item.leagueName}</li>
                      </ul>
              ))}

          </div>
      ))}
    </div> 


);

//export default LeaguePage;



//  import React, { Component } from 'react';



// const teams = ['Team Dustin', 'Team Mike', 'Team Sean'];

// class LeaguePage extends Component {
//   render() {
//     return (
//     <div className="container">
//       <h2>League Page</h2>
//       <h2>Monday Night League (change this probs)</h2>

// <div className="row">
//    <nav className="nav flex-column">
//   <a className="nav-link disabled" href="/">{teams[0]}</a>
//   <a className="nav-link disabled" href="/">{teams[1]}</a>
//   <a className="nav-link disabled" href="/">{teams[2]}</a>
//   <a className="nav-link disabled" href="/">{teams[3]}</a>
// </nav>

// <div className="col-md-8">
// <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
// </div>

// </div>



      
//     </div>
        
//     );
//   }
// }

export default LeaguePage;