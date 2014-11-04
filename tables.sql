/*Script*/

CREATE TABLE "user"
(
  username text,
  email text,
  fullname text,
  address text,
  city text,
  country text,
  id serial NOT NULL,
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  PRIMARY KEY (id),
  UNIQUE (username)
);

CREATE TABLE passport
(
  protocol text,
  password text,
  provider text,
  identifier text,
  tokens json,
  "user" integer,
  id serial NOT NULL,
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  PRIMARY KEY (id)
);

CREATE TABLE Calendario(
	username varchar,
	fecha date,
	nombreevento varchar,
	PRIMARY KEY(username),
	FOREIGN KEY(username) REFERENCES USUARIOS
	ON DELETE CASCADE
);

CREATE TABLE INBOX(
	username1 varchar,
	username2 varchar,
	Idinbox int,
	fecha date,
	description varchar,
	PRIMARY KEY(Idinbox),
	FOREIGN KEY(username1) REFERENCES USUARIOS
	FOREIGN KEY(username2) REFERENCES USUARIOS
	ON DELETE CASCADE
);
CREATE TABLE AMIGO(
	username1 varchar,
	username2 varchar,
	Idamigo int,
	fecha date,
	description varchar,
	PRIMARY KEY(Idamigo),
	FOREIGN KEY(username1) REFERENCES USUARIOS
	FOREIGN KEY(username2) REFERENCES USUARIOS
	ON DELETE CASCADE
);

CREATE TABLE PRODUCTOS(
	IDproducto int,
	description varchar,
	name varchar,
	PRIMARY KEY(IDproducto)
);

CREATE TABLE TIENE(
	username varchar,
	IDproducto int,
	PRIMARY KEY(username,IDproducto),
	FOREIGN KEY(username) REFERENCES USUARIOS
	FOREIGN KEY(IDproducto) REFERENCES PRODUCTOS
);

CREATE TABLE Ordenes(
	description varchar,
	username1 varchar,
	username2 varchar,
	IDproducto int
	IDorden int,
	PRIMARY KEY(IDorden),
	FOREIGN KEY(username1) REFERENCES USUARIOS
	FOREIGN KEY(username2) REFERENCES USUARIOS
	FOREIGN KEY(IDproducto) REFERENCES PRODUCTOS
);

CREATE TABLE posts(
	id integer,
	postDate varchar,
	postTime varchar,
	postContent varchar,
	FOREIGN KEY(id) REFERENCES "user"(id)
	ON DELETE CASCADE
);
