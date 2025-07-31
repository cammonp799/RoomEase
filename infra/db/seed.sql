-- Nettoyage propre (optionnel en dev)
TRUNCATE TABLE Appartenir, Proposer, Annonces, Appartements, Villes, Code_postaux, Messages, Avertissements, Types, Utilisateurs RESTART IDENTITY CASCADE;

-- Types (rôles)
INSERT INTO Types (Nom) VALUES
                            ('Admin'),
                            ('Locataire');

-- Utilisateurs
INSERT INTO Utilisateurs (Nom, Prenom, Date_de_naissance, Telephone, Email, Mdp) VALUES
                                                                                     ('Martin', 'Julie', '1995-03-21', '0612345678', 'julie@example.com', 'hashedpass1'),
                                                                                     ('Durand', 'Alex', '1998-11-02', '0623456789', 'alex@example.com', 'hashedpass2');

-- Liaison Utilisateur / Type
INSERT INTO Appartenir (id_Utilisateur, id_Type) VALUES
                                                     (1, 1),  -- Julie est Admin
                                                     (2, 2);  -- Alex est Locataire

-- Codes postaux
INSERT INTO Code_postaux (code_postal) VALUES
                                           ('75011'),
                                           ('69007');

-- Villes
INSERT INTO Villes (Nom) VALUES
                             ('Paris'),
                             ('Lyon');

-- Appartements
INSERT INTO Appartements (Adresse, Superficie, Nb_pieces, id_Ville, id_code_postal) VALUES
                                                                                        ('12 rue de Lyon', 65.0, 3, 2, 2),   -- Lyon 69007
                                                                                        ('24 rue Oberkampf', 42.5, 2, 1, 1); -- Paris 75011

-- Annonces
INSERT INTO Annonces (Titre, Description, Prix, Date_de_publication, Statut, id_Utilisateur) VALUES
                                                                                                 ('Coloc à Lyon 7e', 'Ambiance calme et studieuse', 500.00, CURRENT_DATE, 'active', 2),
                                                                                                 ('Chambre dispo à Paris 11e', 'Coloc sympa à deux pas du métro', 750.00, CURRENT_DATE, 'active', 1);

-- Liaison Appartements / Annonces
INSERT INTO Proposer (id_Annonce, id_Appartement) VALUES
                                                      (1, 1),
                                                      (2, 2);

-- Messages entre utilisateurs
INSERT INTO Messages (Contenu, Date_envoi, Lu, id_utilisateur_id_destinataire, id_utilisateur_id_expediteur) VALUES
                                                                                                                 ('Bonjour, la chambre est-elle toujours dispo ?', NOW(), FALSE, 1, 2),
                                                                                                                 ('Oui, toujours disponible 😊', NOW(), TRUE, 2, 1);

-- Avertissements
INSERT INTO Avertissements (Date_avertissement, Motif, id_utilisateur_id_destinataire, id_utilisateur_id_expediteur) VALUES
    (CURRENT_DATE, 'Non-respect des règles de colocation', 2, 1);
