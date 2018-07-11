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
INSERT INTO leagues (leagueName, townsportId) VALUES ("Mondays", 3);
INSERT INTO leagues (leagueName, townsportId) VALUES ("Thursdays", 3);
INSERT INTO leagues (leagueName, townsportId) VALUES ("Saturday Morning", 3);
INSERT INTO leagues (leagueName, townsportId) VALUES ("Monday Night Double-Header", 2);

INSERT INTO teams (teamName, leagueId) VALUES ("Team Eleven", 1);
INSERT INTO teams (teamName, leagueId) VALUES ("Spare Me", 1);
INSERT INTO teams (teamName, leagueId) VALUES ("Striking Resemblance", 2);
INSERT INTO teams (teamName, leagueId) VALUES ("Split Happens", 2);
INSERT INTO teams (teamName, leagueId) VALUES ("Discount Turkey", 2);

INSERT INTO recCoordinators (email, pwd, townId) VALUES ("jim@blakewood.gov", "bear", 1);

INSERT INTO statisticians (email, pwd, townId) VALUES ("jill@blakewood.gov", "bear", 1);

INSERT INTO players (playerName, teamId) VALUES ("Ali", 1);
INSERT INTO players (playerName, teamId) VALUES ("Amanda", 1);
INSERT INTO players (playerName, teamId) VALUES ("Anthony", 1);
INSERT INTO players (playerName, teamId) VALUES ("Zach", 1);
INSERT INTO players (playerName, teamId) VALUES ("Dustin", 2);
INSERT INTO players (playerName, teamId) VALUES ("Mike", 2);
INSERT INTO players (playerName, teamId) VALUES ("Sean", 2);

INSERT INTO games (date, location, outcome, average, total, teamId) VALUES ('2018-12-06 18:00:00', 'Parma', 'win', 200, 900, 1);

INSERT INTO bowlingstats (average, total, handicap, playerId, gameId) VALUES (21, 210, 65, 1, 1);
INSERT INTO bowlingstats (average, total, handicap, playerId, gameId) VALUES (21, 210, 65, 2, 1);
INSERT INTO bowlingstats (average, total, handicap, playerId, gameId) VALUES (21, 210, 65, 3, 1);
INSERT INTO bowlingstats (average, total, handicap, playerId, gameId) VALUES (21, 210, 65, 4, 1);