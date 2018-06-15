DROP DATABASE IF EXISTS gametime;
CREATE DATABASE gametime;

\c gametime;

CREATE TABLE users(
    id SERIAL PRIMARY KEY UNIQUE,
    name TEXT,
    api_id VARCHAR UNIQUE,
    upload_url TEXT
);

CREATE TABLE videos(
    id SERIAL PRIMARY KEY UNIQUE,
    userId INTEGER REFERENCES users(id),
    title VARCHAR,
    description VARCHAR,
    selectedFile VARCHAR
);

CREATE TABLE likes(    
    id SERIAL PRIMARY KEY UNIQUE,
    userId INTEGER REFERENCES users(id),
    likes INTEGER
);

CREATE TABLE watchlater(
    id SERIAL PRIMARY KEY UNIQUE,
    userId INTEGER REFERENCES users(id),
    watch_later_urls TEXT
);

INSERT INTO users (name, api_id, upload_url) VALUES ('drew', 'x34g1', 'test'),
('lebron', 'x34g2', 'test2'), ('curry', 'x34g3', 'test3');

INSERT INTO videos (userId, title, description, selectedFile) VALUES (3,'title1', 'history of basketball', 'fileurl'),
(2, 'title2', 'how to be a king', 'fileurl1'), (1, 'title3', 'how to shoot 3s', 'fileurl2'), (2, 'title3', '6 Finals losses', 'fileurl4'),
(1, 'title5', 'amatuer basketball', 'fileurl5'), (3, 'title3', '3PEAT?', 'fileurl6');

INSERT INTO likes (userId, likes) VALUES (2, 62),(1, 98),(3, 120);

INSERT INTO watchlater (userId, watch_later_urls) VALUES (3, 35), (2, 25), (1, 55); 