-- Création de la base de données
CREATE DATABASE IF NOT EXISTS RoomEase
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_general_ci;

-- Sélection de la base
USE RoomEase;

-- Table des utilisateurs
CREATE TABLE Utilisateurs (
    id_Utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(100) NOT NULL,
    Prenom VARCHAR(100) NOT NULL,
    Date_de_naissance DATE,
    Telephone VARCHAR(20),
    Email VARCHAR(150) UNIQUE NOT NULL,
    Mdp VARCHAR(255) NOT NULL
);

-- Table des types (rôles, statuts, etc.)
CREATE TABLE Types (
    id_Type INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(100) NOT NULL
);

-- Table d'appartenance (liaison Utilisateurs / Types)
CREATE TABLE Appartenir (
    id_Utilisateur INT,
    id_Type INT,
    PRIMARY KEY (id_Utilisateur, id_Type),
    FOREIGN KEY (id_Utilisateur) REFERENCES Utilisateurs(id_Utilisateur),
    FOREIGN KEY (id_Type) REFERENCES Types(id_Type)
);

-- Table des codes postaux
CREATE TABLE Code_postaux (
    id_code_postal INT PRIMARY KEY AUTO_INCREMENT,
    code_postal VARCHAR(10) NOT NULL
);

-- Table des villes
CREATE TABLE Villes (
    id_Ville INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(100) NOT NULL
);

-- Table des appartements
CREATE TABLE Appartements (
    id_Appartement INT PRIMARY KEY AUTO_INCREMENT,
    Adresse VARCHAR(255) NOT NULL,
    Superficie FLOAT,
    Nb_pieces INT,
    id_Ville INT,
    id_code_postal INT,
    FOREIGN KEY (id_Ville) REFERENCES Villes(id_Ville),
    FOREIGN KEY (id_code_postal) REFERENCES Code_postaux(id_code_postal)
);

-- Table des annonces
CREATE TABLE Annonces (
    id_Annonce INT PRIMARY KEY AUTO_INCREMENT,
    Titre VARCHAR(255) NOT NULL,
    Description TEXT,
    Prix FLOAT,
    Date_de_publication DATE,
    Statut VARCHAR(50),
    id_Utilisateur INT,
    FOREIGN KEY (id_Utilisateur) REFERENCES Utilisateurs(id_Utilisateur)
);

-- Table de liaison Appartements / Annonces
CREATE TABLE Proposer (
    id_Annonce INT,
    id_Appartement INT,
    PRIMARY KEY (id_Annonce, id_Appartement),
    FOREIGN KEY (id_Annonce) REFERENCES Annonces(id_Annonce),
    FOREIGN KEY (id_Appartement) REFERENCES Appartements(id_Appartement)
);

-- Table des messages
CREATE TABLE Messages (
    id_Message INT PRIMARY KEY AUTO_INCREMENT,
    Contenu TEXT NOT NULL,
    Date_envoi DATETIME,
    Lu BOOLEAN DEFAULT FALSE,
    id_utilisateur_id_destinataire INT,
    id_utilisateur_id_expediteur INT,
    FOREIGN KEY (id_utilisateur_id_destinataire) REFERENCES Utilisateurs(id_Utilisateur),
    FOREIGN KEY (id_utilisateur_id_expediteur) REFERENCES Utilisateurs(id_Utilisateur)
);

-- Table des avertissements
CREATE TABLE Avertissements (
    id_Avertissement INT PRIMARY KEY AUTO_INCREMENT,
    Date_avertissement DATE,
    Motif VARCHAR(255),
    id_utilisateur_id_destinataire INT,
    id_utilisateur_id_expediteur INT,
    FOREIGN KEY (id_utilisateur_id_destinataire) REFERENCES Utilisateurs(id_Utilisateur),
    FOREIGN KEY (id_utilisateur_id_expediteur) REFERENCES Utilisateurs(id_Utilisateur)
);

