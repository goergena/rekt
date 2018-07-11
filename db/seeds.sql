use rekt_db;

INSERT INTO sports (sport) VALUES ("Bowling");
INSERT INTO sports (sport) VALUES ("Softball");
INSERT INTO sports (sport) VALUES ("Basketball");

INSERT INTO towns (town) VALUES ("Blakewood");
INSERT INTO towns (town) VALUES ("Dustinshire");


INSERT INTO townsports (townId, sportId) VALUES (1, 1);
INSERT INTO townsports (townId, sportId) VALUES (1, 2);
INSERT INTO townsports (townId, sportId) VALUES (2, 1);

INSERT INTO leagues (leagueName, townsportId) VALUES ("Mondays", 1);
INSERT INTO leagues (leagueName, townsportId) VALUES ("Tuesdays", 1);
INSERT INTO leagues (leagueName, townsportId) VALUES ("Wednesdays", 1);
INSERT INTO leagues (leagueName, townsportId) VALUES ("Monday Night Double-Header", 2);

INSERT INTO teams (teamName, leagueId) VALUES ("Team Eleven", 2);
INSERT INTO teams (teamName, leagueId) VALUES ("Spare Me", 2);
INSERT INTO teams (teamName, leagueId) VALUES ("Striking Resemblance", 2);
INSERT INTO teams (teamName, leagueId) VALUES ("Split Happens", 2);
INSERT INTO teams (teamName, leagueId) VALUES ("Discount Turkey", 2);

INSERT INTO recCoordinators (email, pwd, townId) VALUES ("jim@blakewood.gov", "bear", 1);

INSERT INTO statisticians (email, pwd, townId) VALUES ("jill@blakewood.gov", "bear", 1);

INSERT INTO players (playerName, teamId) VALUES ("Ali", 1);
INSERT INTO players (playerName, teamId) VALUES ("Amanda", 1);
INSERT INTO players (playerName, teamId) VALUES ("Anthony", 1);
INSERT INTO players (playerName, teamId) VALUES ("Zach", 1);