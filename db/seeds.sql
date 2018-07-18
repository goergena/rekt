use rekt_db;

INSERT INTO teams (teamName, wins, losses, totalGames) VALUES ("Team Eleven", 8, 2, 10);
INSERT INTO teams (teamName, wins, losses, totalGames) VALUES ("Spare Me", 5, 5, 10);
INSERT INTO teams (teamName, wins, losses, totalGames) VALUES ("Striking Resemblance", 7, 3, 10);
INSERT INTO teams (teamName, wins, losses, totalGames) VALUES ("Split Happens", 2, 8, 10);
INSERT INTO teams (teamName, wins, losses, totalGames) VALUES ("Discount Turkey", 6, 4, 10);

INSERT INTO players (playerName, average, handicap, bestScore, totalStrikes, teamId) VALUES ("Ali", 89, 66, 104, 15, 1);
INSERT INTO players (playerName, average, handicap, bestScore, totalStrikes, teamId) VALUES ("Amanda", 150, 5, 200, 75, 1);
INSERT INTO players (playerName, average, handicap, bestScore, totalStrikes, teamId) VALUES ("Anthony", 200, 0, 220, 100, 1);
INSERT INTO players (playerName, average, handicap, bestScore, totalStrikes, teamId) VALUES ("Zach", 210, 0, 267, 120, 1);
INSERT INTO players (playerName, average, handicap, bestScore, totalStrikes, teamId) VALUES ("Dustin", 250, 0, 300, 150, 2);
INSERT INTO players (playerName, average, handicap, bestScore, totalStrikes, teamId) VALUES ("Mike",  175, 0, 300, 100, 2);
INSERT INTO players (playerName, average, handicap, bestScore, totalStrikes, teamId) VALUES ("Sean", 140, 15, 189, 40, 2);

-- INSERT INTO sports (sport) VALUES ("Bowling");
-- INSERT INTO sports (sport) VALUES ("Softball");
-- INSERT INTO sports (sport) VALUES ("Basketball");

-- INSERT INTO towns (town) VALUES ("Blakewood");
-- INSERT INTO towns (town) VALUES ("Dustinshire");


-- INSERT INTO townsports (townId, sportId) VALUES (1, 1);
-- INSERT INTO townsports (townId, sportId) VALUES (1, 2);
-- INSERT INTO townsports (townId, sportId) VALUES (2, 1);

-- INSERT INTO games (date, location, outcome, average, total, teamId) VALUES ('2018-12-06 18:00:00', 'Parma', 'win', 200, 900, 1);

-- INSERT INTO bowlingstats (average, total, handicap, playerId, gameId) VALUES (21, 210, 65, 1, 1);
-- INSERT INTO bowlingstats (average, total, handicap, playerId, gameId) VALUES (21, 210, 65, 2, 1);
-- INSERT INTO bowlingstats (average, total, handicap, playerId, gameId) VALUES (21, 210, 65, 3, 1);
-- INSERT INTO bowlingstats (average, total, handicap, playerId, gameId) VALUES (21, 210, 65, 4, 1);


-- INSERT INTO recCoordinators (email, pwd, townId) VALUES ("jim@blakewood.gov", "bear", 1);

-- INSERT INTO statisticians (email, pwd, townId) VALUES ("jill@blakewood.gov", "bear", 1);



-- INSERT INTO leagues (leagueName, townsportId) VALUES ("Mondays", 1);
-- INSERT INTO leagues (leagueName, townsportId) VALUES ("Tuesdays", 1);
-- INSERT INTO leagues (leagueName, townsportId) VALUES ("Wednesdays", 1);
-- INSERT INTO leagues (leagueName, townsportId) VALUES ("Mondays", 3);
-- INSERT INTO leagues (leagueName, townsportId) VALUES ("Thursdays", 3);
-- INSERT INTO leagues (leagueName, townsportId) VALUES ("Saturday Morning", 3);
-- INSERT INTO leagues (leagueName, townsportId) VALUES ("Monday Night Double-Header", 2);
