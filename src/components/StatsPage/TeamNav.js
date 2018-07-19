import React from 'react';

const TeamNav = (props) =>(
    <div className="container">
      <div className='row'>

<div id="list-example" className="list-group flex-column position-fixed">
  <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
  <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
  <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
  <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
</div>
<div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example container">
<div className="float-right col-md-9">
  <h4 id="list-item-1">Item 1</h4>
  <p>.rs` AS `Players` ON `Teams`.`id` = `Players`.`TeamId`;
Executing (default): SELECT `Teams`.`id`, `Teams`.`teamName`, `Teams`.`wins`, `Teams`.`losses`, `Teams`.`totalGames`, `Teams`.`createdAt`, `Teams`.`updatedAt`, `Players`.`id` AS `Players.id`, `Players`.`playerName` AS `Players.playerName`, `Players`.`average` AS `Players.average`, `Players`.`handicap` AS `Players.handicap`, `Players`.`bestScore` AS `Players.bestScore`, `Players`.`totalStrikes` AS `Players.totalStrikes`, `Players`.`createdAt` AS `Players.createdAt`, `Players`.`updatedAt` AS `Players.updatedAt`, `Players`.`TeamId` AS `Players.TeamId` FROM `Teams` AS `Teams` LEFT OUTER JOIN `Players` AS `Players` ON `Teams`.`id` = `Players`.`TeamId`;
Executing (default): SELECT `Teams`.`id`, `Teams`.`teamName`, `Teams`.`wins`, `Teams`.`losses`, `Teams`.`totalGames`, `Teams`.`createdAt`, `Teams`.`updatedAt`, `Players`.`id` AS `Players.id`, `Players`.`playerName` AS `Players.playerName`, `Players`.`average` AS `Players.average`, `Players`.`handicap` AS `Players.handicap`, `Players`.`bestScore` AS `Players.bestScore`, `Players`.`totalStrikes` AS `Players.totalStrikes`, `Players`.`createdAt` AS `Players.createdAt`, `Players`.`updatedAt` AS `Players.updatedAt`, `Players`.`TeamId` AS `Players.TeamId` FROM `Teams` AS `Teams` LEFT OUTER JOIN `Players` AS `Players` ON `Teams`.`id` = `Players`.`TeamId`;</p>
  <h4 id="list-item-2">Item 2</h4>
  <p>rs` AS `Players` ON `Teams`.`id` = `Players`.`TeamId`;
Executing (default): SELECT `Teams`.`id`, `Teams`.`teamName`, `Teams`.`wins`, `Teams`.`losses`, `Teams`.`totalGames`, `Teams`.`createdAt`, `Teams`.`updatedAt`, `Players`.`id` AS `Players.id`, `Players`.`playerName` AS `Players.playerName`, `Players`.`average` AS `Players.average`, `Players`.`handicap` AS `Players.handicap`, `Players`.`bestScore` AS `Players.bestScore`, `Players`.`totalStrikes` AS `Players.totalStrikes`, `Players`.`createdAt` AS `Players.createdAt`, `Players`.`updatedAt` AS `Players.updatedAt`, `Players`.`TeamId` AS `Players.TeamId` FROM `Teams` AS `Teams` LEFT OUTER JOIN `Players` AS `Players` ON `Teams`.`id` = `Players`.`TeamId`;
Executing (default): SELECT `Teams`.`id`, `Teams`.`teamName`, `Teams`.`wins`, `Teams`.`losses`, `Teams`.`totalGames`, `Teams`.`createdAt`, `Teams`.`updatedAt`, `Players`.`id` AS `Players.id`, `Players`.`playerName` AS `Players.playerName`, `Players`.`average` AS `Players.average`, `Players`.`handicap` AS `Players.handicap`, `Players`.`bestScore` AS `Players.bestScore`, `Players`.`totalStrikes` AS `Players.totalStrikes`, `Players`.`createdAt` AS `Players.createdAt`, `Players`.`updatedAt` AS `Players.updatedAt`, `Players`.`TeamId` AS `Players.TeamId` FROM `Teams` AS `Teams` LEFT OUTER JOIN `Players` AS `Players` ON `Teams`.`id` = `Players`.`TeamId`;</p>
  <h4 id="list-item-3">Item 3</h4>
  <p>...</p>
  <h4 id="list-item-4">Item 4</h4>
  <p>...</p>
  </div>
</div>
</div>
</div>
);

export default TeamNav;