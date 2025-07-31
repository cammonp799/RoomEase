-- Se connecter manuellement à la base via : \c roomease

-- Table des utilisateurs
CREATE TABLE Utilisateurs (
                              id_Utilisateur SERIAL PRIMARY KEY,
                              Nom VARCHAR(100) NOT NULL,
                              Prenom VARCHAR(100) NOT NULL,
                              Date_de_naissance DATE,
                              Telephone VARCHAR(20),
                              Email VARCHAR(150) UNIQUE NOT NULL,
                              Mdp VARCHAR(255) NOT NULL
);

-- Table des types
CREATE TABLE Types (
                       id_Type SERIAL PRIMARY KEY,
                       Nom VARCHAR(100) NOT NULL
);

-- Liaison Utilisateur / Type
CREATE TABLE Appartenir (
                            id_Utilisateur INT,
                            id_Type INT,
                            PRIMARY KEY (id_Utilisateur, id_Type),
                            FOREIGN KEY (id_Utilisateur) REFERENCES Utilisateurs(id_Utilisateur),
                            FOREIGN KEY (id_Type) REFERENCES Types(id_Type)
);

-- Codes postaux
CREATE TABLE Code_postaux (
                              id_code_postal SERIAL PRIMARY KEY,
                              code_postal VARCHAR(10) NOT NULL
);

-- Villes
CREATE TABLE Villes (
                        id_Ville SERIAL PRIMARY KEY,
                        Nom VARCHAR(100) NOT NULL
);

-- Appartements
CREATE TABLE Appartements (
                              id_Appartement SERIAL PRIMARY KEY,
                              Adresse VARCHAR(255) NOT NULL,
                              Superficie FLOAT,
                              Nb_pieces INT,
                              id_Ville INT,
                              id_code_postal INT,
                              FOREIGN KEY (id_Ville) REFERENCES Villes(id_Ville),
                              FOREIGN KEY (id_code_postal) REFERENCES Code_postaux(id_code_postal)
);

-- Annonces
CREATE TABLE Annonces (
                          id_Annonce SERIAL PRIMARY KEY,
                          Titre VARCHAR(255) NOT NULL,
                          Description TEXT,
                          Prix FLOAT,
                          Date_de_publication DATE,
                          Statut VARCHAR(50),
                          id_Utilisateur INT,
                          FOREIGN KEY (id_Utilisateur) REFERENCES Utilisateurs(id_Utilisateur)
);

-- Lien Appartements / Annonces
CREATE TABLE Proposer (
                          id_Annonce INT,
                          id_Appartement INT,
                          PRIMARY KEY (id_Annonce, id_Appartement),
                          FOREIGN KEY (id_Annonce) REFERENCES Annonces(id_Annonce),
                          FOREIGN KEY (id_Appartement) REFERENCES Appartements(id_Appartement)
);

-- Messages
CREATE TABLE Messages (
                          id_Message SERIAL PRIMARY KEY,
                          Contenu TEXT NOT NULL,
                          Date_envoi TIMESTAMP,
                          Lu BOOLEAN DEFAULT FALSE,
                          id_utilisateur_id_destinataire INT,
                          id_utilisateur_id_expediteur INT,
                          FOREIGN KEY (id_utilisateur_id_destinataire) REFERENCES Utilisateurs(id_Utilisateur),
                          FOREIGN KEY (id_utilisateur_id_expediteur) REFERENCES Utilisateurs(id_Utilisateur)
);

-- Avertissements
CREATE TABLE Avertissements (
                                id_Avertissement SERIAL PRIMARY KEY,
                                Date_avertissement DATE,
                                Motif VARCHAR(255),
                                id_utilisateur_id_destinataire INT,
                                id_utilisateur_id_expediteur INT,
                                FOREIGN KEY (id_utilisateur_id_destinataire) REFERENCES Utilisateurs(id_Utilisateur),
                                FOREIGN KEY (id_utilisateur_id_expediteur) REFERENCES Utilisateurs(id_Utilisateur)
);
