Atividade 3

CREATE DATABASE spotify;

USE spotify;

CREATE TABLE Usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (200),
    email VARCHAR (200)
);

CREATE TABLE Musicas(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (200),
    artista VARCHAR (200),
    duracao VARCHAR (200)
);

CREATE TABLE Playlist(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (200),
    usuarioid INTEGER,
    FOREIGN KEY (usuarioid) REFERENCES Usuarios(id)
);

CREATE TABLE Playlist_musica(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    ordem VARCHAR (200),
    musicasid INTEGER,
    playlistid INTEGER,
    FOREIGN KEY (musicasid) REFERENCES Musicas(id),
    FOREIGN KEY (playlistid) REFERENCES Playlist(id)
);

INSERT INTO Usuarios VALUES (DEFAULT, "Pietra", "pietra.lopes@portalsesi.sp");
INSERT INTO Musicas VALUES (DEFAULT, "Bluesman", "Baco Exu do Blues", "1:30");
INSERT INTO Playlist VALUES (DEFAULT, "Boas", "1");
INSERT INTO Playlist_musica VALUES (DEFAULT, "1-2-3", "1", "1");